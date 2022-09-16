//[uri](../../../index.md)/[com.motorro.keeplink.uri.data](../index.md)/[PshComponentsImpl](index.md)

# PshComponentsImpl

[common]\
class [PshComponentsImpl](index.md)(var mPath: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;? = null, var mSearch: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](../-param/index.md)&gt;? = null, var mHash: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null) : [PshComponents](../-psh-components/index.md)

Data storage for deserializer

## Constructors

| | |
|---|---|
| [PshComponentsImpl](-psh-components-impl.md) | [common]<br>fun [PshComponentsImpl](-psh-components-impl.md)(mPath: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;? = null, mSearch: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](../-param/index.md)&gt;? = null, mHash: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null) |

## Functions

| Name | Summary |
|---|---|
| [getHash](get-hash.md) | [common]<br>open override fun [getHash](get-hash.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>URI hash component |
| [getPath](get-path.md) | [common]<br>open override fun [getPath](get-path.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;<br>URI path component |
| [getSearch](get-search.md) | [common]<br>open override fun [getSearch](get-search.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](../-param/index.md)&gt;<br>URI search component |
| [toString](to-string.md) | [common]<br>open override fun [toString](to-string.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

## Properties

| Name | Summary |
|---|---|
| [mHash](m-hash.md) | [common]<br>var [mHash](m-hash.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null |
| [mPath](m-path.md) | [common]<br>var [mPath](m-path.md): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;? = null |
| [mSearch](m-search.md) | [common]<br>var [mSearch](m-search.md): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](../-param/index.md)&gt;? = null |
