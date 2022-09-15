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

package com.motorro.keeplink.deeplink

import com.motorro.keeplink.mocks.UNKNOWN_COMPONENTS
import com.motorro.keeplink.mocks.UTM
import com.motorro.keeplink.testaction.TestAction
import com.motorro.keeplink.uri.data.toMap
import kotlin.test.Test
import kotlin.test.assertEquals

class DeepLinkTest {
    @Test
    fun exportsComponents() {
        val action = TestAction.Unknown(UNKNOWN_COMPONENTS)
        val utm = UTM
        val link = DeepLink(action, utm)
        assertEquals(
            listOf("unknown", "path"),
            link.getPath().toList()
        )
        assertEquals(
            mapOf(
                "unknown" to "param",
                "utm_source" to "motorro",
                "utm_medium" to "cpc",
                "utm_campaign" to "spring_sale",
                "utm_term" to "deals",
                "utm_content" to "banner"
            ),
            link.getSearch().toMap()
        )
        assertEquals(
            "unknownHash",
            link.getHash()
        )
    }
}