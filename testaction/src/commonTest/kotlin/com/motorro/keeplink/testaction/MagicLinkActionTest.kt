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