do# KeepLink [![Check](https://github.com/motorro/KeepLink/actions/workflows/check.yml/badge.svg?branch=master)](https://github.com/motorro/KeepLink/actions/workflows/check.yml) [![Maven Central](https://maven-badges.herokuapp.com/maven-central/com.motorro.keeplink/deeplink/badge.png)](https://repo1.maven.org/maven2/com/motorro/keeplink/deeplink/)
Kotlin multiplatform deep-link definition, parsing and creation library.

Features:

* Create sealed deep-link hierarchy to exactly define each link once for server and client
* Build, parse and route in a type-safe way
* Code completion on all platforms
* Auto-generating documentation always in-line with the implementation

API documentation is available at [Github Pages](https://motorro.github.io/KeepLink/) folder.
## Contents

<!-- toc -->

- [Motivation](#motivation)
- [Proposed deep-link management flow](#proposed-deep-link-management-flow)
- [Link structure](#link-structure)
- [Link definition](#link-definition)
- [Building your links](#building-your-links)
  * [Dependencies and project setup](#dependencies-and-project-setup)
  * [Build documentation](#build-documentation)
  * [Build your link structure](#build-your-link-structure)
  * [Create parsers](#create-parsers)
  * [Bind your schemes](#bind-your-schemes)
- [Consuming deep-links](#consuming-deep-links)
- [Create deep-links](#create-deep-links)
- [Some handy parsers included](#some-handy-parsers-included)
  * [SegmentCheckParser](#segmentcheckparser)
  * [DefaultActionParser](#defaultactionparser)
  * [BranchActionParser](#branchactionparser)
- [Conclusion](#conclusion)

<!-- tocstop -->

## Motivation

1.  As a business user I want an application to perform a certain action (open a page, update some data) by clicking
    a hyper-text link on a web page or in a message.
2.  As a business user I want to be able to push a link to a client device. For example in a marketing campaign.
3.  As a business user I want to share a link through third-party sources (email, social network, etc).
4.  As a marketing campaign operator I want app links to be well-documented across all platforms when building messages
    for clients.
5.  As a backend programmer I want to push actions to do to clients in a platform-independent way.
6.  As a backend programmer I want to build supported deep-links as fast as possible without searching through
    documentation too much. I want some help from programming tools (IDE) to build those links.
7.  As a client-side programmer I want a link to be parsed on a client-side with parameters checked.
8.  As a client-side programmer I want to know things to do when push-message arrives. A deep-link to action when parsed
    will give me all needed data.
9.  As a QA engineer I want deep-links to be documented to check if application fulfills the action it is intended to.
10. As an end-user I want to share a link to some page result, especially in a web-app

## Proposed deep-link management flow

1. Business evaluates the new feature and decides that it's good to have a deep-link to it.
2. The web and mobile teams implement the feature
3. The web team reports a link on the product site to become a deep-link to be opened in application
4. The deep-link supporting team implements the new `Action` definition in the link registry.
5. The new version of the deep-link library is distributed among teams.
6. Mobile teams adjust their routers to support the link.
7. Backend programmers build links with the library in backend to frontend data export.
8. The new generated documentation is supplied to marketing team to plan advertising campaigns.

## Link structure

Application deep-links are URIs:
```
URI = scheme:[host]path[?search][#hash]
```

Each component means:

* `scheme` - application scheme by which a correct application is selected to handle a link on a device. It may be a
  custom scheme like `motorro://` or a common `http(s)://` ([platform specific](https://developer.android.com/training/app-links/deep-linking)
  filtering logic is required in this case).
* `host` - pre-defined host in case of linking in a `http(s)://` scheme that defines app filtering
* `path` - where to go. Represents a path to activity in an application: screen, action, etc. Parameters exactly
  identifying the activity may be represented as path. For example, the following link opens a chat with ID `123`:
  `https://motorro.com/chats/123`
* `search` - what to do. Represents parameters to activity specified by `path` which instruct the activity what
  to do. For example, the following link opens search activity and instructs it to search with specific parameters:
  `https://motorro.com/search?type=TRAIN&from=MOSCOW&to=PARIS&date=2021-01-28`
* `hash` - what to display. Represents extra action to do in activity. For example, you may instruct your document
  activity to scroll to specified anchor:   
  `https://motorro.com/open/settings#background_location`

## Link definition

The library is intended to help you to build a single source-of-truth for action definition and data. 
It defines a [sealed hierarchy](testaction/src/commonMain/kotlin/com/motorro/keeplink/testaction/TestAction.kt)
of deep-link actions used across all of your servers and client applications.

You could use `path`, `search` and `hash` parts of URI to build an `Action` - what needs to be done in a client
application when deep-link is processed. 

To distinguish between applications an (or) domains use `scheme` and `host` components of URI. Check-out some sample
[LinkBuilder/LinkParser](testaction/src/commonMain/kotlin/com/motorro/keeplink/testaction/testLinkParsers.kt)`
to learn how to define your deep-link scheme.

## Building your links

**Hint:** Refer to [testaction](testaction) module for an example.

### Dependencies and project setup

Create a new Kotlin-multiplatform project and add the library dependency to your build file:

```kotlin
sourceSets {
    val commonMain by getting {
        dependencies {
            implementation("com.motorro.keeplink:deeplink:x.x.x")
            implementation(libs.kotlin.serialization.core) // If you want to serialize with Kotlin
        }
    }
}
```

Define your required build targets and outputs (see the [sample](testaction/build.gradle.kts) for reference):

iOS framework:
```kotlin
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
```

NPM module for `Node.js` or a browser:
```kotlin
js(IR) {
    moduleName = "yourmodulename"
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
}
```

### Build documentation
Add a [Dokka](https://github.com/Kotlin/dokka) task to your project to build the documentation. Then you could ship int 
to your fellow developers and marketing team to keep a [link registry](https://motorro.github.io/KeepLink/testaction/index.html) actual:
```kotlin
subprojects {
    tasks {
        withType<DokkaTask>().configureEach {
            dokkaSourceSets.configureEach {
                includes.from("moduledoc.md")
            }
        }
        withType<DokkaTaskPartial>().configureEach {
            dokkaSourceSets.configureEach {
                includes.from("moduledoc.md")
            }
        }
    }
}
```

### Build your link structure

To build your link structure inherit the [Action](deeplink/src/commonMain/kotlin/com/motorro/keeplink/deeplink/Action.kt):
```kotlin
@JsExport
@Serializable
@OptIn(ExperimentalJsExport::class)
sealed class TestAction : Action() {

    /**
     * Login actions
     *
     * `/login`
     *
     */
    sealed class Login : TestAction() {
        internal companion object {
            const val SEGMENT = "login"
        }

        /**
         * Path component
         */
        override fun getPath(): Array<String> = super.getPath() + SEGMENT

        /**
         * Magic-link login action
         *
         * `/login/magic/{token}`
         *
         * @property token Login token
         */
        class Magic(val token: String) : Login() {
            internal companion object {
                const val SEGMENT = "magic"
            }

            override fun getPath(): Array<String> = super.getPath() + SEGMENT + token
        }
    }
}
```
You define the structure in any way that best works for you best. The action implements the [PSHComponents](uri/src/commonMain/kotlin/com/motorro/keeplink/uri/data/PshComponents.kt)
which defines the `path`, `search`, and `hash` components for your resulting URI when building.
Refer to [TestAction](testaction/src/commonMain/kotlin/com/motorro/keeplink/testaction/TestAction.kt) definition to know more

### Create parsers

To use some handy library tools, create your parsers by implementing an [ActionParser](deeplink/src/commonMain/kotlin/com/motorro/keeplink/deeplink/ActionParser.kt):
```kotlin
/**
 * Parses action from action components
 */
fun interface ActionParser<out A : Action> {
    /**
     * Tries to parse given path
     * @param components Source action components
     * @param pathIndex Path index to start parsing at
     */
    fun parse(components: PshComponents, pathIndex: Int): A?
}
```

The parser accepts two parameters:
1. `components` - parsed URI `path`, `search`, and `hash` components.
2. `pathIndex` - current path segment index being processed. Optionally used by utility parsers (see below)

The parser returns a parsed action or a `null` if parse fails or irrelevant.

For example:
```kotlin
/**
 * Parser for [TestAction.Login.Magic] token in
 * `/login/magic/{token}`
 * Validates token is not empty
 */
internal val MagicLinkHashParser = ActionParser { components, pathIndex ->
    components.getPath().getOrNull(pathIndex)?.takeIf { it.isNotBlank() }?.let { TestAction.Login.Magic(it) }
}
```

### Bind your schemes 

To be completely type-safe create some predefined scheme/host builders and parsers that will build the URI string for you
given a deep-link object. To do so use [LinkBuilder](deeplink/src/commonMain/kotlin/com/motorro/keeplink/deeplink/LinkBuilder.kt)
and [LinkParser](deeplink/src/commonMain/kotlin/com/motorro/keeplink/deeplink/LinkParser.kt) utilities:
```kotlin
/**
 * Test link parsers (JS-compatible)
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
object LinkParsers {
    /**
     * Deep-link for URIs with `motorro` scheme:
     *
     * `motorro:/profile/chats/123`
     */
    val MOTORRO = LinkParser(RootActionParser, "motorro", "")
}

/**
 * Test link builders (JS-compatible)
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
object LinkBuilders {
    /**
     * Deep-link for URIs with `motorro` scheme:
     *
     * `motorro:/profile/chats/123`
     */
    val MOTORRO = LinkBuilder<TestAction>("motorro", "")
}
```

That's basically it. Now build your project and assemble the output artifacts.

## Consuming deep-links

Add your artifacts to the target project. Use a pre-defined parser to parse your deep-link:
```kotlin
val parser = LinkParsers.MOTORRO
val link = parser.parse("motorro:/login/magic/123")

// Optionally obtain some Urchin data
val utm = link?.utm
if (null != utm) {
    // Work out some analytics event
}

// Process link type-safe
when(link.action) {
    is TestLink.Login.Magic -> {
        // Go to login screen
    }
    else -> {
        //No link or parse failed. Start as usual 
    }
}
```

## Create deep-links

Imagine you have a `Node` backend that provides data to your UI. Let's create a link for them:
```typescript
// Select the builder scheme
const builder = LinkBuilders.MOTORRO;

// Create an action
const action = new TestAction.Login.Magic("123");
// Create a deep-link, possibly adding some Urchin
const link = deepLink(action).withUtm(utm("test"));

// Build the URI string
const linkStr = builder.build(link);
```

Check-out the complete `Node` [example](testaction/nodeexample/index.ts) and [tests](testaction/nodeexample/test/index.spec.ts) 
to learn more.

## Some handy parsers included

The library comes with some handy parsers if you like. Although you are not required to use them, they could potentially 
speed up your parsing and build parsers in more or less declarative way. See the [complete parser setup](testaction/src/commonMain/kotlin/com/motorro/keeplink/testaction/testActionParsers.kt) 
in the `testaction` project.

### SegmentCheckParser

Checks that current segment being parsed matches your string and calls the next parser.
Used to traverse your path:
```kotlin
/**
 * Parser for [TestAction.Login.Magic]
 */
internal val MagicLinkParser = SegmentCheckParser(
    TestAction.Login.Magic.SEGMENT,
    BranchActionParser(listOf(MagicLinkHashParser)) { _, _ -> TestAction.Invalid.INSTANCE }
)
```
The parser checks for correct segment (that is `/login/magic/`) and passes control to the [token parser](#create-parsers).

### DefaultActionParser

This one is simple. It just returns the action you produce in `action` parameter. May be used to return the action to 
some intermediate segment if all it's children do not match (see `BranchActionParser` below):
```kotlin
/**
 * Profile root parser
 */
internal val ProfileParser = SegmentCheckParser(
    TestAction.Profile.SEGMENT,
    DefaultActionParser { TestAction.Profile() }
)
```

### BranchActionParser

Iterates its children to find the first that returns a non-null result. If none answers positive - runs the `default` 
fallback:
```kotlin
/**
 * Root parsers - all known branches from root node
 */
private val rootParsers = listOf(
    ProfileParser,
    LoginParser,
    SearchParser
)

/**
 * Root parser for [TestAction]
 * Returns:
 * - known action if definitely known
 * - Unknown action if component are not empty
 * - Root action on empty components
 */
val RootActionParser = BranchActionParser(rootParsers) { components, _ ->
    if (components.getPath().isEmpty()) TestAction.Root() else TestAction.Unknown(components)
}
```

## Conclusion

I hope someone finds the given approach (and the library) to deep-link management handy. As for me, it gives a more or 
less complete solution to both the world of developers and the management. The proposed way aims to be a single source 
of truth for deep-links in your project providing a write-once solution for both the coding and the documenting tasks.
The approach keeps you from implementation errors and also saves your time when building and processing the links.
