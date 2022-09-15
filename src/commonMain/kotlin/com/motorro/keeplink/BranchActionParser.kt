package com.motorro.keeplink

import com.motorro.keeplink.data.PshComponents

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