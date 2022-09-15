package com.motorro.keeplink

import com.motorro.keeplink.data.PshComponents
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