package com.motorro.keeplink.testaction.data

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFails

class TransportTypeTest {
    @Test
    fun parsesFlight() {
        assertEquals(TransportTypes.FLIGHT, TransportType.parse("flight"))
    }

    @Test
    fun parsesTrain() {
        assertEquals(TransportTypes.TRAIN, TransportType.parse("train"))
    }

    @Test
    fun failsToParseInvalidFlightType() {
        assertFails { TransportType.parse("INVALID") }
    }
}