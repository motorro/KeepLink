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

import com.motorro.keeplink.uri.data.of
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class UriToolsTest {
    @Test
    fun parsesAllComponents() {
        val string = "https://motorro.com:123/open/search?type=train&from=moscow&to=paris&date=2021-01-30#top"
        val parsed = string.toComponents()
        assertEquals("https", parsed.scheme)
        assertEquals("motorro.com:123", parsed.host)
        assertTrue { arrayOf("open", "search") contentEquals  parsed.getPath() }
        assertTrue { arrayOf("type" of "train", "from" of "moscow", "to" of "paris", "date" of "2021-01-30") contentEquals parsed.getSearch() }
        assertEquals("top", parsed.getHash())
    }

    @Test
    fun parsesWithoutHost() {
        val string = "motorro:/open/search?type=train#top"
        val parsed = string.toComponents()
        assertEquals("motorro", parsed.scheme)
        assertEquals("", parsed.host)
        assertTrue { arrayOf("open", "search") contentEquals parsed.getPath() }
        assertTrue { arrayOf("type" of "train") contentEquals parsed.getSearch() }
        assertEquals("top", parsed.getHash())
    }

    @Test
    fun parsesDecoding() {
        val string = "motorro:/open/search?type=train%20search#top%20bottom"
        val parsed = string.toComponents()
        assertEquals("motorro", parsed.scheme)
        assertEquals("", parsed.host)
        assertTrue { arrayOf("open", "search") contentEquals parsed.getPath() }
        assertTrue { arrayOf("type" of "train search") contentEquals parsed.getSearch() }
        assertEquals("top bottom", parsed.getHash())
    }

    @Test
    fun parsesWithTrailingSlash() {
        val string = "motorro:/open/search/?type=train#top"
        val parsed = string.toComponents()
        assertEquals("motorro", parsed.scheme)
        assertEquals("", parsed.host)
        assertTrue { arrayOf("open", "search", "") contentEquals parsed.getPath() }
        assertTrue { arrayOf("type" of "train") contentEquals parsed.getSearch() }
        assertEquals("top", parsed.getHash())
    }

    @Test
    fun parsesRoot() {
        val string = "motorro:/"
        val parsed = string.toComponents()
        assertEquals("motorro", parsed.scheme)
        assertEquals("", parsed.host)
        assertTrue { arrayOf("") contentEquals parsed.getPath() }
        assertTrue { parsed.getSearch().isEmpty() }
        assertTrue { parsed.getHash().isEmpty() }
    }

    @Test
    fun buildsAllComponents() {
        val components = uriComponentsOf(
            scheme = "https",
            host = "motorro.com:123",
            path = listOf("open", "search"),
            search = mapOf("type" to "train", "from" to "moscow", "to" to "paris", "date" to "2021-01-30"),
            hash = "top"
        )
        assertEquals(
            "https://motorro.com:123/open/search?type=train&from=moscow&to=paris&date=2021-01-30#top",
            components.build()
        )
    }

    @Test
    fun buildsWithoutHost() {
        val components = uriComponentsOf(
            scheme = "motorro",
            host = "",
            path = listOf("open", "search"),
            search = mapOf("type" to "train"),
            hash = "top"
        )
        assertEquals(
            "motorro:/open/search?type=train#top",
            components.build()
        )
    }

    @Test
    fun buildsWithoutHash() {
        val components = uriComponentsOf(
            scheme = "motorro",
            host = "motorro.com:123",
            path = listOf("open", "search"),
            search = mapOf("type" to "train"),
            hash = ""
        )
        assertEquals(
            "motorro://motorro.com:123/open/search?type=train",
            components.build()
        )
    }

    @Test
    fun buildsWithoutSearch() {
        val components = uriComponentsOf(
            scheme = "motorro",
            host = "motorro.com:123",
            path = listOf("open", "search"),
            search = emptyMap(),
            hash = "top"
        )
        assertEquals(
            "motorro://motorro.com:123/open/search#top",
            components.build()
        )
    }

    @Test
    fun buildsEncoding() {
        val components = uriComponentsOf(
            scheme = "motorro",
            host = "",
            path = listOf("open", "search"),
            search = mapOf("type" to "train search"),
            hash = "top bottom"
        )
        assertEquals(
            "motorro:/open/search?type=train%20search#top%20bottom",
            components.build()
        )
    }

    @Test
    fun buildsWithTrailingSlash() {
        val components = uriComponentsOf(
            scheme = "motorro",
            host = "",
            path = listOf("open", "search", ""),
            search = mapOf("type" to "train"),
            hash = "top"
        )
        assertEquals(
            "motorro:/open/search/?type=train#top",
            components.build()
        )
    }

    @Test
    fun buildsEmpty() {
        val components = UriComponents(
            scheme = "motorro",
            host = "",
            actionComponents = pshComponentsOf(emptyList())
        )
        assertEquals(
            "motorro:/",
            components.build()
        )
    }
}