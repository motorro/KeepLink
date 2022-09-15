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

import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Serializes [DeepLink] to deep-link URI
 * @param builder Link builder
 * @param parser Link parser
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
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
