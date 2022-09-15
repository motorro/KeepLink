package com.motorro.keeplink.deeplink

import com.motorro.keeplink.uri.data.PshComponents


/**
 * Used in composite parsers to return default action
 */
class DefaultActionParser<A : Action>(private val action: () -> A?) : ActionParser<A> {
    /**
     * Tries to parse given path
     * @param components Source action components
     * @param pathIndex Path index to start parsing at
     */
    override fun parse(components: PshComponents, pathIndex: Int): A? = action()
}