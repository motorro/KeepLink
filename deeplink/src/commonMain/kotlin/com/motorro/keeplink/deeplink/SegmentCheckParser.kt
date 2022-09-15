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

import com.motorro.keeplink.uri.data.PshComponents

/**
 * Common matcher that checks if segment in [parse] equals [segment]
 * @property segment Segment to match
 * @property next Next matcher if any
 */
open class SegmentCheckParser<A : Action>(private val segment: String, private val next: ActionParser<A>) :
    ActionParser<A> {
    /**
     * Tries to parse given path
     * @param components Source action components
     * @param pathIndex Path index to start parsing at
     */
    override fun parse(components: PshComponents, pathIndex: Int): A? = when {
        false == segment.equals(components.getPath().getOrNull(pathIndex), true) -> null
        else -> next.parse(components, pathIndex)
    }
}