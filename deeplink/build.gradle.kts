/*
 * Copyright 2022 Nikolai Kotchetkov.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *    http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

@file:Suppress("EXPERIMENTAL_API_USAGE")
@file:OptIn(ExperimentalKotlinGradlePluginApi::class)

import org.jetbrains.kotlin.gradle.ExperimentalKotlinGradlePluginApi
import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import java.net.URI

plugins {
    id("org.jetbrains.kotlin.multiplatform")
    id("org.jetbrains.kotlin.plugin.serialization")
    id("org.jetbrains.dokka")
    id("maven-publish")
    id("signing")
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
    iosSimulatorArm64("iosSimulatorArm64") {
        binaries {
            framework(listOf(DEBUG))
        }
    }

    jvm {
        compilerOptions {
            jvmTarget.set(JvmTarget.JVM_17)
        }
        testRuns["test"].executionTask.configure {
            useJUnit()
        }
    }

    js(IR) {
        compilerOptions {
            freeCompilerArgs.add("-opt-in=kotlin.js.ExperimentalJsExport")
        }
        generateTypeScriptDefinitions()
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
                api(project(":uri"))
                api(libs.kotlin.serialization.core)
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(project(":mocks"))
                implementation(project(":testaction"))
                implementation(libs.kotlin.serialization.json)
                implementation(libs.test.kotlin.common)
                implementation(libs.test.kotlin.annotations.common)
            }
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
}

val libId = "deeplink"
val libName = "deeplink"
val libDesc = "Multiplatform deep-link operations"
val projectUrl: String = "https://github.com/motorro/KeepLink"
val projectScm: String = "https://github.com/motorro/KeepLink.git"
val ossrhUsername: String? by rootProject.extra
val ossrhPassword: String? by rootProject.extra
val developerId: String by rootProject.extra
val developerName: String by rootProject.extra
val developerEmail: String by rootProject.extra
val signingKey: String? by rootProject.extra
val signingPassword: String? by rootProject.extra

val javadocJar by tasks.registering(Jar::class) {
    group = "documentation"
    archiveClassifier.set("javadoc")
}

publishing {
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
}

signing {
    useInMemoryPgpKeys(signingKey, signingPassword)
    sign(publishing.publications)
}

val signingTasks = tasks.withType<Sign>()
tasks.withType<AbstractPublishToMaven>().configureEach {
    dependsOn(signingTasks)
}