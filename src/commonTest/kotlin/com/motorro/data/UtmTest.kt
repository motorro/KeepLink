package com.motorro.data

import com.motorro.keeplink.data.parseUtm
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class UtmTest {
    @Test
    fun createsUtmFromComponents() {
        assertEquals(UTM, parseUtm(UTM_COMPONENTS))
    }

    @Test
    fun utmExportsComponents() {
        assertTrue {
            UTM_COMPONENTS.getSearch().contentEquals(UTM.getSearch())
        }
    }
}