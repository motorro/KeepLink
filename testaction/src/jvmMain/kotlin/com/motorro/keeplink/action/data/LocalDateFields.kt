package com.motorro.keeplink.action.data

import com.motorro.keeplink.testaction.data.LocalDateFields
import java.time.LocalDate

/**
 * Creates [LocalDateFields] from LocalDate object
 */
fun fromLocalDate(date: LocalDate): LocalDateFields = LocalDateFields(
    year = date.year,
    month = date.monthValue,
    day = date.dayOfMonth
)

/**
 * Export to LocalDate
 */
fun LocalDateFields.toLocalDate(): LocalDate = LocalDate.of(year, month, day)

