//[deeplink](../../../index.md)/[com.motorro.keeplink.deeplink](../index.md)/[LinkParser](index.md)

# LinkParser

[common]\
open class [LinkParser](index.md)&lt;[A](index.md) : [Action](../-action/index.md)&gt;(parser: [ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt;, targetScheme: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), targetHost: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))

Deep-link parser

## Parameters

common

| | |
|---|---|
| parser | Action parser |
| targetScheme | Intended scheme component |
| targetHost | Intended host component |

## Constructors

| | |
|---|---|
| [LinkParser](-link-parser.md) | [common]<br>fun &lt;[A](index.md) : [Action](../-action/index.md)&gt; [LinkParser](-link-parser.md)(parser: [ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt;, targetScheme: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), targetHost: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |

## Functions

| Name | Summary |
|---|---|
| [parse](parse.md) | [common]<br>fun [parse](parse.md)(uri: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [DeepLink](../-deep-link/index.md)&lt;[A](index.md)&gt;?<br>Tries to parse a deep-link from string |
