package com.motorro.keeplink.testaction

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class RootActionTest {
    @Test
    fun rootExportsComponents() {
        val root = TestAction.Root()
        assertEquals(listOf(""), root.getPath().toList())
        assertTrue { root.getSearch().isEmpty() }
        assertTrue { root.getHash().isEmpty() }
    }
}