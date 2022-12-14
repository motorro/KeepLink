/*
 * Copyright 2022 Nikolai Kotchetkov.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *    http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

@file:JsExport

package com.motorro.keeplink.testaction.data

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
