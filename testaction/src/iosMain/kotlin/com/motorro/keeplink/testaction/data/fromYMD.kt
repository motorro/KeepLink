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

package com.motorro.keeplink.testaction.data

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