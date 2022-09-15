package com.motorro.keeplink.deeplink

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Contains an action
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
interface WithAction<out A : Action> {
    /**
     * Action
     */
    val action: A
}