package com.motorro.keeplink.action

import com.motorro.keeplink.MAGIC_LINK_COMPONENTS
import com.motorro.keeplink.PROFILE_LINK_COMPONENTS
import com.motorro.keeplink.SEARCH_COMPONENTS
import com.motorro.keeplink.uri.pshComponentsOf
import kotlin.test.Test
import kotlin.test.assertTrue

class RootActionParserTest {
    @Test
    fun parsesProfileAction() {
        assertTrue { RootActionParser.parse(PROFILE_LINK_COMPONENTS, -1) is TestAction.Profile }
    }

    @Test
    fun parsesMagicLinkAction() {
        assertTrue { RootActionParser.parse(MAGIC_LINK_COMPONENTS, -1) is TestAction.Login.Magic }
    }

    @Test
    fun parsesSearchAction() {
        assertTrue { RootActionParser.parse(SEARCH_COMPONENTS, -1) is TestAction.Search }
    }

    @Test
    fun returnsNullForUnknownChild() {
        assertTrue { RootActionParser.parse(pshComponentsOf(listOf("unknown")), -1) is TestAction.Unknown }
    }

    @Test
    fun returnsNoneForEmpty() {
        assertTrue { RootActionParser.parse(pshComponentsOf(emptyList()), -1) is TestAction.Root }
    }
}