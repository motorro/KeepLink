//[testaction](../../../index.md)/[com.motorro.keeplink.testaction](../index.md)/[TestAction](index.md)

# TestAction

[common]\
sealed class [TestAction](index.md) : [Action](../../../../deeplink/deeplink/com.motorro.keeplink.deeplink/-action/index.md)

## Types

| Name | Summary |
|---|---|
| [Invalid](-invalid/index.md) | [common]<br>class [Invalid](-invalid/index.md) : [TestAction](index.md)<br>Invalid action - parse or build error |
| [Login](-login/index.md) | [common]<br>sealed class [Login](-login/index.md) : [TestAction](index.md)<br>Login actions |
| [Profile](-profile/index.md) | [common]<br>class [Profile](-profile/index.md) : [TestAction](index.md)<br>Profile link |
| [Root](-root/index.md) | [common]<br>class [Root](-root/index.md) : [TestAction](index.md)<br>Root action. Use as a null-object or client-default action |
| [Search](-search/index.md) | [common]<br>class [Search](-search/index.md)(val type: [TransportType](../../com.motorro.keeplink.testaction.data/-transport-type/index.md), val from: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val to: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val date: [LocalDateFields](../../com.motorro.keeplink.testaction.data/-local-date-fields/index.md)) : [TestAction](index.md)<br>Travel search with custom data types: |
| [Unknown](-unknown/index.md) | [common]<br>class [Unknown](-unknown/index.md)(components: [PshComponents](../../../../uri/uri/com.motorro.keeplink.uri.data/-psh-components/index.md)) : [TestAction](index.md)<br>A valid but unknown action May be used to represent arbitrary link that is not defined in this library |

## Inheritors

| Name |
|---|
| [Invalid](-invalid/index.md) |
| [Unknown](-unknown/index.md) |
| [Root](-root/index.md) |
| [Profile](-profile/index.md) |
| [Login](-login/index.md) |
| [Search](-search/index.md) |
