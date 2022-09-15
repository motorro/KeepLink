package com.motorro.keeplink.uri

import com.motorro.keeplink.uri.data.Param
import com.motorro.keeplink.uri.data.of
import java.net.URI

/**
 * Parses string URI to [UriComponents] (JVM implementation)
 * @receiver source string
 * @return Parsed components
 */
actual fun String.toComponents(): UriComponents = with(URI(this)) {
    UriComponents(
        scheme = scheme ?: "",
        host = getCombinedHost(),
        path = path.toPathComponent(),
        search = query.toSearchComponent(),
        hash = fragment ?: ""
    )
}

/**
 * Builds string URI from [UriComponents] (JVM implementation)
 * @receiver Target components
 * @return Built URI
 */
actual fun UriComponents.build(): String = host.splitCombinedHost().let { (jvmHost, jvmPort) ->
    URI(
        scheme,
        null,
        jvmHost,
        jvmPort,
        getPath().toPath(),
        getSearch().toSearch(),
        getHash().toHash()
    ).toString()
}


/**
 * Returns host combined with port (JS style)
 */
private fun URI.getCombinedHost(): String =
    host?.let { host -> if (port >= 0) "$host:$port" else host } ?: ""

/**
 * Splits combined host-port value
 */
private fun String.splitCombinedHost(): Pair<String?, Int> =
    split(':').let { split -> split.first().takeIf { it.isNotBlank() } to (split.getOrNull(1)?.toInt() ?: -1) }

/**
 * Parses path component
 */
private fun String?.toPathComponent(): Array<String> =
    this
        ?.takeIf { it.isNotEmpty() }
        ?.drop(1)
        ?.split('/')
        ?.toTypedArray()
        ?: emptyArray()

/**
 * Builds path component
 */
private fun Array<String>.toPath(): String =
    takeIf { it.isNotEmpty() }?.joinToString("/", "/") ?: "/"

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
 * Joins search parameters to search string
 */
private fun Array<Param>.toSearch(): String? =
    joinToString("&") { (name, value) -> value.takeIf { it.isNotBlank() }?.let { "$name=$it" } ?: name }
        .takeIf { it.isNotBlank() }

/**
 * Builds hash value
 */
private fun String.toHash(): String? = takeIf { it.isNotBlank() }

