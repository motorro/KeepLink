package com.motorro.keeplink.testaction

import com.motorro.keeplink.uri.pshComponentsOf

val PROFILE_LINK_COMPONENTS = pshComponentsOf(
    listOf("profile")
)

val MAGIC_LINK_COMPONENTS = pshComponentsOf(
    listOf("login", "magic", "hash")
)

val SEARCH_COMPONENTS = pshComponentsOf(
    listOf("search"),
    mapOf(
        "type" to "FLIGHT",
        "from" to "MOSCOW",
        "to" to "PARIS",
        "date" to "2021-01-27"
    )
)

