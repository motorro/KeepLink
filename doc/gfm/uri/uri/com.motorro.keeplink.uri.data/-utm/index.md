//[uri](../../../index.md)/[com.motorro.keeplink.uri.data](../index.md)/[Utm](index.md)

# Utm

[common]\
data class [Utm](index.md)(val utmSource: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val utmMedium: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val utmCampaign: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val utmTerm: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, val utmContent: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) : [SearchComponent](../-search-component/index.md)

(Urchin Tracking Module params)https://en.wikipedia.org/wiki/UTM_parameters

## Constructors

| | |
|---|---|
| [Utm](-utm.md) | [common]<br>fun [Utm](-utm.md)(utmSource: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), utmMedium: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, utmCampaign: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, utmTerm: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?, utmContent: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?) |

## Functions

| Name | Summary |
|---|---|
| [campaign](campaign.md) | [common]<br>fun [campaign](campaign.md)(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Utm](index.md)<br>Adds `utm_campaign` value |
| [content](content.md) | [common]<br>fun [content](content.md)(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Utm](index.md)<br>Adds `utm_content` value |
| [getSearch](get-search.md) | [common]<br>open override fun [getSearch](get-search.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](../-param/index.md)&gt;<br>URI search component |
| [medium](medium.md) | [common]<br>fun [medium](medium.md)(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Utm](index.md)<br>Adds `utm_medium` value |
| [term](term.md) | [common]<br>fun [term](term.md)(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Utm](index.md)<br>Adds `utm_term` value |

## Properties

| Name | Summary |
|---|---|
| [utmCampaign](utm-campaign.md) | [common]<br>val [utmCampaign](utm-campaign.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br>`utm_campaign` value |
| [utmContent](utm-content.md) | [common]<br>val [utmContent](utm-content.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br>`utm_content` value |
| [utmMedium](utm-medium.md) | [common]<br>val [utmMedium](utm-medium.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br>`utm_medium` value |
| [utmSource](utm-source.md) | [common]<br>val [utmSource](utm-source.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>`utm_source` value (required) |
| [utmTerm](utm-term.md) | [common]<br>val [utmTerm](utm-term.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br>`utm_term` value |
