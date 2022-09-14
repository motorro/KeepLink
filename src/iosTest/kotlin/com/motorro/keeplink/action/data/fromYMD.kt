package com.motorro.keeplink.action.data

/**
 * Example to check iOS tests
 * Creates LocalDateFields
 * See JVM/JS sources to build fields from iOS date
 */
fun fromYMD(year: Int, month: Int, day: Int): LocalDateFields = LocalDateFields(
    year = year,
    month = month,
    day = day
)