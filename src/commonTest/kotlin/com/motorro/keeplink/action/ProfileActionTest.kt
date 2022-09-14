package com.motorro.keeplink.action

import com.motorro.keeplink.PROFILE_LINK_COMPONENTS
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class ProfileActionTest {
    @Test
    fun parsesProfileAction() {
        assertTrue { ProfileParser.parse(PROFILE_LINK_COMPONENTS, 0) is TestAction.Profile }
    }

    @Test
    fun profileLinkExportsComponents() {
        val page = TestAction.Profile()
        assertEquals(
            listOf("profile"),
            page.getPath().toList()
        )
        assertTrue { page.getSearch().isEmpty() }
        assertTrue { page.getHash().isEmpty() }
    }
}