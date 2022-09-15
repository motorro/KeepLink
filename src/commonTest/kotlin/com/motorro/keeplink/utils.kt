package com.motorro.keeplink

import com.motorro.keeplink.data.Param
import com.motorro.keeplink.data.PshComponents
import com.motorro.keeplink.data.toParams

/**
 * Creates PSH components
 */
internal fun pshComponentsOf(
    path: List<String>,
    search: Map<String, String> = emptyMap(),
    hash: String = ""
): PshComponents = object : PshComponents() {
    override fun getPath(): Array<String> = path.toTypedArray()
    override fun getSearch(): Array<Param> = search.toParams()
    override fun getHash(): String = hash
}

/**
 * Creates PSH components
 */
internal fun pshComponentsOf(
    path: List<String>,
    search: List<Param>,
    hash: String
): PshComponents = object : PshComponents() {
    override fun getPath(): Array<String> = path.toTypedArray()
    override fun getSearch(): Array<Param> = search.toTypedArray()
    override fun getHash(): String = hash
}

/**
 * Creates URI components
 */
internal fun uriComponentsOf(
    scheme: String,
    host: String,
    path: List<String>,
    search: Map<String, String> = emptyMap(),
    hash: String = ""
): UriComponents = UriComponents(
    scheme = scheme,
    host = host,
    path = path.toTypedArray(),
    search = search.toParams(),
    hash = hash
)