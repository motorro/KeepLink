//[deeplink](../../../index.md)/[com.motorro.keeplink.deeplink](../index.md)/[DeepLink](index.md)

# DeepLink

[common]\
class [DeepLink](index.md)&lt;out [A](index.md) : [Action](../-action/index.md)&gt;(val action: [A](index.md), val utm: [Utm](../../../../uri/uri/com.motorro.keeplink.uri.data/-utm/index.md)) : [PshComponents](../../../../uri/uri/com.motorro.keeplink.uri.data/-psh-components/index.md), [WithAction](../-with-action/index.md)&lt;[A](index.md)&gt; 

Deep-link object

## Constructors

| | |
|---|---|
| [DeepLink](-deep-link.md) | [common]<br>fun &lt;out [A](index.md) : [Action](../-action/index.md)&gt; [DeepLink](-deep-link.md)(action: [A](index.md), utm: [Utm](../../../../uri/uri/com.motorro.keeplink.uri.data/-utm/index.md)) |

## Functions

| Name | Summary |
|---|---|
| [getHash](get-hash.md) | [common]<br>open override fun [getHash](get-hash.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>URI hash component |
| [getPath](get-path.md) | [common]<br>open override fun [getPath](get-path.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;<br>Combined URI path component. |
| [getSearch](get-search.md) | [common]<br>open override fun [getSearch](get-search.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](../../../../uri/uri/com.motorro.keeplink.uri.data/-param/index.md)&gt;<br>Combined URI search component |
| [toString](to-string.md) | [common]<br>open override fun [toString](to-string.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [withUtm](with-utm.md) | [common]<br>fun [withUtm](with-utm.md)(utm: [Utm](../../../../uri/uri/com.motorro.keeplink.uri.data/-utm/index.md)): [DeepLink](index.md)&lt;[A](index.md)&gt;<br>Adds [Utm](../../../../uri/uri/com.motorro.keeplink.uri.data/-utm/index.md) components |

## Properties

| Name | Summary |
|---|---|
| [action](action.md) | [common]<br>open override val [action](action.md): [A](index.md)<br>Action to perform |
| [isValid](is-valid.md) | [common]<br>val [isValid](is-valid.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>True if link is valid |
| [utm](utm.md) | [common]<br>val [utm](utm.md): [Utm](../../../../uri/uri/com.motorro.keeplink.uri.data/-utm/index.md)<br>UTM properties |
