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