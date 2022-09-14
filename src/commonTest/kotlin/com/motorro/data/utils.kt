package com.motorro.data

/**
 * Creates search components
 */
fun searchComponentOf(search: Map<String, String>): SearchComponent = SearchComponent { search.toParams() }

/**
 * Creates search components
 */
fun searchComponentOf(vararg search: Pair<String, String>): SearchComponent = SearchComponent { mapOf(*search).toParams() }