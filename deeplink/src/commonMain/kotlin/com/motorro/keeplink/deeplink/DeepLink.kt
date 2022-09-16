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

package com.motorro.keeplink.deeplink

import com.motorro.keeplink.uri.data.Param
import com.motorro.keeplink.uri.data.PshComponents
import com.motorro.keeplink.uri.data.Utm
import com.motorro.keeplink.uri.data.utm
import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Deep-link object
 * @property action Action to perform
 * @property utm UTM properties
 */
@JsExport
@Serializable
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
class DeepLink<out A : Action>(override val action: A, val utm: Utm) : WithAction<A>, PshComponents() {
    /**
     * True if link is valid
     */
    val isValid: Boolean get() = action.isValid

    /**
     * Adds [Utm] components
     * @param utm UTM components
     */
    fun withUtm(utm: Utm): DeepLink<A> = DeepLink(action, utm)

    /**
     * Combined URI path component.
     *
     * `/open/chat/123`
     */
    override fun getPath(): Array<String> = action.getPath()

    /**
     * Combined URI search component
     *
     * `/open/search?type=TRAIN&from=MOSCOW&to=PARIS&date=2021-01-28`
     */
    override fun getSearch(): Array<Param> = action.getSearch() + utm.getSearch()

    /**
     * URI hash component
     *
     * `/open/settings#background_location`
     */
    override fun getHash(): String = action.getHash()

    override fun toString(): String {
        return "DeepLink(action=$action, utm=$utm)"
    }
}

/**
 * Creates a new deep-link
 * @param action Deep-link action
 */
@JsExport
@JsName("deepLink")
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
fun <A: Action> deepLink(action: A): DeepLink<A> = DeepLink(action, utm(""))