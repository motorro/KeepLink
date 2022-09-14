package com.motorro.keeplink

val UNKNOWN_COMPONENTS = pshComponentsOf(
    listOf("unknown", "path"),
    mapOf(
        "unknown" to "param"
    ),
    "unknownHash"
)

const val UNKNOWN_JSON = """{"path":["unknown","path"],"search":[{"name":"unknown","value":"param"}],"hash":"unknownHash"}"""

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

