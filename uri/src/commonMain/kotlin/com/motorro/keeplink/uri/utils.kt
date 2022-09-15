package com.motorro.keeplink.uri

import com.motorro.keeplink.uri.data.Param
import com.motorro.keeplink.uri.data.PshComponents
import com.motorro.keeplink.uri.data.SearchComponent
import com.motorro.keeplink.uri.data.toParams

/**
 * Creates search components
 */
fun searchComponentOf(search: Map<String, String>): SearchComponent = SearchComponent { search.toParams() }

/**
 * Creates search components
 */
fun searchComponentOf(vararg search: Pair<String, String>): SearchComponent = SearchComponent { mapOf(*search).toParams() }

/**
 * Creates PSH components
 */
fun pshComponentsOf(
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
fun pshComponentsOf(
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
fun uriComponentsOf(
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