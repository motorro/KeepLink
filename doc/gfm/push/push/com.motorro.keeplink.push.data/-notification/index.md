//[push](../../../index.md)/[com.motorro.keeplink.push.data](../index.md)/[Notification](index.md)

# Notification

[common]\
data class [Notification](index.md)

Push-message notification

## Functions

| Name | Summary |
|---|---|
| [toString](to-string.md) | [common]<br>open override fun [toString](to-string.md)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [withCount](with-count.md) | [common]<br>fun [withCount](with-count.md)(value: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Notification](index.md)<br>Adds notification count (badge) |
| [withIconResource](with-icon-resource.md) | [common]<br>fun [withIconResource](with-icon-resource.md)(name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Notification](index.md)<br>Adds notification icon. |
| [withImage](with-image.md) | [common]<br>fun [withImage](with-image.md)(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Notification](index.md)<br>Adds notification image URI. May be a link to download or an app resource: `resource://icon.png` |
| [withImageResource](with-image-resource.md) | [common]<br>fun [withImageResource](with-image-resource.md)(name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Notification](index.md)<br>Adds notification image resource. Effectively sets [Notification.imageUri](image-uri.md) to [name](with-image-resource.md) with `resource:/` scheme |
| [withLargeIcon](with-large-icon.md) | [common]<br>fun [withLargeIcon](with-large-icon.md)(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Notification](index.md)<br>Adds notification large icon URI. May be a link to download or an app resource: `resource://icon.png` |
| [withLargeIconResource](with-large-icon-resource.md) | [common]<br>fun [withLargeIconResource](with-large-icon-resource.md)(name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Notification](index.md)<br>Adds notification large icon resource. Effectively sets [Notification.largeIconUri](large-icon-uri.md) to [name](with-large-icon-resource.md) with `resource:/` scheme |
| [withSound](with-sound.md) | [common]<br>fun [withSound](with-sound.md)(name: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Notification](index.md)<br>Adds notification sound. |
| [withTopic](with-topic.md) | [common]<br>fun [withTopic](with-topic.md)(value: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)): [Notification](index.md)<br>Sets a topic. If set, a notification will replace already existing one with the same topic |

## Properties

| Name | Summary |
|---|---|
| [count](count.md) | [common]<br>val [count](count.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Number of collapsed notifications |
| [icon](icon.md) | [common]<br>val [icon](icon.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br>Notification icon. A resource identifier for sound asset bundled with application. |
| [imageUri](image-uri.md) | [common]<br>val [imageUri](image-uri.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br>Notification image URI. May be a link to download or an app resource: `resource://icon.png` |
| [largeIconUri](large-icon-uri.md) | [common]<br>val [largeIconUri](large-icon-uri.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br>Large icon URI. May be a link to download or an app resource: `resource://icon.png` |
| [sound](sound.md) | [common]<br>val [sound](sound.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br>Notification sound. A resource identifier for sound asset bundled with application. |
| [text](text.md) | [common]<br>val [text](text.md): [LocalizedText](../-localized-text/index.md)<br>Notification text |
| [title](title.md) | [common]<br>val [title](title.md): [LocalizedText](../-localized-text/index.md)<br>Notification title |
| [topic](topic.md) | [common]<br>val [topic](topic.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)?<br>If set, a notification will replace already existing one with the same topic |
