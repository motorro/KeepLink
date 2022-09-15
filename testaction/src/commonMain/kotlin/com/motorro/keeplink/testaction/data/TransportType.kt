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

/**
 * Transport-type enum (JS-compatible)
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
data class TransportType(val value: String): ComponentValue {
    companion object {
        /**
         * Parses from component value
         * @param componentValue Component value - transport type
         */
        fun parse(componentValue: String): TransportType = when(componentValue.uppercase()){
            TransportTypes.FLIGHT.value -> TransportTypes.FLIGHT
            TransportTypes.TRAIN.value -> TransportTypes.TRAIN
            else -> throw IllegalArgumentException("Unknown charter type: $componentValue")
        }
    }

    /**
     * Returns component value representation
     */
    override fun toComponentValue(): String = value
}

/**
 * Allowed transport-types (JS-compatible)
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
object TransportTypes {
    /**
     * Flight
     */
    val FLIGHT = TransportType("FLIGHT")

    /**
     * Flight-type: seats
     */
    val TRAIN = TransportType("TRAIN")
}