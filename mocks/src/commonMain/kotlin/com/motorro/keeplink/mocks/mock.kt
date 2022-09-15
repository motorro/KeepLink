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