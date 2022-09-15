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
import org.w3c.dom.url.URL


/**
 * Parses string URI to [UriComponents] (JS implementation)
 * @receiver source string
 * @return Parsed components
 */
actual fun String.toComponents(): UriComponents = with(URL(this)) {
    UriComponents(
        scheme = protocol.dropLast(1),
        host = host,
        path = pathname.toPathComponent(),
        search = search.toSearchComponent(),
        hash = hash.toHashComponent()
    )
}

/**
 * Builds string URI from [UriComponents] (JS implementation)
 * @receiver Target components
 * @return Built URI
 */
actual fun UriComponents.build(): String {
    var base = "$scheme:"
    if (host.isNotEmpty()) {
        base += "//$host"
    }
    base += getPath().toPath()

    return URL(base).also {
        it.search = getSearch().toSearch()
        it.hash = getHash().toHash()
    }.toString()
}

/**
 * Parses path component
 */
private fun String.toPathComponent(): Array<String> =
    takeIf { it.isNotEmpty() }
        ?.drop(1)
        ?.split('/')
        ?.toTypedArray()
        ?: emptyArray()

/**
 * Builds path component
 */
private fun Array<String>.toPath(): String =
    joinToString("/", "/")

/**
 * Parses search parameters
 */
private fun String.toSearchComponent(): Array<Param> =
    takeIf { it.isNotEmpty() }
        ?.let(::decode)
        ?.drop(1)
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
 * Joins search parameters to search string
 */
private fun Array<Param>.toSearch(): String =
    joinToString("&") { (name, value) -> value.takeIf { it.isNotBlank() }?.let { "${encode(name)}=${encode(it)}" } ?: encode(name) }

/**
 * Parses hash value
 */
private fun String.toHashComponent(): String =
    takeIf { it.isNotEmpty() }?.drop(1)?.let(::decode) ?: ""

/**
 * Builds hash value
 */
private fun String.toHash(): String =
    takeIf { it.isNotEmpty() }?.let { "#${encode(it)}" } ?: ""

/**
 * Decodes URI-encoded strings
 */
@Suppress("UNUSED_PARAMETER")
private fun decode(string: String): String =
    js("decodeURIComponent(string)").unsafeCast<String>()

/**
 * Encodes strings
 */
@Suppress("UNUSED_PARAMETER")
private fun encode(string: String): String =
    js("encodeURIComponent(string)").unsafeCast<String>()