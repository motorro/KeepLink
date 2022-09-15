//[testaction](../../index.md)/[com.motorro.keeplink.testaction.data](index.md)

# Package com.motorro.keeplink.testaction.data

[common, ios, js, jvm]\
Sample custom data structures and functions to use - date and enum

## Types

| Name | Summary |
|---|---|
| [LocalDateFields](-local-date-fields/index.md) | [common]<br>data class [LocalDateFields](-local-date-fields/index.md)(val year: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val month: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val day: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)) : [ComponentValue](../../../uri/uri/com.motorro.keeplink.uri.data/-component-value/index.md)<br>Represents local date which has 'YYYY-MM-DD` representation in components See platform implementation for details |
| [TransportType](-transport-type/index.md) | [common]<br>data class [TransportType](-transport-type/index.md)(val value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [ComponentValue](../../../uri/uri/com.motorro.keeplink.uri.data/-component-value/index.md)<br>Transport-type enum (JS-compatible) |
| [TransportTypes](-transport-types/index.md) | [common]<br>object [TransportTypes](-transport-types/index.md)<br>Allowed transport-types (JS-compatible) |

## Functions

| Name | Summary |
|---|---|
| [fromDate](from-date.md) | [js]<br>fun [fromDate](from-date.md)(date: [Date](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.js/-date/index.html)): [LocalDateFields](../../../testaction/testaction/com.motorro.keeplink.testaction.data/-local-date-fields/index.md)<br>Creates [LocalDateFields](../../../testaction/testaction/com.motorro.keeplink.testaction.data/-local-date-fields/index.md) from Date object |
| [fromLocalDate](from-local-date.md) | [jvm]<br>fun [fromLocalDate](from-local-date.md)(date: [LocalDate](https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html)): [LocalDateFields](-local-date-fields/index.md#30247876%2FExtensions%2F1479627764)<br>Creates [LocalDateFields](-local-date-fields/index.md#30247876%2FExtensions%2F1479627764) from LocalDate object |
| [fromYMD](from-y-m-d.md) | [ios]<br>fun [fromYMD](from-y-m-d.md)(year: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), month: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), day: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [LocalDateFields](../../../testaction/testaction/com.motorro.keeplink.testaction.data/-local-date-fields/index.md)<br>Example to check iOS tests Creates LocalDateFields See JVM/JS sources to build fields from iOS date |
| [toDate](to-date.md) | [js]<br>fun [toDate](to-date.md)(localDateFields: [LocalDateFields](../../../testaction/testaction/com.motorro.keeplink.testaction.data/-local-date-fields/index.md)): [Date](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.js/-date/index.html)<br>Export to JS Date |
| [toLocalDate](to-local-date.md) | [jvm]<br>fun [LocalDateFields](-local-date-fields/index.md#30247876%2FExtensions%2F1479627764).[toLocalDate](to-local-date.md)(): [LocalDate](https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html)<br>Export to LocalDate |
