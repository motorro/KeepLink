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

import org.jetbrains.kotlin.gradle.targets.js.dsl.ExperimentalDistributionDsl

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
    iosSimulatorArm64("iosSimulatorArm64") {
        binaries {
            framework(listOf(DEBUG))
        }
    }
    val outputIos by tasks.creating(org.jetbrains.kotlin.gradle.tasks.FatFrameworkTask::class) {
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
            kotlinOptions.jvmTarget = "17"
            kotlinOptions.freeCompilerArgs += listOf(
                "-Xuse-ir"
            )
        }
        testRuns["test"].executionTask.configure {
            useJUnit()
        }
    }

    js(IR) {
        moduleName = "testaction"
        compilations.all {
            kotlinOptions.freeCompilerArgs += listOf(
                "-opt-in=kotlin.js.ExperimentalJsExport"
            )
        }
        generateTypeScriptDefinitions()
        binaries.library()
        useCommonJs()
        nodejs {
            testTask(Action {
                useMocha {
                    timeout = "10s"
                }
            })
            // On customizing JS builds and distribution:
            // https://kotlinlang.org/docs/reference/js-project-setup.html#choosing-execution-environment
            @OptIn(ExperimentalDistributionDsl::class)
            distribution(Action {
                outputDirectory.set(file("$projectDir/output/npm"))
            })
        }
        browser {
            testTask(Action {
                useMocha {
                    timeout = "10s"
                }
            })
        }
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(project(":uri"))
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
        val iosSimulatorArm64Main by sourceSets.getting
        val iosMain by sourceSets.creating {
            dependsOn(commonMain)
            iosX64Main.dependsOn(this)
            iosArm64Main.dependsOn(this)
            iosSimulatorArm64Main.dependsOn(this)
        }
        val iosX64Test by sourceSets.getting
        val iosArm64Test by sourceSets.getting
        val iosSimulatorArm64Test by sourceSets.getting
        val iosTest by sourceSets.creating {
            dependsOn(commonTest)
            iosX64Test.dependsOn(this)
            iosArm64Test.dependsOn(this)
            iosSimulatorArm64Test.dependsOn(this)
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

val javadocJar by tasks.creating(Jar::class) {
    group = "documentation"
    archiveClassifier.set("javadoc")
    from(tasks.dokkaHtml)
}
