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