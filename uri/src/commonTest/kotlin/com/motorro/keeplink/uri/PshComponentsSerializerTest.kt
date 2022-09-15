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

import com.motorro.keeplink.mocks.UNKNOWN_COMPONENTS
import com.motorro.keeplink.mocks.UNKNOWN_JSON
import com.motorro.keeplink.uri.data.PshComponents
import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.serializersModuleOf
import kotlin.test.Test
import kotlin.test.assertEquals

internal class PshComponentsSerializerTest {
    @Serializable
    private data class WithComponents(@Contextual val components: PshComponents?)

    private val json = Json {
        serializersModule = serializersModuleOf(PshComponents::class, PshComponentsSerializer)
    }

    @Test
    fun serializes() {
        val components = UNKNOWN_COMPONENTS
        assertEquals(
            UNKNOWN_JSON,
            json.encodeToString(PshComponentsSerializer, components)
        )
        assertEquals(
            """{"components":$UNKNOWN_JSON}""",
            json.encodeToString(WithComponents.serializer(), WithComponents(components))
        )
    }

    @Test
    fun deserializes() {
        val components = UNKNOWN_COMPONENTS
        assertEquals(
            components,
            json.decodeFromString(PshComponentsSerializer, UNKNOWN_JSON)
        )
        assertEquals(
            WithComponents(components),
            json.decodeFromString(WithComponents.serializer(),"""{"components":$UNKNOWN_JSON}""")
        )
    }

    @Test
    fun serializesNull() {
        assertEquals(
            """{"components":null}""",
            json.encodeToString(WithComponents.serializer(), WithComponents(null))
        )
    }

    @Test
    fun deserializesNull() {
        assertEquals(
            WithComponents(null),
            json.decodeFromString(WithComponents.serializer(), """{"components":null}""")
        )
    }
}