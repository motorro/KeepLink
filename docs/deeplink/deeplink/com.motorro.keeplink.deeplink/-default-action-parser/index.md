//[deeplink](../../../index.md)/[com.motorro.keeplink.deeplink](../index.md)/[DefaultActionParser](index.md)

# DefaultActionParser

[common]\
class [DefaultActionParser](index.md)&lt;[A](index.md) : [Action](../-action/index.md)&gt;(action: () -&gt; [A](index.md)?) : [ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt; 

Used in composite parsers to return default action

## Constructors

| | |
|---|---|
| [DefaultActionParser](-default-action-parser.md) | [common]<br>fun &lt;[A](index.md) : [Action](../-action/index.md)&gt; [DefaultActionParser](-default-action-parser.md)(action: () -&gt; [A](index.md)?) |

## Functions

| Name | Summary |
|---|---|
| [parse](parse.md) | [common]<br>open override fun [parse](parse.md)(components: [PshComponents](../../../../uri/uri/com.motorro.keeplink.uri.data/-psh-components/index.md), pathIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [A](index.md)?<br>Tries to parse given path |
