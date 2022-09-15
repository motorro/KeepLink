//[deeplink](../../../index.md)/[com.motorro.keeplink.deeplink](../index.md)/[LinkBuilder](index.md)

# LinkBuilder

[common]\
open class [LinkBuilder](index.md)&lt;in [A](index.md) : [Action](../-action/index.md)&gt;(targetScheme: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), targetHost: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))

Builds deep-link with predefined `scheme` and `host` components

## Parameters

common

| | |
|---|---|
| targetScheme | Intended scheme component |
| targetHost | Intended host component |

## Constructors

| | |
|---|---|
| [LinkBuilder](-link-builder.md) | [common]<br>fun [LinkBuilder](-link-builder.md)(targetScheme: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), targetHost: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |

## Functions

| Name | Summary |
|---|---|
| [build](build.md) | [common]<br>fun [build](build.md)(link: [DeepLink](../-deep-link/index.md)&lt;[A](index.md)&gt;): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>Builds a deep-link |
