package com.motorro.keeplink

import com.motorro.keeplink.data.Param
import com.motorro.keeplink.data.PshComponents
import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Deep link action marker class.
 *
 * Represents an action part of deep-link - what needs to be done by application.
 * Extend with a sealed class
 *
 * For example:
 * - To open some application page
 * - To run data update
 */
@JsExport
@Serializable
@OptIn(ExperimentalJsExport::class)
abstract class Action : PshComponents() {
    /**
     * Path component - where to go.
     * Represents a path to activity in an application: screen, action, etc.
     * Parameters exactly identifying the activity may be represented as path.
     *
     * For example, the following link opens chat with ID 123:
     *
     * `/open/chat/123`
     */
    override fun getPath(): Array<String> = emptyArray()

    /**
     * Search component - what to do.
     * Represents parameters to activity specified by [getPath] which instruct activity what to do.
     *
     * For example, the following link opens search activity and instructs it to search with specific parameters:
     *
     * `/open/search?type=TRAIN&from=MOSCOW&to=PARIS&date=2021-01-28`
     */
    override fun getSearch(): Array<Param> = emptyArray()

    /**
     * Hash component - what to display.
     * Represents extra action to do in activity.
     *
     * For example, you may instruct your document activity to scroll to specified anchor:
     *
     * `/open/settings#background_location`
     */
    override fun getHash(): String = ""

    /**
     * True if action is valid to execute
     */
    open val isValid: Boolean = true
}
