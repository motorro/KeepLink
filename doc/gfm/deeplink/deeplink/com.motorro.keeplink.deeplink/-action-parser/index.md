//[deeplink](../../../index.md)/[com.motorro.keeplink.deeplink](../index.md)/[ActionParser](index.md)

# ActionParser

[common]\
fun interface [ActionParser](index.md)&lt;out [A](index.md) : [Action](../-action/index.md)&gt;

Parses action from action components

## Functions

| Name | Summary |
|---|---|
| [parse](parse.md) | [common]<br>abstract fun [parse](parse.md)(components: [PshComponents](../../../../uri/uri/com.motorro.keeplink.uri.data/-psh-components/index.md), pathIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [A](index.md)?<br>Tries to parse given path |

## Inheritors

| Name |
|---|
| [BranchActionParser](../-branch-action-parser/index.md) |
| [DefaultActionParser](../-default-action-parser/index.md) |
| [SegmentCheckParser](../-segment-check-parser/index.md) |
