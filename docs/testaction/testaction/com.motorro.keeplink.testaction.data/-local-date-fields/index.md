//[testaction](../../../index.md)/[com.motorro.keeplink.testaction.data](../index.md)/[LocalDateFields](index.md)

# LocalDateFields

[common]\
data class [LocalDateFields](index.md)(val year: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val month: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val day: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)) : [ComponentValue](../../../../uri/uri/com.motorro.keeplink.uri.data/-component-value/index.md)

Represents local date which has 'YYYY-MM-DD` representation in components See platform implementation for details

## Parameters

common

| | |
|---|---|
| year | Full year |
| month | Month: 1 - 12 |
| day | Day: 1 - 31 |

## Constructors

| | |
|---|---|
| [LocalDateFields](-local-date-fields.md) | [common]<br>fun [LocalDateFields](-local-date-fields.md)(year: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), month: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), day: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)) |

## Types

| Name | Summary |
|---|---|
| [Companion](-companion/index.md) | [common]<br>object [Companion](-companion/index.md) |

## Functions

| Name | Summary |
|---|---|
| [toComponentValue](to-component-value.md) | [common]<br>open override fun [toComponentValue](to-component-value.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>Returns component representation 'YYYY-MM-DD` |

## Properties

| Name | Summary |
|---|---|
| [day](day.md) | [common]<br>val [day](day.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [month](month.md) | [common]<br>val [month](month.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [year](year.md) | [common]<br>val [year](year.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

## Extensions

| Name | Summary |
|---|---|
| [toLocalDate](../to-local-date.md) | [jvm]<br>fun [LocalDateFields](index.md#30247876%2FExtensions%2F1479627764).[toLocalDate](../to-local-date.md)(): [LocalDate](https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html)<br>Export to LocalDate |
