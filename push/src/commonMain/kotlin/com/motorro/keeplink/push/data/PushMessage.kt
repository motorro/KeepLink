/*
 * Copyright 2022 Nikolai Kotchetkov.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *    http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.motorro.keeplink.push.data

import com.motorro.keeplink.deeplink.Action
import com.motorro.keeplink.deeplink.DeepLink
import com.motorro.keeplink.deeplink.WithAction
import kotlinx.serialization.Contextual
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Common (cross-platform) push-message structure
 * @property id Push message ID
 * @property ttl Time-to-live in seconds
 * @property deepLink Deep link to action
 * @property notification Optional notification to display on push. If null - push processes silently
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
data class PushMessage<out A : Action> internal constructor(
    val id: String,
    val ttl: Int,
    @Contextual val deepLink: DeepLink<A>,
    val notification: Notification?
) : WithAction<A> {
    /**
     * Action
     */
    override val action: A
        get() = deepLink.action

    /**
     * Adds a notification. Without notification the message is processed silently
     * @param notification Notification data
     */
    @JsName("withNotification")
    fun withNotification(notification: Notification): PushMessage<A> = copy(notification = notification)

    /**
     * If true - process action silently
     */
    @JsName("isSilent")
    fun isSilent(): Boolean = null == notification

    override fun toString(): String {
        return "PushMessage(id='$id', notification=$notification, action=$deepLink)"
    }
}

/**
 * Creates cross-platform push-message
 * @param id Message ID
 * @param ttl Time-to-live in seconds
 * @param deepLink Deep-link to action to perform on push
 */
@JsExport
@JsName("pushMessage")
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
fun <A : Action> pushMessage(id: String, ttl: Int, deepLink: DeepLink<A>): PushMessage<A> = PushMessage(
    id = id,
    ttl = ttl,
    deepLink = deepLink,
    notification = null
)
