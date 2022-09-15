package com.motorro.keeplink.testaction.data

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFails

class LocalDateFieldsTest {
    @Test
    fun createsDate() {
        val wrapper = LocalDateFields(2021,1, 7)
        assertEquals(2021, wrapper.year)
        assertEquals(1, wrapper.month)
        assertEquals(7, wrapper.day)
    }

    @Test
    fun parsesDate() {
        val wrapper = LocalDateFields.parse("2021-01-07")
        assertEquals(2021, wrapper.year)
        assertEquals(1, wrapper.month)
        assertEquals(7, wrapper.day)
    }

    @Test
    fun failsToParseInvalidDate() {
        assertFails { LocalDateFields.parse("INVALID") }
    }

    @Test
    fun printsDate() {
        val string = "2021-01-07"
        assertEquals(string, LocalDateFields.parse(string).toComponentValue())
    }
}