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
import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Deep link action marker class.
 *
 * Represents an action part of deep-link - what needs to be done by application.
 * Extend with a sealed class
 *
 * For example:
 * - To open some application page
 * - To run data update
 */
@JsExport
@Serializable
@OptIn(ExperimentalJsExport::class)
abstract class Action : PshComponents() {
    /**
     * Path component - where to go.
     * Represents a path to activity in an application: screen, action, etc.
     * Parameters exactly identifying the activity may be represented as path.
     *
     * For example, the following link opens chat with ID 123:
     *
     * `/open/chat/123`
     */
    override fun getPath(): Array<String> = emptyArray()

    /**
     * Search component - what to do.
     * Represents parameters to activity specified by [getPath] which instruct activity what to do.
     *
     * For example, the following link opens search activity and instructs it to search with specific parameters:
     *
     * `/open/search?type=TRAIN&from=MOSCOW&to=PARIS&date=2021-01-28`
     */
    override fun getSearch(): Array<Param> = emptyArray()

    /**
     * Hash component - what to display.
     * Represents extra action to do in activity.
     *
     * For example, you may instruct your document activity to scroll to specified anchor:
     *
     * `/open/settings#background_location`
     */
    override fun getHash(): String = ""

    /**
     * True if action is valid to execute
     */
    open val isValid: Boolean = true
}
