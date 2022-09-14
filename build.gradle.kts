@file:Suppress("UNUSED_VARIABLE", "EXPERIMENTAL_API_USAGE")

import org.jetbrains.dokka.Platform
import org.jetbrains.dokka.gradle.DokkaTask
import org.jetbrains.kotlin.gradle.tasks.FatFrameworkTask
import java.net.URI
import java.time.Duration

plugins {
    kotlin("multiplatform") version "1.7.10"
    kotlin("plugin.serialization") version "1.7.10"
    id("org.jetbrains.dokka") version "1.7.10"
    id("maven-publish")
    id("org.ajoberstar.grgit") version "4.1.0"
}

apply(from = "gradle/versioning.gradle")
val buildVersionName = project.extensions.extraProperties["buildVersionName"] as groovy.lang.Closure<*>
val buildVersionCode = project.extensions.extraProperties["buildVersionCode"] as groovy.lang.Closure<*>

group = "com.flyxo"
version = buildVersionName()

repositories {
    mavenCentral()
}

kotlin {
    val iosArm64 = iosArm64("iosArm64")
    val iosX64 = iosX64("iosX64")
    configure(listOf(iosArm64, iosX64)) {
        binaries {
            framework(listOf(RELEASE))
        }
    }
    val outputIos by tasks.creating(FatFrameworkTask::class) {
        group = "output"
        destinationDir = file("$projectDir/output/ios/Fat")
        from(
            iosArm64.binaries.getFramework("RELEASE"),
            iosX64.binaries.getFramework("RELEASE")
        )
    }
    val outputIosArm64 by tasks.creating(Copy::class) {
        group = "output"
        into(file("$projectDir/output/ios/Arm64"))
        from(iosArm64.binaries.getFramework("RELEASE").linkTask)
    }
    val outputIosX64 by tasks.creating(Copy::class) {
        group = "output"
        into(file("$projectDir/output/ios/X64"))
        from(iosX64.binaries.getFramework("RELEASE").linkTask)
    }

    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
            kotlinOptions.freeCompilerArgs += listOf(
                "-Xuse-ir"
            )
        }
        testRuns["test"].executionTask.configure {
            useJUnit()
        }
    }
    val dokkaJar by tasks.creating(Jar::class) {
        group = "documentation"
        archiveClassifier.set("javadoc")
        from(tasks.dokkaHtml)
    }
    val outputJvm by tasks.creating(Copy::class) {
        group = "output"
        from(tasks.findByName("jvmJar"), tasks.findByName("jvmSourcesJar"), tasks.findByName("dokkaJar"))
        into(file("$projectDir/output/jvm"))
        mustRunAfter(tasks.build)
    }

    js(IR) {
        moduleName = "flyxo-deep-link"
        compilations.all {
            kotlinOptions.freeCompilerArgs += listOf(
                "-Xopt-in=kotlin.js.ExperimentalJsExport"
            )
        }
        binaries.library()
        useCommonJs()
        nodejs {
            testTask {
                useMocha {
                    timeout = "10s"
                }
            }
        }
        browser {
            testTask {
                useMocha {
                    timeout = "10s"
                }
            }
            // On customizing JS builds and distribution:
            // https://kotlinlang.org/docs/reference/js-project-setup.html#choosing-execution-environment
            distribution {
                directory = file("$projectDir/output/npm")
            }
        }
    }

    val serializationVersion = "1.3.2"

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-core:$serializationVersion")
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$serializationVersion")
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
        }
        val iosX64Main by sourceSets.getting
        val iosArm64Main by sourceSets.getting
        val iosMain by sourceSets.creating {
            dependsOn(commonMain)
            iosX64Main.dependsOn(this)
            iosArm64Main.dependsOn(this)
        }
        val iosX64Test by sourceSets.getting
        val iosArm64Test by sourceSets.getting
        val iosTest by sourceSets.creating {
            dependsOn(commonTest)
            iosX64Test.dependsOn(this)
            iosArm64Test.dependsOn(this)
        }
        val jvmMain by getting
        val jvmTest by getting {
            dependencies {
                implementation(kotlin("test-junit"))
            }
        }
        val jsMain by getting
        val jsTest by getting {
            dependencies {
                implementation(kotlin("test-js"))
            }
        }
    }
    targets.all {
        compilations.all {
            kotlinOptions {
                freeCompilerArgs = freeCompilerArgs + listOf(
                    "-Xopt-in=kotlin.js.ExperimentalJsExport"
                )
            }
        }
    }
}

tasks.withType<DokkaTask>().configureEach {
    val output = projectDir.resolve("doc").resolve(name)

    outputDirectory.set(output)
    doFirst {
        delete(output)
    }

    setProperty("timeout", Duration.ofMinutes(3))

    dokkaSourceSets {
        configureEach {
            includes.from(rootProject.file("moduledoc.md").path)
            includeNonPublic.set(false)
            skipEmptyPackages.set(false)
            if (platform.get() == Platform.native) {
                displayName.set("native")
            }
        }
    }
}

tasks.withType<AbstractTestTask> {
    testLogging {
        events("failed", "standardOut", "standardError")
        exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
        showStackTraces = true
    }
}


publishing {
    repositories {
        maven {
            name ="output"
            url = URI("file://${file("$projectDir/output/jvm").invariantSeparatorsPath}")
        }
    }
}

afterEvaluate {
    val publications = extensions.getByType<PublishingExtension>().publications
    publications.filterIsInstance<MavenPublication>().forEach { pub ->
        pub.groupId = rootProject.group as String
        pub.artifact(tasks.findByName("dokkaJar"))
    }
}

val displayVersion by tasks.creating(Jar::class) {
    group = "documentation"
    description = "Display application version name"
    outputs.upToDateWhen { false }
    doLast {
        println("Project version: ${project.version}")
    }
}

