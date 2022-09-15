package com.motorro.keeplink.push.data

import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Push-message notification
 * @property title Notification title
 * @property text Notification text
 * @property topic If set, a notification will replace already existing one with the same topic
 * @property count Number of collapsed notifications
 * @property sound Notification sound. A resource identifier for sound asset bundled with application.
 * @property icon Notification icon. A resource identifier for sound asset bundled with application.
 * @property largeIconUri Large icon URI. May be a link to download or an app resource: `resource://icon.png`
 * @property imageUri Notification image URI. May be a link to download or an app resource: `resource://icon.png`
 */
@JsExport
@Serializable
@OptIn(ExperimentalJsExport::class)
data class Notification internal constructor(
    val title: LocalizedText,
    val text: LocalizedText,
    val topic: String?,
    val count: Int,
    val sound: String?,
    val icon: String?,
    val largeIconUri: String?,
    val imageUri: String?
) {
    /**
     * Sets a topic. If set, a notification will replace already existing one with the same topic
     * @param value Notification topic
     */
    @JsName("withTopic")
    fun withTopic(value: String): Notification = copy(topic = value)

    /**
     * Adds notification count (badge)
     * @param value Notification count
     */
    @JsName("withCount")
    fun withCount(value: Int): Notification = copy(count = value)

    /**
     * Adds notification sound.
     * @param name A resource identifier for sound asset bundled with application.
     */
    @JsName("withSound")
    fun withSound(name: String): Notification = copy(sound = name)

    /**
     * Adds notification icon.
     * @param name A resource identifier for icon asset bundled with application.
     */
    @JsName("withIconResource")
    fun withIconResource(name: String): Notification = copy(icon = name)

    /**
     * Adds notification large icon URI. May be a link to download or an app resource: `resource://icon.png`
     * @param value Icon URI
     */
    @JsName("withLargeIcon")
    fun withLargeIcon(value: String): Notification = copy(largeIconUri = value)

    /**
     * Adds notification large icon resource. Effectively sets [Notification.largeIconUri] to [name] with `resource:/` scheme
     * @param name Large icon resource name
     */
    @JsName("withLargeIconResource")
    fun withLargeIconResource(name: String): Notification = copy(largeIconUri = "resource:/$name")

    /**
     * Adds notification image URI. May be a link to download or an app resource: `resource://icon.png`
     * @param value Icon URI
     */
    @JsName("withImage")
    fun withImage(value: String): Notification = copy(imageUri = value)

    /**
     * Adds notification image resource. Effectively sets [Notification.imageUri] to [name] with `resource:/` scheme
     * @param name Image resource name
     */
    @JsName("withImageResource")
    fun withImageResource(name: String): Notification = copy(imageUri = "resource:/$name")

    override fun toString(): String {
        return "Notification(title='$title', text='$text')"
    }
}

/**
 * Creates basic notification
 * @param title Notification title
 * @param text Notification text
 */
@JsExport
@JsName("notification")
@OptIn(ExperimentalJsExport::class)
fun notification(title: String, text: String): Notification = localizedNotification(
    title = text(title),
    text = text(text)
)

/**
 * Creates basic notification
 * @param title Notification title
 * @param text Notification text
 */
@JsExport
@JsName("localizedNotification")
@OptIn(ExperimentalJsExport::class)
fun localizedNotification(title: LocalizedText, text: LocalizedText): Notification = Notification(
    title = title,
    text = text,
    topic = null,
    count = 1,
    sound = null,
    icon = null,
    largeIconUri = null,
    imageUri = null
)