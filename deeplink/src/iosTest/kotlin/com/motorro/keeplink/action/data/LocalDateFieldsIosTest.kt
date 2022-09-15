package com.motorro.keeplink.action.data

import kotlin.test.Test
import kotlin.test.assertEquals

class LocalDateFieldsIosTest {
    @Test
    fun createsFromComponents() {
        val localDateFields = fromYMD(2021, 1, 27)
        assertEquals(2021, localDateFields.year)
        assertEquals(1, localDateFields.month)
        assertEquals(27, localDateFields.day)
    }
}