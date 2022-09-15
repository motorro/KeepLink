package com.motorro.keeplink.action

import com.motorro.keeplink.SEARCH_COMPONENTS
import com.motorro.keeplink.action.data.LocalDateFields
import com.motorro.keeplink.action.data.TransportTypes
import com.motorro.keeplink.data.toMap
import com.motorro.keeplink.pshComponentsOf
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue

class SearchActionTest {
    @Test
    fun parsesSearchAction() {
        val components = SEARCH_COMPONENTS
        assertEquals(
            TestAction.Search(TransportTypes.FLIGHT, "MOSCOW", "PARIS", LocalDateFields(2021, 1, 27)),
            SearchParser.parse(components, 0)
        )
    }

    @Test
    fun returnsNullIfTypeNotSet() {
        val components = pshComponentsOf(
            listOf("search"),
            mapOf(
                "from" to "MOSCOW",
                "to" to "PARIS",
                "date" to "2021-01-27"
            )
        )
        assertNull(SearchParser.parse(components, 0))
    }

    @Test
    fun returnsNullIfTypeIsInvalid() {
        val components = pshComponentsOf(
            listOf("search"),
            mapOf(
                "type" to "INVALID",
                "from" to "MOSCOW",
                "to" to "PARIS",
                "date" to "2021-01-27"
            )
        )
        assertNull(SearchParser.parse(components, 0))
    }

    @Test
    fun returnsNullIfFromNotSet() {
        val components = pshComponentsOf(
            listOf("search"),
            mapOf(
                "type" to "FLIGHT",
                "to" to "PARIS",
                "date" to "2021-01-27"
            )
        )
        assertNull(SearchParser.parse(components, 0))
    }

    @Test
    fun returnsNullIfToNotSet() {
        val components = pshComponentsOf(
            listOf("search"),
            mapOf(
                "type" to "FLIGHT",
                "from" to "MOSCOW",
                "date" to "2021-01-27"
            )
        )
        assertNull(SearchParser.parse(components, 0))
    }

    @Test
    fun returnsNullIfDateNotSet() {
        val components = pshComponentsOf(
            listOf("search"),
            mapOf(
                "type" to "FLIGHT",
                "from" to "MOSCOW",
                "to" to "PARIS"
            )
        )
        assertNull(SearchParser.parse(components, 0))
    }

    @Test
    fun returnsNullIfDateIsInvalid() {
        val components = pshComponentsOf(
            listOf("search"),
            mapOf(
                "type" to "FLIGHT",
                "from" to "MOSCOW",
                "to" to "PARIS",
                "date" to "INVALID"
            )
        )
        assertNull(SearchParser.parse(components, 0))
    }

    @Test
    fun searchExportsComponents() {
        val page = TestAction.Search(TransportTypes.FLIGHT, "MOSCOW", "PARIS", LocalDateFields(2021, 1, 27))
        pshComponentsOf(
            listOf("search"),
            mapOf(
                "type" to "FLIGHT",
                "from" to "MOSCOW",
                "to" to "PARIS",
                "date" to "2021-01-27"
            )
        )

        assertEquals(
            listOf("search"),
            page.getPath().toList()
        )
        assertEquals(
            mapOf(
                "type" to "FLIGHT",
                "from" to "MOSCOW",
                "to" to "PARIS",
                "date" to "2021-01-27"
            ),
            page.getSearch().toMap()
        )
        assertTrue { page.getHash().isEmpty() }
    }
}