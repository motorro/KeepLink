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

import com.motorro.keeplink.deeplink.ActionParser
import com.motorro.keeplink.deeplink.BranchActionParser
import com.motorro.keeplink.deeplink.DefaultActionParser
import com.motorro.keeplink.deeplink.SegmentCheckParser
import com.motorro.keeplink.testaction.data.LocalDateFields
import com.motorro.keeplink.testaction.data.TransportType
import com.motorro.keeplink.uri.data.getValue

/**
 * Parser for [TestAction.Login.Magic] token in
 * `/login/magic/{token}`
 * Validates token is not empty
 */
internal val MagicLinkHashParser = ActionParser { components, pathIndex ->
    components.getPath().getOrNull(pathIndex)?.takeIf { it.isNotBlank() }?.let { TestAction.Login.Magic(it) }
}

/**
 * Parser for [TestAction.Login.Magic]
 */
internal val MagicLinkParser = SegmentCheckParser(
    TestAction.Login.Magic.SEGMENT,
    BranchActionParser(listOf(MagicLinkHashParser)) { _, _ -> TestAction.Invalid.INSTANCE }
)

/**
 * Parses login actions
 */
internal val LoginParser = SegmentCheckParser(
    TestAction.Login.SEGMENT,
    BranchActionParser(MagicLinkParser)
)

/**
 * Parser for [TestAction.Search]
 * Checks all parameters types
 */
internal val SearchParser = with(TestAction.Search) {
    SegmentCheckParser(SEGMENT) { components, _ ->
        val type = runCatching { components.getSearch().getValue(PARAM_TYPE)?.let { TransportType.parse(it) } }.getOrNull() ?: return@SegmentCheckParser null
        val from = components.getSearch().getValue(PARAM_FROM) ?: return@SegmentCheckParser null
        val to = components.getSearch().getValue(PARAM_TO) ?: return@SegmentCheckParser  null
        val date = runCatching { components.getSearch().getValue(PARAM_DATE)?.let { LocalDateFields.parse(it) } }.getOrNull() ?: return@SegmentCheckParser null

        TestAction.Search(type, from, to, date)
    }
}

internal val ProfileParser = SegmentCheckParser(
    TestAction.Profile.SEGMENT,
    DefaultActionParser { TestAction.Profile() }
)

/**
 * Root parsers - all known branches from root node
 */
private val rootParsers = listOf(
    ProfileParser,
    LoginParser,
    SearchParser
)

/**
 * Root parser for [TestAction]
 * Returns:
 * - known action if definitely known
 * - Unknown action if component are not empty
 * - Root action on empty components
 */
val RootActionParser = BranchActionParser(rootParsers) { components, _ ->
    if (components.getPath().isEmpty()) TestAction.Root() else TestAction.Unknown(components)
}

