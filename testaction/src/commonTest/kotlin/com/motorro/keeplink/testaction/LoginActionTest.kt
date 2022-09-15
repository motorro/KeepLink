package com.motorro.keeplink.testaction

import com.motorro.keeplink.uri.pshComponentsOf
import kotlin.test.Test
import kotlin.test.assertNull
import kotlin.test.assertTrue

class LoginActionTest {
    @Test
    fun parsesMagicLinkAction() {
        assertTrue { LoginParser.parse(MAGIC_LINK_COMPONENTS, 0) is TestAction.Login.Magic }
    }

    @Test
    fun returnsNullForUnknownChild() {
        assertNull(LoginParser.parse(pshComponentsOf(listOf("login", "unknown")), 0))
    }

    @Test
    fun returnsNullForNotLogin() {
        assertNull(LoginParser.parse(pshComponentsOf(listOf("not_open", "magic")), 0))
    }
}