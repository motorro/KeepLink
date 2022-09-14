package com.motorro.data

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Has URI search
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
fun interface SearchComponent {
    /**
     * URI search component
     *
     * `/open/search?type=CHARTER&from=MOSCOW&to=PARIS&date=2021-01-28`
     */
    fun getSearch(): Array<Param>
}