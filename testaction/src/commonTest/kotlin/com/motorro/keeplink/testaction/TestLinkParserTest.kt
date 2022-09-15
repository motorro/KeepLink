package com.motorro.keeplink.testaction

import com.motorro.keeplink.DeepLink
import com.motorro.keeplink.mocks.UTM
import com.motorro.keeplink.mocks.UTM_SEARCH
import com.motorro.keeplink.testaction.LinkParsers.LOCALHOST_8080
import com.motorro.keeplink.testaction.LinkParsers.MOTORRO
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class TestLinkParserTest {
    companion object {
        private const val MOTORRO_LINK = "motorro:/login/magic/123?$UTM_SEARCH"
        private const val LOCALHOST_8080_LINK = "http://localhost:8080/login/magic/123?$UTM_SEARCH"

        private val EXPECTED_LINK = DeepLink(
            TestAction.Login.Magic("123"),
            UTM
        )
    }

    @Test
    fun motorroParsesMotorroLink() {
        assertEquals(EXPECTED_LINK, MOTORRO.parse(MOTORRO_LINK))
    }

    @Test
    fun motorroDoesNotParseOther() {
        assertNull(MOTORRO.parse(LOCALHOST_8080_LINK))
    }

    @Test
    fun localhost8080ParsesLocalhostLink() {
        assertEquals(EXPECTED_LINK, LOCALHOST_8080.parse(LOCALHOST_8080_LINK))
    }

    @Test
    fun localhost8080DoesNotParseOther() {
        assertNull(LOCALHOST_8080.parse(MOTORRO_LINK))
    }
}