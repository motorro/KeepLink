//[uri](../../../index.md)/[com.motorro.keeplink.uri](../index.md)/[UriComponents](index.md)/[UriComponents](-uri-components.md)

# UriComponents

[common]\
fun [UriComponents](-uri-components.md)(scheme: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), host: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), actionComponents: [PshComponents](../../com.motorro.keeplink.uri.data/-psh-components/index.md))

Constructor with [PshComponents](../../com.motorro.keeplink.uri.data/-psh-components/index.md)

## Parameters

common

| | |
|---|---|
| scheme | URI scheme. May be `http(s)` or a custom application scheme |
| host | Host part of URI including port value. Like `motorro.com` or `motorro.com:123` |
| actionComponents | Action components |

[common]\
fun [UriComponents](-uri-components.md)(scheme: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), host: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), path: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;, search: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Param](../../com.motorro.keeplink.uri.data/-param/index.md)&gt;, hash: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))

## Parameters

common

| | |
|---|---|
| path | Path component - where to go |
| search | Search component - what to do |
| hash | Hash component - what to display |
