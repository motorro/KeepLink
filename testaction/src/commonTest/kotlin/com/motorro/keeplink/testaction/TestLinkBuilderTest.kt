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
import com.motorro.keeplink.testaction.LinkBuilders.LOCALHOST_8080
import com.motorro.keeplink.testaction.LinkBuilders.MOTORRO
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