//[uri](../../index.md)/[com.motorro.keeplink.uri.data](index.md)

# Package com.motorro.keeplink.uri.data

[common]\
Data objects to represent URI components

## Types

| Name | Summary |
|---|---|
| [ComponentValue](-component-value/index.md) | [common]<br>interface [ComponentValue](-component-value/index.md)<br>Returns component value |
| [HashComponent](-hash-component/index.md) | [common]<br>fun interface [HashComponent](-hash-component/index.md)<br>Has URI hash |
| [Param](-param/index.md) | [common]<br>data class [Param](-param/index.md)(val name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))<br>Used to pass cross-platform key-value param. Native JS can't import `Map` and there is no auto-mapping to object, so map values are passed as an array of such objects. |
| [PathComponent](-path-component/index.md) | [common]<br>fun interface [PathComponent](-path-component/index.md)<br>Has URI path |
| [PshComponents](-psh-components/index.md) | [common]<br>abstract class [PshComponents](-psh-components/index.md) : [PathComponent](-path-component/index.md), [SearchComponent](-search-component/index.md), [HashComponent](-hash-component/index.md)<br>Path/Search/Hash components |
| [PshComponentsImpl](-psh-components-impl/index.md) | [common]<br>class [PshComponentsImpl](-psh-components-impl/index.md)(var mPath: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;? = null, var mSearch: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](-param/index.md)&gt;? = null, var mHash: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null) : [PshComponents](-psh-components/index.md)<br>Data storage for deserializer |
| [SearchComponent](-search-component/index.md) | [common]<br>fun interface [SearchComponent](-search-component/index.md)<br>Has URI search |
| [Utm](-utm/index.md) | [common]<br>data class [Utm](-utm/index.md)(val utmSource: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val utmMedium: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val utmCampaign: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val utmTerm: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val utmContent: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [SearchComponent](-search-component/index.md)<br>(Urchin Tracking Module params)https://en.wikipedia.org/wiki/UTM_parameters |

## Functions

| Name | Summary |
|---|---|
| [getValue](get-value.md) | [common]<br>fun [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](-param/index.md)&gt;.[getValue](get-value.md)(name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br>Sugar to get value from array of params in map-like style |
| [of](of.md) | [common]<br>infix fun [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html).[of](of.md)(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Param](-param/index.md)<br>Sugar to create a param |
| [parseUtm](parse-utm.md) | [common]<br>fun [parseUtm](parse-utm.md)(searchComponent: [SearchComponent](-search-component/index.md)): [Utm](-utm/index.md)<br>Gets [Utm](-utm/index.md) from search component |
| [toMap](to-map.md) | [common]<br>fun [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](-param/index.md)&gt;.[toMap](to-map.md)(): [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;<br>Converts array of [Param](-param/index.md) objects to Map |
| [toParams](to-params.md) | [common]<br>fun [Map](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;.[toParams](to-params.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](-param/index.md)&gt;<br>Converts map to array of [Param](-param/index.md) objects |
| [utm](utm.md) | [common]<br>fun [utm](utm.md)(utmSource: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Utm](-utm/index.md)<br>Creates UTM parameters |
