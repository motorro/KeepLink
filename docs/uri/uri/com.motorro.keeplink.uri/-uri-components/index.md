//[uri](../../../index.md)/[com.motorro.keeplink.uri](../index.md)/[UriComponents](index.md)

# UriComponents

[common]\
class [UriComponents](index.md)(val scheme: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val host: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), path: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;, search: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](../../com.motorro.keeplink.uri.data/-param/index.md)&gt;, hash: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [PshComponents](../../com.motorro.keeplink.uri.data/-psh-components/index.md)

Cross-platform URI representation

## See also

common

| | |
|---|---|
| [com.motorro.keeplink.uri.data.PshComponents](../../com.motorro.keeplink.uri.data/-psh-components/index.md) |  |

## Parameters

common

| | |
|---|---|
| path | Path component - where to go |
| search | Search component - what to do |
| hash | Hash component - what to display |

## Constructors

| | |
|---|---|
| [UriComponents](-uri-components.md) | [common]<br>fun [UriComponents](-uri-components.md)(scheme: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), host: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), actionComponents: [PshComponents](../../com.motorro.keeplink.uri.data/-psh-components/index.md))<br>Constructor with [PshComponents](../../com.motorro.keeplink.uri.data/-psh-components/index.md) |
| [UriComponents](-uri-components.md) | [common]<br>fun [UriComponents](-uri-components.md)(scheme: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), host: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), path: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;, search: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](../../com.motorro.keeplink.uri.data/-param/index.md)&gt;, hash: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |

## Functions

| Name | Summary |
|---|---|
| [equals](equals.md) | [common]<br>open operator override fun [equals](equals.md)(other: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)?): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [getHash](get-hash.md) | [common]<br>open override fun [getHash](get-hash.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>Hash component - what to display. Represents extra action to do in activity. |
| [getPath](get-path.md) | [common]<br>open override fun [getPath](get-path.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;<br>Path component - where to go. Represents a path to activity in an application: screen, action, etc. Parameters exactly identifying the activity may be represented as path. |
| [getSearch](get-search.md) | [common]<br>open override fun [getSearch](get-search.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](../../com.motorro.keeplink.uri.data/-param/index.md)&gt;<br>Search component - what to do. Represents parameters to activity specified by [path](../../../../uri/com.motorro.keeplink.uri/-uri-components/path.md) which instruct activity what to do. |
| [hashCode](hash-code.md) | [common]<br>open override fun [hashCode](hash-code.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

## Properties

| Name | Summary |
|---|---|
| [host](host.md) | [common]<br>val [host](host.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>Host part of URI including port value. Like `motorro.com` or `motorro.com:123` |
| [scheme](scheme.md) | [common]<br>val [scheme](scheme.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>URI scheme. May be `http(s)` or a custom application scheme |

## Extensions

| Name | Summary |
|---|---|
| [build](../build.md) | [common]<br>expect fun [UriComponents](index.md).[build](../build.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>Builds string URI from [UriComponents](index.md)<br>[ios]<br>actual fun [UriComponents](index.md#-1175827496%2FExtensions%2F1699886012).[build](../build.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>Builds string URI from [UriComponents](index.md#-1175827496%2FExtensions%2F1699886012) (iOS implementation)<br>[js]<br>actual fun [UriComponents](index.md#-1175827496%2FExtensions%2F780643318).[build](../build.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>Builds string URI from [UriComponents](index.md#-1175827496%2FExtensions%2F780643318) (JS implementation)<br>[jvm]<br>actual fun [UriComponents](index.md#-1175827496%2FExtensions%2F1945183778).[build](../build.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>Builds string URI from [UriComponents](index.md#-1175827496%2FExtensions%2F1945183778) (JVM implementation) |
