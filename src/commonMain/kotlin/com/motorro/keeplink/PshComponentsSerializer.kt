package com.motorro.keeplink

import com.motorro.keeplink.data.Param
import com.motorro.keeplink.data.PshComponents
import com.motorro.keeplink.data.PshComponentsImpl
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.KSerializer
import kotlinx.serialization.SerializationException
import kotlinx.serialization.Serializer
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.buildClassSerialDescriptor
import kotlinx.serialization.descriptors.listSerialDescriptor
import kotlinx.serialization.descriptors.nullable
import kotlinx.serialization.encoding.CompositeDecoder
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder

/**
 * Serializes [PshComponents]
 */
@Serializer(forClass = PshComponents::class)
@OptIn(ExperimentalSerializationApi::class)
object PshComponentsSerializer : KSerializer<PshComponents> {
    /**
     * Descriptor
     */
    override val descriptor: SerialDescriptor = buildClassSerialDescriptor("Action") {
        element("path", listSerialDescriptor<String>().nullable)
        element("search", listSerialDescriptor<Param>().nullable)
        element("hash", String.serializer().descriptor.nullable)
    }

    /**
     * Serializes using action components
     */
    override fun serialize(encoder: Encoder, value: PshComponents) {
        val out = encoder.beginStructure(descriptor)
        value.getPath().takeIf { it.isNotEmpty() }?.let { out.encodeSerializableElement(descriptor, 0, ListSerializer(String.serializer()), it.toList()) }
        value.getSearch().takeIf { it.isNotEmpty() }?.let { out.encodeSerializableElement(descriptor, 1, ListSerializer(
            Param.serializer()), it.toList()) }
        value.getHash().takeIf { it.isNotBlank() }?.let { out.encodeStringElement(descriptor, 2, it) }
        out.endStructure(descriptor)
    }

    /**
     * Deserializes from components and parses using internal parser
     */
    override fun deserialize(decoder: Decoder): PshComponents {
        val inp = decoder.beginStructure(descriptor)
        val components = PshComponentsImpl()

        loop@ while (true) {
            when (val i = inp.decodeElementIndex(descriptor)) {
                CompositeDecoder.DECODE_DONE -> break@loop
                0 -> components.mPath = inp.decodeSerializableElement(descriptor, i, ListSerializer(String.serializer())).toTypedArray()
                1 -> components.mSearch = inp.decodeSerializableElement(descriptor, i, ListSerializer(Param.serializer())).toTypedArray()
                2 -> components.mHash = inp.decodeStringElement(descriptor, i)
                else -> throw SerializationException("Unknown index $i")
            }
        }
        inp.endStructure(descriptor)

        return components
    }
}