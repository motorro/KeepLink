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

package com.motorro.keeplink.mocks

import com.motorro.keeplink.uri.data.Utm
import com.motorro.keeplink.uri.pshComponentsOf
import com.motorro.keeplink.uri.searchComponentOf

val UNKNOWN_COMPONENTS = pshComponentsOf(
    listOf("unknown", "path"),
    mapOf(
        "unknown" to "param"
    ),
    "unknownHash"
)

const val UNKNOWN_JSON = """{"path":["unknown","path"],"search":[{"name":"unknown","value":"param"}],"hash":"unknownHash"}"""

val UTM_COMPONENTS = searchComponentOf(
    "utm_source" to "motorro",
    "utm_medium" to "cpc",
    "utm_campaign" to "spring_sale",
    "utm_term" to "deals",
    "utm_content" to "banner"
)

val UTM = Utm(
    utmSource = "motorro",
    utmMedium = "cpc",
    utmCampaign = "spring_sale",
    utmTerm = "deals",
    utmContent = "banner"
)

const val UTM_SEARCH = "utm_source=motorro&utm_medium=cpc&utm_campaign=spring_sale&utm_term=deals&utm_content=banner"