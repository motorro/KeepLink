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

package com.motorro.keeplink.uri

import com.motorro.keeplink.uri.data.Param
import com.motorro.keeplink.uri.data.of
import platform.Foundation.*

/**
 * Parses string URI to [UriComponents] (iOS implementation)
 * @receiver source string
 * @return Parsed components
 */
actual fun String.toComponents(): UriComponents {
    val iosUrl = NSURL.URLWithString(this) ?: throw IllegalArgumentException("Invalid URL")
    val iosUrlComponents = NSURLComponents.componentsWithURL(iosUrl, false) ?: throw IllegalArgumentException("Invalid URL")

    return with(iosUrlComponents) {
        UriComponents(
            scheme = scheme ?: "",
            host = getCombinedHost(),
            path = path.toPathComponent(),
            search = query.toSearchComponent(),
            hash = fragment ?: ""
        )
    }
}

/**
 * Builds string URI from [UriComponents] (iOS implementation)
 * @receiver Target components
 * @return Built URI
 */
actual fun UriComponents.build(): String {
    val (host, port) = host.splitCombinedHost()
    val url = NSURLComponents()
    url.scheme = scheme
    url.host = host
    url.port = port.takeIf { it >= 0 }?.let(::NSNumber)
    url.path = getPath().toPath()
    url.query = getSearch().toSearch()
    url.fragment = getHash().toHash()
    return url.string ?: throw IllegalArgumentException("Invalid URL")
}

/**
 * Returns host combined with port (JS style)
 */
private fun NSURLComponents.getCombinedHost(): String {
    val host = this.host ?: return ""
    val port = this.port?.intValue ?: -1
    return if (port >= 0) "$host:$port" else host
}

/**
 * Parses path component
 */
private fun String?.toPathComponent(): Array<String> =
    takeIf { false == it.isNullOrEmpty() }
        ?.drop(1)
        ?.split('/')
        ?.toTypedArray()
        ?: emptyArray()

/**
 * Converts search string to search parameters
 */
private fun String?.toSearchComponent(): Array<Param> =
    this
        ?.split('&')
        ?.map { pair ->
            val idx = pair.indexOf('=')
            if (idx >= 0) {
                pair.substring(0, idx) of pair.substring(idx + 1)
            } else {
                pair of ""
            }
        }
        ?.toTypedArray()
        ?: emptyArray()

/**
 * Splits combined host-port value
 */
private fun String.splitCombinedHost(): Pair<String?, Int> =
    split(':').let { split -> split.first().takeIf { it.isNotBlank() } to (split.getOrNull(1)?.toInt() ?: -1) }

/**
 * Builds path component
 */
private fun Array<String>.toPath(): String? =
    takeIf { it.isNotEmpty() }?.joinToString("/", "/") ?: "/"

/**
 * Joins search parameters to search string
 */
private fun Array<Param>.toSearch(): String? =
    joinToString("&") { (name, value) -> value.takeIf { it.isNotBlank() }?.let { "$name=$it" } ?: name }
        .takeIf { it.isNotBlank() }

/**
 * Builds hash value
 */
private fun String.toHash(): String? = takeIf { it.isNotBlank() }
