package com.motorro.keeplink.testaction.data

import java.time.LocalDate
import kotlin.test.Test
import kotlin.test.assertEquals

class LocalDateFieldsJvmTest {
    @Test
    fun createsFromLocalDate() {
        val date = LocalDate.parse("2021-01-27")
        val wrapper = fromLocalDate(date)
        assertEquals(2021, wrapper.year)
        assertEquals(1, wrapper.month)
        assertEquals(27, wrapper.day)
    }

    @Test
    fun exportsToLocalDate() {
        val from = LocalDate.parse("2021-01-27")
        val wrapper = fromLocalDate(from)
        val to = wrapper.toLocalDate()
        assertEquals(from, to)
    }
}