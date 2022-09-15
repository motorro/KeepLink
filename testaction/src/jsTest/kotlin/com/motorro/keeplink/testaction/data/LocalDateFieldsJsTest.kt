package com.motorro.keeplink.testaction.data

import kotlin.js.Date
import kotlin.test.Test
import kotlin.test.assertEquals

class LocalDateFieldsJsTest {
    @Test
    fun createsFromDate() {
        val date = Date("2021-01-27")
        val wrapper = fromDate(date)
        assertEquals(2021, wrapper.year)
        assertEquals(1, wrapper.month)
        assertEquals(27, wrapper.day)
    }

    @Test
    fun exportsToDate() {
        val from = Date("2021-01-27")
        val wrapper = fromDate(from)
        val to = toDate(wrapper)
        assertEquals(from.getUTCMilliseconds(), to.getUTCMilliseconds())
    }
}