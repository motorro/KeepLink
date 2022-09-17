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

package com.motorro.keeplink.testaction

import com.motorro.keeplink.deeplink.*
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Test link parsers (JS-compatible)
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
object LinkParsers {
    /**
     * Deep-link for URIs with `motorro` scheme:
     *
     * `motorro:/profile/chats/123`
     */
    val MOTORRO: LinkParser<TestAction> = SchemeHostLinkParser(RootActionParser, "motorro", "")

    /**
     * Deep-link for URIs to `http://localhost:8080`:
     *
     * `https://localhost:8080/profile/chats/123`
     */
    val LOCALHOST_8080: LinkParser<TestAction> = SchemeHostLinkParser(RootActionParser, "http", "localhost:8080")
}

/**
 * Test link builders (JS-compatible)
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
object LinkBuilders {
    /**
     * Deep-link for URIs with `motorro` scheme:
     *
     * `motorro:/profile/chats/123`
     */
    val MOTORRO: LinkBuilder<TestAction> = SchemeHostLinkBuilder("motorro", "")

    /**
     * Deep-link for URIs to `http://localhost:8080`:
     *
     * `https://localhost:8080/open/chats/123`
     */
    val LOCALHOST_8080: LinkBuilder<TestAction> = SchemeHostLinkBuilder("http", "localhost:8080")
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
