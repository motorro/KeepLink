package com.motorro.keeplink

import com.motorro.keeplink.action.TestAction
import com.motorro.keeplink.mocks.UNKNOWN_COMPONENTS
import com.motorro.keeplink.mocks.UTM
import com.motorro.keeplink.uri.data.toMap
import kotlin.test.Test
import kotlin.test.assertEquals

class DeepLinkTest {
    @Test
    fun exportsComponents() {
        val action = TestAction.Unknown(UNKNOWN_COMPONENTS)
        val utm = UTM
        val link = DeepLink(action, utm)
        assertEquals(
            listOf("unknown", "path"),
            link.getPath().toList()
        )
        assertEquals(
            mapOf(
                "unknown" to "param",
                "utm_source" to "motorro",
                "utm_medium" to "cpc",
                "utm_campaign" to "spring_sale",
                "utm_term" to "deals",
                "utm_content" to "banner"
            ),
            link.getSearch().toMap()
        )
        assertEquals(
            "unknownHash",
            link.getHash()
        )
    }
}