package com.motorro.keeplink

import com.motorro.keeplink.data.PshComponents
import com.motorro.keeplink.data.parseUtm
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Deep-link parser
 * @param parser Action parser
 * @param targetScheme Intended scheme component
 * @param targetHost Intended host component
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
open class LinkParser<A : Action>(
    private val parser: ActionParser<A>,
    private val targetScheme: String,
    private val targetHost: String
) {
    /**
     * Validates base deep-link components against target values
     * - scheme
     * - host
     */
    private fun UriComponents.isTargetUri(): Boolean = scheme == targetScheme && host == targetHost

    /**
     * Tries to parse [uri] and checks if it is a target for this parser
     */
    private fun parseUri(uri: String): PshComponents? = runCatching { uri.toComponents().takeIf { it.isTargetUri() } }.getOrNull()

    /**
     * Parses deep-link parts
     */
    private fun parseLink(components: PshComponents): DeepLink<A>? = parser.parse(components, -1)?.let {
        DeepLink(it, parseUtm(components))
    }

    /**
     * Tries to parse a deep-link from string
     * @param uri Deep-link URI
     * @return Returns a deeplink or `null` in case parsing fails
     */
    @JsName("parse")
    fun parse(uri: String): DeepLink<A>? = parseUri(uri)?.let(::parseLink)
}
