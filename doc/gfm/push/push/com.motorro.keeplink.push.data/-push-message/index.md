//[push](../../../index.md)/[com.motorro.keeplink.push.data](../index.md)/[PushMessage](index.md)

# PushMessage

[common]\
data class [PushMessage](index.md)&lt;out [A](index.md) : [Action](../../../../deeplink/deeplink/com.motorro.keeplink.deeplink/-action/index.md)&gt; : [WithAction](../../../../deeplink/deeplink/com.motorro.keeplink.deeplink/-with-action/index.md)&lt;[A](index.md)&gt; 

Common (cross-platform) push-message structure

## Functions

| Name | Summary |
|---|---|
| [isSilent](is-silent.md) | [common]<br>fun [isSilent](is-silent.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>If true - process action silently |
| [toString](to-string.md) | [common]<br>open override fun [toString](to-string.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [withNotification](with-notification.md) | [common]<br>fun [withNotification](with-notification.md)(notification: [Notification](../-notification/index.md)): [PushMessage](index.md)&lt;[A](index.md)&gt;<br>Adds a notification. Without notification the message is processed silently |

## Properties

| Name | Summary |
|---|---|
| [action](action.md) | [common]<br>open override val [action](action.md): [A](index.md)<br>Action |
| [deepLink](deep-link.md) | [common]<br>val [deepLink](deep-link.md): [DeepLink](../../../../deeplink/deeplink/com.motorro.keeplink.deeplink/-deep-link/index.md)&lt;[A](index.md)&gt;<br>Deep link to action |
| [id](id.md) | [common]<br>val [id](id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br>Push message ID |
| [notification](notification.md) | [common]<br>val [notification](notification.md): [Notification](../-notification/index.md)?<br>Optional notification to display on push. If null - push processes silently |
| [ttl](ttl.md) | [common]<br>val [ttl](ttl.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Time-to-live in seconds |
