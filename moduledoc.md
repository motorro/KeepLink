# KeepLink

Kotlin multiplatform deep-link definition, parsing and creation library.

## Features:

* Create sealed deep-link hierarchy to exactly define each link once for server and client
* Build, parse and route in a type-safe way
* Code completion on all platforms
* Auto-generating documentation always in-line with the implementation

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

See the [library repository](https://github.com/motorro/CommonStateMachine.git) for implementation details