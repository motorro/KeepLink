//[deeplink](../../../index.md)/[com.motorro.keeplink.deeplink](../index.md)/[SegmentCheckParser](index.md)

# SegmentCheckParser

[common]\
open class [SegmentCheckParser](index.md)&lt;[A](index.md) : [Action](../-action/index.md)&gt;(segment: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), next: [ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt;) : [ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt; 

Common matcher that checks if segment in [parse](parse.md) equals [segment](../../../../deeplink/com.motorro.keeplink.deeplink/-segment-check-parser/segment.md)

## Constructors

| | |
|---|---|
| [SegmentCheckParser](-segment-check-parser.md) | [common]<br>fun &lt;[A](index.md) : [Action](../-action/index.md)&gt; [SegmentCheckParser](-segment-check-parser.md)(segment: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), next: [ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt;) |

## Functions

| Name | Summary |
|---|---|
| [parse](parse.md) | [common]<br>open override fun [parse](parse.md)(components: [PshComponents](../../../../uri/uri/com.motorro.keeplink.uri.data/-psh-components/index.md), pathIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [A](index.md)?<br>Tries to parse given path |
