package com.motorro.keeplink.action

import com.motorro.keeplink.DeepLinkSerializer
import com.motorro.keeplink.LinkBuilder
import com.motorro.keeplink.LinkParser
import kotlin.js.JsExport

/**
 * Test link parsers (JS-compatible)
 */
@JsExport
object LinkParsers {
    /**
     * Deep-link for URIs with `motorro` scheme:
     *
     * `motorro:/profile/chats/123`
     */
    val MOTORRO = LinkParser(RootActionParser, "motorro", "")

    /**
     * Deep-link for URIs to `http://localhost:8080`:
     *
     * `https://localhost:8080/profile/chats/123`
     */
    val LOCALHOST_8080 = LinkParser(RootActionParser, "http", "localhost:8080")
}

/**
 * Test link builders (JS-compatible)
 */
@JsExport
object LinkBuilders {
    /**
     * Deep-link for URIs with `motorro` scheme:
     *
     * `motorro:/profile/chats/123`
     */
    val MOTORRO = LinkBuilder<TestAction>("motorro", "")

    /**
     * Deep-link for URIs to `http://localhost:8080`:
     *
     * `https://localhost:8080/open/chats/123`
     */
    val LOCALHOST_8080 = LinkBuilder<TestAction>("http", "localhost:8080")
}

/**
 * Test link serializers (JS-compatible)
 */
object TestSerializers {
    /**
     * Deep-link for URIs with `motorro` scheme:
     *
     * `motorro:/profile/chats/123`
     */
    val MOTORRO = DeepLinkSerializer(LinkBuilders.MOTORRO, LinkParsers.MOTORRO)

    /**
     * Deep-link for URIs to `http://localhost:8080`:
     *
     * `https://localhost:8080/profile/chats/123`
     */
    val LOCALHOST_8080 = DeepLinkSerializer(LinkBuilders.LOCALHOST_8080, LinkParsers.LOCALHOST_8080)
}
