package com.motorro.keeplink.action.data

import com.motorro.keeplink.uri.data.ComponentValue
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Represents local date which has 'YYYY-MM-DD` representation in components
 * See platform implementation for details
 * @param year Full year
 * @param month Month: 1 - 12
 * @param day Day: 1 - 31
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
data class LocalDateFields(
    @JsName("year") val year: Int,
    @JsName("month") val month: Int,
    @JsName("day") val day: Int
): ComponentValue {
    companion object {
        /**
         * Date RegEx
         */
        private val DateReEx = "^(\\d{4})-(\\d{2})-(\\d{2})$".toRegex()

        /**
         * Parses from component value
         * @param componentValue Component value in a form of 'YYYY-MM-DD`
         */
        fun parse(componentValue: String): LocalDateFields {
            val match = DateReEx.matchEntire(componentValue) ?: throw IllegalArgumentException("Not a valid local date")
            return match.groupValues.run { LocalDateFields(get(1).toInt(), get(2).toInt(), get(3).toInt()) }
        }
    }

    /**
     * Returns component representation 'YYYY-MM-DD`
     */
    override fun toComponentValue(): String = "$year-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}"
}
