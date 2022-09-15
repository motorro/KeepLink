package com.motorro.keeplink

import com.motorro.keeplink.data.Param
import com.motorro.keeplink.data.of
import org.w3c.dom.url.URL


/**
 * Parses string URI to [UriComponents] (JS implementation)
 * @receiver source string
 * @return Parsed components
 */
internal actual fun String.toComponents(): UriComponents  = with(URL(this)) {
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
internal actual fun UriComponents.build(): String {
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