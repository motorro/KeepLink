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

import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * A string with localization properties
 * @property text Default text
 * @property localizationKey A key to string resource that represent [text] in user's locale
 * @property localizationArgs Arguments to build localized string
 */
@JsExport
@Serializable
@OptIn(ExperimentalJsExport::class)
data class LocalizedText internal constructor(val text: String, val localizationKey: String?, val localizationArgs: Array<String>) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as LocalizedText

        if (text != other.text) return false
        if (localizationKey != other.localizationKey) return false
        if (!localizationArgs.contentEquals(other.localizationArgs)) return false

        return true
    }

    override fun hashCode(): Int {
        var result = text.hashCode()
        result = 31 * result + (localizationKey?.hashCode() ?: 0)
        result = 31 * result + localizationArgs.contentHashCode()
        return result
    }

    override fun toString(): String {
        return text
    }
}

/**
 * Creates text with no localization
 * @param value Text value
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
fun text(value: String): LocalizedText = LocalizedText(value, null, emptyArray())

/**
 * Creates text with localization
 * @param value Text value
 * @param localizationKey A key to string resource that represent [text] in user's locale
 * @param localizationArgs Arguments to build localized string
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
fun localizedText(value: String, localizationKey: String, localizationArgs: Array<String>): LocalizedText = LocalizedText(value, localizationKey, localizationArgs)