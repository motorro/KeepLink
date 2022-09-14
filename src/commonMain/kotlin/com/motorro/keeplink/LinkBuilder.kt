package com.motorro.keeplink

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Builds deep-link with predefined `scheme` and `host` components
 * @param targetScheme Intended scheme component
 * @param targetHost Intended host component
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
open class LinkBuilder<in A : Action>(private val targetScheme: String, private val targetHost: String) {
    /**
     * Builds a deep-link
     * @param link Path/search/hash components to embed
     */
    @JsName("build")
    fun build(link: DeepLink<A>): String = UriComponents(targetScheme, targetHost, link).build()
}
