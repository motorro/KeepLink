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
 * Parser to parse path branch
 * @param children Children to pass parsing. First non-null result is used as a return value from [parse]
 * @param default Called when no child parser matches given components
 */
open class BranchActionParser<A : Action>(
    private val children: Iterable<ActionParser<A>>,
    private val default: ActionParser<A>
) : ActionParser<A> {
    /**
     * Constructor with no default action
     * @param children Children to pass parsing. First non-null result is used as a return value from [parse]
     */
    constructor(vararg children: ActionParser<A>): this(children.asIterable(), { _, _ -> null })

    /**
     * Handles parsing to registered children
     * Parser increments [pathIndex] for children as it counts current index as its own
     * @param components Source action components
     * @param pathIndex Path index to start parsing at
     */
    override fun parse(components: PshComponents, pathIndex: Int): A? {
        for (child in children) {
            child.parse(components, pathIndex + 1)?.let { return it }
        }
        return default.parse(components, pathIndex)
    }
}