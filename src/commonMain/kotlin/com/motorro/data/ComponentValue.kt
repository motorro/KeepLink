package com.motorro.data

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Returns component value
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
interface ComponentValue {
    /**
     * Returns component value representation
     */
    fun toComponentValue(): String
}