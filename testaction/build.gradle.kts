@file:Suppress("UNUSED_VARIABLE", "EXPERIMENTAL_API_USAGE")

import org.jetbrains.dokka.Platform
import org.jetbrains.dokka.gradle.DokkaTask
import java.time.Duration

plugins {
    id("org.jetbrains.kotlin.multiplatform")
    id("org.jetbrains.kotlin.plugin.serialization")
    id("org.jetbrains.dokka")
}

group = rootProject.group
version = rootProject.version

kotlin {

    val iosArm64 = iosArm64("iosArm64")
    val iosX64 = iosX64("iosX64")
    configure(listOf(iosArm64, iosX64)) {
        binaries {
            framework(listOf(RELEASE))
        }
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

    js(IR) {
        moduleName = "keeplink"
        compilations.all {
            kotlinOptions.freeCompilerArgs += listOf(
                "-opt-in=kotlin.js.ExperimentalJsExport"
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
        }
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(project(":deeplink"))
                implementation(project(":mocks"))
                implementation(libs.kotlin.serialization.core)
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(libs.kotlin.serialization.json)
                implementation(libs.test.kotlin.common)
                implementation(libs.test.kotlin.annotations.common)
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
            dependsOn(commonTest)
            dependencies {
                implementation(kotlin("test-junit"))
            }
        }
        val jsMain by getting
        val jsTest by getting {
            dependsOn(commonTest)
            dependencies {
                implementation(kotlin("test-js"))
            }
        }
    }
}

tasks.withType<DokkaTask>().configureEach {
    val output = project.rootDir.resolve("doc").resolve(name)

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

val javadocJar by tasks.creating(Jar::class) {
    group = "documentation"
    archiveClassifier.set("javadoc")
    from(tasks.dokkaHtml)
}
