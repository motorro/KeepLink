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

package com.motorro.keeplink.testaction.data

import com.motorro.keeplink.uri.data.ComponentValue
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Represents local date which has 'YYYY-MM-DD` representation in components
 * See platform implementation for details
 * @param year Full year
 * @param month Month: 1 - 12
 * @param day Day: 1 - 31
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
data class LocalDateFields(
    @JsName("year") val year: Int,
    @JsName("month") val month: Int,
    @JsName("day") val day: Int
): ComponentValue {
    companion object {
        /**
         * Date RegEx
         */
        private val DateReEx = "^(\\d{4})-(\\d{2})-(\\d{2})$".toRegex()

        /**
         * Parses from component value
         * @param componentValue Component value in a form of 'YYYY-MM-DD`
         */
        fun parse(componentValue: String): LocalDateFields {
            val match = DateReEx.matchEntire(componentValue) ?: throw IllegalArgumentException("Not a valid local date")
            return match.groupValues.run { LocalDateFields(get(1).toInt(), get(2).toInt(), get(3).toInt()) }
        }
    }

    /**
     * Returns component representation 'YYYY-MM-DD`
     */
    override fun toComponentValue(): String = "$year-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}"
}
