package com.motorro.keeplink

import com.motorro.keeplink.uri.data.PshComponents

/**
 * Common matcher that checks if segment in [parse] equals [segment]
 * @property segment Segment to match
 * @property next Next matcher if any
 */
internal open class SegmentCheckParser<A : Action>(private val segment: String, private val next: ActionParser<A>) : ActionParser<A> {
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