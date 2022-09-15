package com.motorro.keeplink.action

import com.motorro.keeplink.Action
import com.motorro.keeplink.action.data.LocalDateFields
import com.motorro.keeplink.action.data.TransportType
import com.motorro.keeplink.data.Param
import com.motorro.keeplink.data.PshComponents
import com.motorro.keeplink.data.of
import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
@Serializable
@OptIn(ExperimentalJsExport::class)
sealed class TestAction : Action() {
    /**
     * Invalid action - parse or build error
     */
    class Invalid private constructor(): TestAction() {
        internal companion object {
            /**
             * Instead of object due to JS doesn't see objects in sealed hierarchy
             */
            val INSTANCE = Invalid()
        }

        /**
         * True if link is valid
         */
        override val isValid: Boolean = false
    }

    /**
     * A valid but unknown action
     * May be used to represent arbitrary link that is not defined in this library
     * @param components Action components
     */
    class Unknown(private val components: PshComponents): TestAction() {
        override fun getPath(): Array<String> = components.getPath()
        override fun getSearch(): Array<Param> = components.getSearch()
        override fun getHash(): String = components.getHash()

        /**
         * True if link is valid
         */
        override val isValid: Boolean = false
    }

    /**
     * Root action. Use as a null-object or client-default action
     */
    class Root: TestAction() {
        internal companion object {
            // Trailing slash
            const val SEGMENT = ""
        }

        override fun getPath(): Array<String> = super.getPath() + SEGMENT
    }

    /**
     * Profile link
     *
     * `/profile
     *
     */
    class Profile : TestAction() {
        internal companion object {
            const val SEGMENT = "profile"
        }

        override fun getPath(): Array<String> = super.getPath() + SEGMENT
    }

    /**
     * Login actions
     *
     * `/login`
     *
     */
    sealed class Login : TestAction() {
        internal companion object {
            const val SEGMENT = "login"
        }

        /**
         * Path component
         */
        override fun getPath(): Array<String> = super.getPath() + SEGMENT

        /**
         * Magic-link login action
         *
         * `/login/magic/{token}`
         *
         * @property token Login token
         */
        class Magic(val token: String) : Login() {
            internal companion object {
                const val SEGMENT = "magic"
            }

            override fun getPath(): Array<String> = super.getPath() + SEGMENT + token
        }
    }

    /**
     * Travel search with custom data types:
     *
     * `/open/search?type={type}&from={from}&to={to}&date={date}`
     *
     * @property type Transport type to search
     * @property from Departure city
     * @property to Destination city
     * @property date Date to search flights (`YYYY-MM-DD`)
     */
    class Search(
        val type: TransportType,
        val from: String,
        val to: String,
        val date: LocalDateFields
    ) : TestAction() {
        /**
         * Flight search parser
         */
        internal companion object {
            const val SEGMENT = "search"
            const val PARAM_TYPE = "type"
            const val PARAM_FROM = "from"
            const val PARAM_TO = "to"
            const val PARAM_DATE = "date"
        }

        override fun getPath(): Array<String> = super.getPath() + SEGMENT

        /**
         * Search component
         */
        override fun getSearch(): Array<Param> = super.getSearch() + arrayOf(
            PARAM_TYPE of type.toComponentValue(),
            PARAM_FROM of from,
            PARAM_TO of to,
            PARAM_DATE of date.toComponentValue()
        )
    }
}