package com.motorro.keeplink.uri.data

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Has URI path
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
fun interface PathComponent {
    /**
     * URI path component
     *
     * `/open/chat/123`
     */
    fun getPath(): Array<String>
}