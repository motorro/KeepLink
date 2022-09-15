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

package com.motorro.keeplink.testaction

import com.motorro.keeplink.deeplink.DeepLink
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