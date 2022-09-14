@file:Suppress("UNUSED_VARIABLE", "EXPERIMENTAL_API_USAGE")

import org.jetbrains.dokka.Platform
import org.jetbrains.dokka.gradle.DokkaTask
import java.net.URI
import java.time.Duration

plugins {
    kotlin("multiplatform") version "1.7.10"
    kotlin("plugin.serialization") version "1.7.10"
    id("org.jetbrains.dokka") version "1.7.10"
    id("maven-publish")
    id("signing")
    id("org.ajoberstar.grgit") version "4.1.0"
    id("io.github.gradle-nexus.publish-plugin") version "1.0.0"
}

apply(from = "gradle/versioning.gradle")
apply(from = "gradle/maven-publish-config.gradle")
val buildVersionName = project.extensions.extraProperties["buildVersionName"] as groovy.lang.Closure<*>
val buildVersionCode = project.extensions.extraProperties["buildVersionCode"] as groovy.lang.Closure<*>

group = "com.motorro"
version = buildVersionName()

repositories {
    mavenLocal()
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
        }
    }

    val serializationVersion = "1.4.0"

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

    targets.all {
        compilations.all {
            kotlinOptions {
                freeCompilerArgs = freeCompilerArgs + listOf(
                    "-opt-in=kotlin.RequiresOptIn",
                    "-Xinline-classes"
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

val displayVersion by tasks.creating(Jar::class) {
    group = "documentation"
    description = "Display application version name"
    outputs.upToDateWhen { false }
    doLast {
        println("Project version: ${project.version}")
    }
}

val libId = "keeplink"
val libName = "keeplink"
val libDesc = "Multiplatform deep-link operations"
val projectUrl: String = "https://github.com/motorro/KeepLink"
val projectScm: String = "https://github.com/motorro/KeepLink.git"
val ossrhUsername: String? by project.extra
val ossrhPassword: String? by project.extra
val developerId: String = "motorro"
val developerName: String = "Nikolai Kotchetkov"
val developerEmail: String = "motorro@gmail.com"
val signingKey: String? by project.extra
val signingPassword: String? by project.extra

val javadocJar by tasks.creating(Jar::class) {
    group = "documentation"
    archiveClassifier.set("javadoc")
    from(tasks.dokkaHtml)
}

publishing {
    repositories {
        maven {
            name = "sonatype"
            url = URI("https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/")
            credentials {
                username = ossrhUsername
                password = ossrhPassword
            }
        }
    }

    publications.withType<MavenPublication> {
        artifact(javadocJar)
        pom {
            name.set(libName)
            description.set(libDesc)
            url.set(projectUrl)
            licenses {
                license {
                    name.set("Apache-2.0")
                    url.set("https://apache.org/licenses/LICENSE-2.0")
                }
            }
            developers {
                developer {
                    id.set(developerId)
                    name.set(developerName)
                    email.set(developerEmail)
                }
            }
            scm {
                connection.set(projectScm)
                developerConnection.set(projectScm)
                url.set(projectUrl)
            }
        }
    }

    signing {
        useInMemoryPgpKeys(signingKey, signingPassword)
        sign(publishing.publications)
    }
}

nexusPublishing {
    repositories {
        sonatype {
            nexusUrl.set(uri("https://s01.oss.sonatype.org/service/local/"))
            snapshotRepositoryUrl.set(uri("https://s01.oss.sonatype.org/content/repositories/snapshots/"))
            username.set(ossrhUsername)
            password.set(ossrhPassword)
        }
    }
}