//[testaction](../../../../index.md)/[com.motorro.keeplink.testaction](../../index.md)/[TestAction](../index.md)/[Search](index.md)

# Search

[common]\
class [Search](index.md)(val type: [TransportType](../../../com.motorro.keeplink.testaction.data/-transport-type/index.md), val from: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val to: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val date: [LocalDateFields](../../../com.motorro.keeplink.testaction.data/-local-date-fields/index.md)) : [TestAction](../index.md)

Travel search with custom data types:

`/search?type={type}&from={from}&to={to}&date={date}`

## Constructors

| | |
|---|---|
| [Search](-search.md) | [common]<br>fun [Search](-search.md)(type: [TransportType](../../../com.motorro.keeplink.testaction.data/-transport-type/index.md), from: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), to: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), date: [LocalDateFields](../../../com.motorro.keeplink.testaction.data/-local-date-fields/index.md)) |

## Functions

| Name | Summary |
|---|---|
| [getPath](get-path.md) | [common]<br>open override fun [getPath](get-path.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt; |
| [getSearch](get-search.md) | [common]<br>open override fun [getSearch](get-search.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](../../../../../uri/uri/com.motorro.keeplink.uri.data/-param/index.md)&gt;<br>Search component |

## Properties

| Name | Summary |
|---|---|
| [date](date.md) | [common]<br>val [date](date.md): [LocalDateFields](../../../com.motorro.keeplink.testaction.data/-local-date-fields/index.md)<br>Date to search flights (`YYYY-MM-DD`) |
| [from](from.md) | [common]<br>val [from](from.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>Departure city |
| [to](to.md) | [common]<br>val [to](to.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>Destination city |
| [type](type.md) | [common]<br>val [type](type.md): [TransportType](../../../com.motorro.keeplink.testaction.data/-transport-type/index.md)<br>Transport type to search |
