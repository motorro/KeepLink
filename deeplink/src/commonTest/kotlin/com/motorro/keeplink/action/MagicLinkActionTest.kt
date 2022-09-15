package com.motorro.keeplink.action

import com.motorro.keeplink.MAGIC_LINK_COMPONENTS
import com.motorro.keeplink.uri.pshComponentsOf
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue

internal class MagicLinkActionTest {
    @Test
    fun parsesMagicLinkRootAction() {
        val components = MAGIC_LINK_COMPONENTS
        assertEquals(
            TestAction.Login.Magic("hash"),
            MagicLinkParser.parse(components, 1)
        )
    }

    @Test
    fun returnsInvalidIfHashNotSupplied() {
        val components = pshComponentsOf(listOf("login", "magic"))
        assertTrue {
            MagicLinkParser.parse(components, 1) is TestAction.Invalid
        }
    }

    @Test
    fun returnsInvalidIfHashIsEmpty() {
        val components = pshComponentsOf(listOf("login", "magic", " "))
        assertTrue {
            MagicLinkParser.parse(components, 1) is TestAction.Invalid
        }
    }

    @Test
    fun returnsNullIfSegmentDoesNotMatch() {
        val components = pshComponentsOf(listOf("login", "some_other_login"))
        assertNull(MagicLinkParser.parse(components, 1))
    }

    @Test
    fun returnsNullIfSegmentIndexInvalid() {
        val components = MAGIC_LINK_COMPONENTS
        assertNull(MagicLinkParser.parse(components, 10))
    }

    @Test
    fun magicLinkExportsComponents() {
        val page = TestAction.Login.Magic("hash")
        assertEquals(
            listOf("login", "magic", "hash"),
            page.getPath().toList()
        )
        assertTrue { page.getSearch().isEmpty() }
        assertTrue { page.getHash().isEmpty() }
    }
}