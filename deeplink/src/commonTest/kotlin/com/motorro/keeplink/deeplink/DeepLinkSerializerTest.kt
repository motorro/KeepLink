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

package com.motorro.keeplink.deeplink

import com.motorro.keeplink.mocks.UNKNOWN_COMPONENTS
import com.motorro.keeplink.mocks.UTM
import com.motorro.keeplink.mocks.UTM_SEARCH
import com.motorro.keeplink.testaction.RootActionParser
import com.motorro.keeplink.testaction.TestAction
import com.motorro.keeplink.testaction.TestSerializers
import com.motorro.keeplink.uri.data.of
import com.motorro.keeplink.uri.pshComponentsOf
import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.serializersModuleOf
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

internal class DeepLinkSerializerTest {
    companion object {
        private const val EXPECTED_SERIALIZED_COMPONENTS = "unknown/path?unknown=param&$UTM_SEARCH#unknownHash"
        private const val EXPECTED_SERIALIZED_MOTORRO_LINK = "motorro:/$EXPECTED_SERIALIZED_COMPONENTS"
        private val SOURCE_LINK = DeepLink(TestAction.Unknown(UNKNOWN_COMPONENTS), UTM)
        // Unknown takes all params from components - so UTM search is also there
        private val EXPECTED_DESERIALIZED_LINK = DeepLink(
            TestAction.Unknown(
                pshComponentsOf(
                    listOf("unknown", "path"),
                    listOf("unknown" of "param").plus(UTM.getSearch()),
                    "unknownHash"
                )
            ),
            UTM
        )
    }

    private val builder = SchemeHostLinkBuilder<TestAction>("motorro", "")
    private val parser = SchemeHostLinkParser(RootActionParser, "motorro", "")
    private val serializer = DeepLinkSerializer(builder, parser)

    @Serializable
    private data class WithLink(@Contextual val link: DeepLink<TestAction>?)

    private val json = Json {
        serializersModule = serializersModuleOf(serializer)
    }

    @Test
    fun serializes() {
        val link = SOURCE_LINK
        assertEquals(
            """"$EXPECTED_SERIALIZED_MOTORRO_LINK"""",
            json.encodeToString(serializer, link)
        )
        assertEquals(
            """{"link":"$EXPECTED_SERIALIZED_MOTORRO_LINK"}""",
            json.encodeToString(WithLink.serializer(), WithLink(link))
        )
    }

    @Test
    fun deserializes() {
        val link = EXPECTED_DESERIALIZED_LINK
        assertEquals(
            link,
            json.decodeFromString(serializer, """"$EXPECTED_SERIALIZED_MOTORRO_LINK"""")
        )
        assertEquals(
            WithLink(link),
            json.decodeFromString(WithLink.serializer(),"""{"link":"$EXPECTED_SERIALIZED_MOTORRO_LINK"}""")
        )
    }

    @Test
    fun serializesNull() {
        assertEquals(
            """{"link":null}""",
            json.encodeToString(WithLink.serializer(), WithLink(null))
        )
    }

    @Test
    fun deserializesNull() {
        assertEquals(
            WithLink(null),
            json.decodeFromString(WithLink.serializer(), """{"link":null}""")
        )
    }

    @Test
    fun deserializesInvalidOnIncompatibleAction() {
        assertFailsWith<IllegalArgumentException> {
            json.decodeFromString(serializer, """"https://open.motorro.com/unknown/path?unknown=param#unknownHash"""")
        }
    }

    @Test
    fun motorroSerializes() {
        val json = Json
        val encoded = json.encodeToString(TestSerializers.MOTORRO, SOURCE_LINK)
        assertEquals(""""$EXPECTED_SERIALIZED_MOTORRO_LINK"""", encoded)
        assertEquals(EXPECTED_DESERIALIZED_LINK, json.decodeFromString(TestSerializers.MOTORRO, encoded))
    }

    @Test
    fun localhostSerializes() {
        val json = Json
        val encoded = json.encodeToString(TestSerializers.LOCALHOST_8080, SOURCE_LINK)
        assertEquals(""""http://localhost:8080/$EXPECTED_SERIALIZED_COMPONENTS"""", encoded)
        assertEquals(EXPECTED_DESERIALIZED_LINK, json.decodeFromString(TestSerializers.LOCALHOST_8080, encoded))
    }
}