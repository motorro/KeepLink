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

@file:Suppress("EXPERIMENTAL_API_USAGE", "DSL_SCOPE_VIOLATION")

import org.jetbrains.dokka.Platform
import org.jetbrains.dokka.gradle.DokkaTask
import org.jetbrains.dokka.gradle.DokkaTaskPartial
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    alias(libs.plugins.kotlin.multiplatform) apply(false)
    alias(libs.plugins.kotlin.serialization) apply(false)
    alias(libs.plugins.kotlin.dokka)
    alias(libs.plugins.nexus.publish)
    alias(libs.plugins.git)
}

buildscript {
    apply(from = "gradle/versioning.gradle")
    apply(from = "gradle/maven-publish-config.gradle")
}

val buildVersionName = project.extensions.extraProperties["buildVersionName"] as groovy.lang.Closure<*>
val buildVersionCode = project.extensions.extraProperties["buildVersionCode"] as groovy.lang.Closure<*>

group = "com.motorro.keeplink"
version = buildVersionName()


allprojects {
    extra.apply {
        set("versionCode", buildVersionCode())
        set("versionName", buildVersionName())

        set("developerId", "motorro")
        set("developerName", "Nikolai Kotchetkov")
        set("developerEmail", "motorro@gmail.com")

        set("projectScm", "https://github.com/motorro/CommonStateMachine.git")
        set("projectUrl", "https://github.com/motorro/CommonStateMachine")
    }

    tasks.withType<KotlinCompile>().configureEach {
        compilerOptions {
            freeCompilerArgs.add("-opt-in=kotlin.RequiresOptIn")
        }
    }

    tasks.withType<AbstractTestTask> {
        testLogging {
            events("failed", "standardOut", "standardError")
            exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
            showStackTraces = true
        }
    }
}

subprojects {
    tasks {
        withType<DokkaTask>().configureEach {
            suppressInheritedMembers.set(true)
            dokkaSourceSets.configureEach {
                includeNonPublic.set(false)
                skipEmptyPackages.set(true)
                if (platform.get() == Platform.native) {
                    displayName.set("native")
                }
                includes.from("moduledoc.md")
            }
        }
        withType<DokkaTaskPartial>().configureEach {
            suppressInheritedMembers.set(true)
            dokkaSourceSets.configureEach {
                includeNonPublic.set(false)
                skipEmptyPackages.set(true)
                if (platform.get() == Platform.native) {
                    displayName.set("native")
                }
                includes.from("moduledoc.md")
            }
        }
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

nexusPublishing {
    repositories {
        sonatype {
            nexusUrl.set(uri("https://s01.oss.sonatype.org/service/local/"))
            snapshotRepositoryUrl.set(uri("https://s01.oss.sonatype.org/content/repositories/snapshots/"))
            username.set(project.extra["ossrhUsername"].toString())
            password.set(project.extra["ossrhPassword"].toString())
        }
    }
}

val docDir = projectDir.resolve("docs")
tasks {
    dokkaHtmlMultiModule {
        outputDirectory.set(docDir)
        includes.from("moduledoc.md")
    }
    dokkaGfmMultiModule {
        outputDirectory.set(docDir)
        includes.from("moduledoc.md")
    }
}
