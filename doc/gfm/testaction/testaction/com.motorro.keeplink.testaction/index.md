//[testaction](../../index.md)/[com.motorro.keeplink.testaction](index.md)

# Package com.motorro.keeplink.testaction

[common, js]\
Sample action structure

## Types

| Name | Summary |
|---|---|
| [LinkBuilders](-link-builders/index.md) | [common]<br>object [LinkBuilders](-link-builders/index.md)<br>Test link builders (JS-compatible) |
| [LinkParsers](-link-parsers/index.md) | [common]<br>object [LinkParsers](-link-parsers/index.md)<br>Test link parsers (JS-compatible) |
| [TestAction](-test-action/index.md) | [common]<br>sealed class [TestAction](-test-action/index.md) : [Action](../../../deeplink/deeplink/com.motorro.keeplink.deeplink/-action/index.md) |
| [TestSerializers](-test-serializers/index.md) | [common]<br>object [TestSerializers](-test-serializers/index.md)<br>Test link serializers (JS-compatible) |

## Functions

| Name | Summary |
|---|---|
| [magicLink](magic-link.md) | [js]<br>fun [magicLink](magic-link.md)(token: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [TestAction](../../../testaction/testaction/com.motorro.keeplink.testaction/-test-action/index.md)<br>Creates magic-link action |
| [search](search.md) | [js]<br>fun [search](search.md)(type: [TransportType](../../../testaction/testaction/com.motorro.keeplink.testaction.data/-transport-type/index.md), from: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), to: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), date: [Date](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.js/-date/index.html)): [TestAction](../../../testaction/testaction/com.motorro.keeplink.testaction/-test-action/index.md)<br>Creates search action |

## Properties

| Name | Summary |
|---|---|
| [RootActionParser](-root-action-parser.md) | [common]<br>val [RootActionParser](-root-action-parser.md): [BranchActionParser](../../../deeplink/deeplink/com.motorro.keeplink.deeplink/-branch-action-parser/index.md)&lt;[TestAction](-test-action/index.md)&gt;<br>Root parser for [TestAction](-test-action/index.md) Returns: |
