package com.motorro.keeplink

import com.motorro.data.Param
import com.motorro.data.PshComponents
import com.motorro.data.Utm
import com.motorro.data.utm
import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Deep-link object
 * @property action Action to perform
 * @property utm UTM properties
 */
@JsExport
@Serializable
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
class DeepLink<out A : Action>(override val action: A, val utm: Utm) : WithAction<A>, PshComponents() {
    /**
     * True if link is valid
     */
    val isValid: Boolean get() = action.isValid

    /**
     * Adds [Utm] components
     * @param utm UTM components
     */
    fun withUtm(utm: Utm): DeepLink<A> = DeepLink(action, utm)

    /**
     * Combined URI path component.
     *
     * `/open/chat/123`
     */
    override fun getPath(): Array<String> = action.getPath()

    /**
     * Combined URI search component
     *
     * `/open/search?type=CHARTER&from=MOSCOW&to=PARIS&date=2021-01-28`
     */
    override fun getSearch(): Array<Param> = action.getSearch() + utm.getSearch()

    /**
     * URI hash component
     *
     * `/open/settings#background_location`
     */
    override fun getHash(): String = action.getHash()

    override fun toString(): String {
        return "DeepLink(action=$action, utm=$utm)"
    }
}

/**
 * Creates a new deep-link
 * @param action Deep-link action
 */
@JsExport
@JsName("deepLink")
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
fun <A: Action> deepLink(action: A): DeepLink<A> = DeepLink(action, utm(""))