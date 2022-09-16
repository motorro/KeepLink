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

package com.motorro.keeplink.testaction

import com.motorro.keeplink.testaction.data.TransportType
import com.motorro.keeplink.testaction.data.fromDate
import kotlin.js.Date

/**
 * Creates magic-link action
 * @param token Login token
 */
@JsExport
@JsName("magicLink")
fun magicLink(token: String): TestAction = TestAction.Login.Magic(token)

/**
 * Creates search action
 * @param type Transport type
 * @param from Where from
 * @param to Where to
 * @param date When to go
 */
@JsExport
@JsName("search")
fun search(type: TransportType, from: String, to: String, date: Date): TestAction = TestAction.Search(
    type,
    from,
    to,
    fromDate(date)
)