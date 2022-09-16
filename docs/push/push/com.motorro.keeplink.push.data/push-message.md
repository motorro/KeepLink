//[push](../../index.md)/[com.motorro.keeplink.push.data](index.md)/[pushMessage](push-message.md)

# pushMessage

[common]\
fun &lt;[A](push-message.md) : [Action](../../../deeplink/deeplink/com.motorro.keeplink.deeplink/-action/index.md)&gt; [pushMessage](push-message.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), ttl: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), deepLink: [DeepLink](../../../deeplink/deeplink/com.motorro.keeplink.deeplink/-deep-link/index.md)&lt;[A](push-message.md)&gt;): [PushMessage](-push-message/index.md)&lt;[A](push-message.md)&gt;

Creates cross-platform push-message

## Parameters

common

| | |
|---|---|
| id | Message ID |
| ttl | Time-to-live in seconds |
| deepLink | Deep-link to action to perform on push |
