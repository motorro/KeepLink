package com.motorro.keeplink

import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import kotlin.js.JsExport

/**
 * Serializes [DeepLink] to deep-link URI
 * @param builder Link builder
 * @param parser Link parser
 */
@JsExport
open class DeepLinkSerializer<A : Action>(
    private val builder: LinkBuilder<A>,
    private val parser: LinkParser<A>,
) : KSerializer<DeepLink<A>> {
    /**
     * Descriptor
     */
    override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("DeepLink", PrimitiveKind.STRING)

    /**
     * Serializes using action components
     */
    override fun serialize(encoder: Encoder, value: DeepLink<A>) {
        encoder.encodeString(builder.build(value))
    }

    /**
     * Deserializes from components and parses using internal parser
     */
    override fun deserialize(decoder: Decoder): DeepLink<A> = requireNotNull(parser.parse(decoder.decodeString())) {
        "Tried to deserialize invalid link: ${decoder.decodeString()}"
    }
}
