package com.motorro.keeplink

import com.motorro.data.PshComponents

/**
 * Parses action from action components
 */
fun interface ActionParser<out A : Action> {
    /**
     * Tries to parse given path
     * @param components Source action components
     * @param pathIndex Path index to start parsing at
     */
    fun parse(components: PshComponents, pathIndex: Int): A?
}
