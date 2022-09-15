@file:Suppress("UNUSED_VARIABLE", "EXPERIMENTAL_API_USAGE", "OPT_IN_IS_NOT_ENABLED")

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
        moduleName = "testaction"
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
            // On customizing JS builds and distribution:
            // https://kotlinlang.org/docs/reference/js-project-setup.html#choosing-execution-environment
            @OptIn(ExperimentalDistributionDsl::class)
            distribution {
                directory = file("$projectDir/output/npm")
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

val javadocJar by tasks.creating(Jar::class) {
    group = "documentation"
    archiveClassifier.set("javadoc")
    from(tasks.dokkaHtml)
}
