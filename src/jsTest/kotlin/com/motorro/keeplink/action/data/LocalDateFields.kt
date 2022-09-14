@file:JsExport

package com.motorro.keeplink.action.data

import kotlin.js.Date

/**
 * Creates [LocalDateFields] from Date object
 */
fun fromDate(date: Date): LocalDateFields = LocalDateFields(
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate()
)

/**
 * Export to JS Date
 */
fun toDate(localDateFields: LocalDateFields): Date =
    Date(localDateFields.year, localDateFields.month - 1, localDateFields.day)
