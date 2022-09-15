package com.motorro.keeplink.uri.data

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Has URI hash
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
fun interface HashComponent {
    /**
     * URI hash component
     *
     * `/open/settings#background_location`
     */
    fun getHash(): String
}