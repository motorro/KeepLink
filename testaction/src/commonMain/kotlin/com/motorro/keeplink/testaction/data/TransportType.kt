package com.motorro.keeplink.testaction.data

import com.motorro.keeplink.uri.data.ComponentValue
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Transport-type enum (JS-compatible)
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
data class TransportType(val value: String): ComponentValue {
    companion object {
        /**
         * Parses from component value
         * @param componentValue Component value - transport type
         */
        fun parse(componentValue: String): TransportType = when(componentValue.uppercase()){
            TransportTypes.FLIGHT.value -> TransportTypes.FLIGHT
            TransportTypes.TRAIN.value -> TransportTypes.TRAIN
            else -> throw IllegalArgumentException("Unknown charter type: $componentValue")
        }
    }

    /**
     * Returns component value representation
     */
    override fun toComponentValue(): String = value
}

/**
 * Allowed transport-types (JS-compatible)
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
object TransportTypes {
    /**
     * Flight
     */
    val FLIGHT = TransportType("FLIGHT")

    /**
     * Flight-type: seats
     */
    val TRAIN = TransportType("TRAIN")
}