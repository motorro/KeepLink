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

import com.motorro.keeplink.uri.UriComponents
import com.motorro.keeplink.uri.data.PshComponents
import com.motorro.keeplink.uri.data.parseUtm
import com.motorro.keeplink.uri.toComponents
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Parses a deep-link from string
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
interface LinkParser<A : Action> {
    /**
     * Tries to parse a deep-link from string
     * @param uri Deep-link URI
     * @return Returns a deeplink or `null` in case parsing fails
     */
    @JsName("parse")
    fun parse(uri: String): DeepLink<A>?
}

/**
 * Deep-link parser with pre-defined intended `scheme` and `host`
 * @param parser Action parser
 * @param targetScheme Intended scheme component
 * @param targetHost Intended host component
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
class SchemeHostLinkParser<A : Action>(
    private val parser: ActionParser<A>,
    private val targetScheme: String,
    private val targetHost: String
) : LinkParser<A> {
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
    override fun parse(uri: String): DeepLink<A>? = parseUri(uri)?.let(::parseLink)
}
