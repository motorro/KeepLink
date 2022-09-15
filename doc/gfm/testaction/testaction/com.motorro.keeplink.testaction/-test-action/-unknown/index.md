//[testaction](../../../../index.md)/[com.motorro.keeplink.testaction](../../index.md)/[TestAction](../index.md)/[Unknown](index.md)

# Unknown

[common]\
class [Unknown](index.md)(components: [PshComponents](../../../../../uri/uri/com.motorro.keeplink.uri.data/-psh-components/index.md)) : [TestAction](../index.md)

A valid but unknown action May be used to represent arbitrary link that is not defined in this library

## Parameters

common

| | |
|---|---|
| components | Action components |

## Constructors

| | |
|---|---|
| [Unknown](-unknown.md) | [common]<br>fun [Unknown](-unknown.md)(components: [PshComponents](../../../../../uri/uri/com.motorro.keeplink.uri.data/-psh-components/index.md)) |

## Functions

| Name | Summary |
|---|---|
| [getHash](get-hash.md) | [common]<br>open override fun [getHash](get-hash.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [getPath](get-path.md) | [common]<br>open override fun [getPath](get-path.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt; |
| [getSearch](get-search.md) | [common]<br>open override fun [getSearch](get-search.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](../../../../../uri/uri/com.motorro.keeplink.uri.data/-param/index.md)&gt; |

## Properties

| Name | Summary |
|---|---|
| [isValid](is-valid.md) | [common]<br>open override val [isValid](is-valid.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) = false<br>True if link is valid |
