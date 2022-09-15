//[uri](../../../index.md)/[com.motorro.keeplink.uri.data](../index.md)/[Param](index.md)

# Param

[common]\
data class [Param](index.md)(val name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))

Used to pass cross-platform key-value param. Native JS can't import `Map` and there is no auto-mapping to object, so map values are passed as an array of such objects.

## Parameters

common

| | |
|---|---|
| value | Param value |

## Constructors

| | |
|---|---|
| [Param](-param.md) | [common]<br>fun [Param](-param.md)(name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |

## Properties

| Name | Summary |
|---|---|
| [name](name.md) | [common]<br>val [name](name.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>Param name |
| [value](value.md) | [common]<br>val [value](value.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
