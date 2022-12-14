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

package com.motorro.keeplink.uri.data

import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Used to pass cross-platform key-value param.
 * Native JS can't import `Map` and there is no auto-mapping to object,
 * so map values are passed as an array of such objects.
 * @property name Param name
 * @param value Param value
 */
@JsExport
@Serializable
@OptIn(ExperimentalJsExport::class)
data class Param(val name: String, val value: String) {
    /**
     * Makes param out of map entry
     * @param entry Source map entry
     */
    internal constructor(entry: Map.Entry<String, String>): this(entry.key, entry.value)
}

/**
 * Sugar to create a param
 * @receiver Param name
 * @param value Param value
 */
infix fun String.of(value: String) = Param(this, value)

/**
 * Converts map to array of [Param] objects
 * @receiver Source map
 * @return Array of params
 */
fun Map<String, String>.toParams(): Array<Param> = entries.map(::Param).toTypedArray()

/**
 * Converts array of [Param] objects to Map
 * @receiver Source array
 * @return Array of params where [Param.name] is a key and [Param.value] is an entry value
 */
fun Array<Param>.toMap(): Map<String, String> = associate { it.name to it.value }

/**
 * Sugar to get value from array of params in map-like style
 * @receiver Array of [Param] to search
 * @param name Param name
 * @return Found param value or null if not found
 */
fun Array<Param>.getValue(name: String): String? = firstOrNull{ name == it.name }?.value