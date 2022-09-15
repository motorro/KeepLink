# KeepLink [![Check](https://github.com/motorro/KeepLink/actions/workflows/check.yml/badge.svg?branch=master)](https://github.com/motorro/KeepLink/actions/workflows/check.yml) [![Maven Central](https://maven-badges.herokuapp.com/maven-central/com.motorro.keeplink/commonstatemachine/badge.png)](https://repo1.maven.org/maven2/com/motorro/keeplink/keeplink/)
Kotlin multiplatform deep-link definition, parsing and creation library.

Features:

* Create sealed deep-link hierarchy to exactly define each link once for server and client
* Build, parse and route in a type-safe way
* Code completion on all platforms
* Auto-generating documentation always in-line with the implementation

API documentation is available in [doc](doc/gfm/deeplink/index.md) folder.

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
