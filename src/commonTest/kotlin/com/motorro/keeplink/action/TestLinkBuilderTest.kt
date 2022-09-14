package com.motorro.keeplink.action

import com.motorro.data.UTM
import com.motorro.data.UTM_SEARCH
import com.motorro.keeplink.DeepLink
import com.motorro.keeplink.action.LinkBuilders.LOCALHOST_8080
import com.motorro.keeplink.action.LinkBuilders.MOTORRO
import kotlin.test.Test
import kotlin.test.assertEquals

class TestLinkBuilderTest {
    companion object {
        private val link = DeepLink(TestAction.Login.Magic("123"), UTM)
    }

    @Test
    fun motorroBuildsMotorroLink() {
        assertEquals(
            "motorro:/login/magic/123?$UTM_SEARCH",
            MOTORRO.build(link)
        )
    }

    @Test
    fun localhost8080BuildsLocalhostLink() {
        assertEquals(
            "http://localhost:8080/login/magic/123?$UTM_SEARCH",
            LOCALHOST_8080.build(link)
        )
    }
}