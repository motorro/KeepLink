package com.motorro.keeplink.uri.data

import com.motorro.keeplink.uri.data.Utm.Companion.UTM_CAMPAIGN
import com.motorro.keeplink.uri.data.Utm.Companion.UTM_CONTENT
import com.motorro.keeplink.uri.data.Utm.Companion.UTM_MEDIUM
import com.motorro.keeplink.uri.data.Utm.Companion.UTM_SOURCE
import com.motorro.keeplink.uri.data.Utm.Companion.UTM_TERM
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * (Urchin Tracking Module params)[https://en.wikipedia.org/wiki/UTM_parameters]
 * @property utmSource `utm_source` value (required)
 * @property utmMedium `utm_medium` value
 * @property utmCampaign `utm_campaign` value
 * @property utmTerm `utm_term` value
 * @property utmContent `utm_content` value
 */
@JsExport
@Serializable
@OptIn(ExperimentalJsExport::class)
data class Utm(
    @SerialName(UTM_SOURCE) val utmSource: String,
    @SerialName(UTM_MEDIUM) val utmMedium: String?,
    @SerialName(UTM_CAMPAIGN) val utmCampaign: String?,
    @SerialName(UTM_TERM) val utmTerm: String?,
    @SerialName(UTM_CONTENT) val utmContent: String?
): SearchComponent {
    internal companion object {
        const val UTM_SOURCE = "utm_source"
        const val UTM_MEDIUM = "utm_medium"
        const val UTM_CAMPAIGN = "utm_campaign"
        const val UTM_TERM = "utm_term"
        const val UTM_CONTENT = "utm_content"
    }

    /**
     * URI search component
     *
     * `/open/search?type=CHARTER&from=MOSCOW&to=PARIS&date=2021-01-28`
     */
    override fun getSearch(): Array<Param> = mutableListOf(UTM_SOURCE of utmSource).apply {
        utmMedium?.let { add(UTM_MEDIUM of it) }
        utmCampaign?.let { add(UTM_CAMPAIGN of it) }
        utmTerm?.let { add(UTM_TERM of it) }
        utmContent?.let { add(UTM_CONTENT of it) }
    }.toTypedArray()

    /**
     * Adds `utm_medium` value
     */
    @JsName("medium")
    fun medium(value: String): Utm = copy(utmMedium = value)

    /**
     * Adds `utm_campaign` value
     */
    @JsName("campaign")
    fun campaign(value: String): Utm = copy(utmCampaign = value)

    /**
     * Adds `utm_term` value
     */
    @JsName("term")
    fun term(value: String): Utm = copy(utmTerm = value)

    /**
     * Adds `utm_content` value
     */
    @JsName("content")
    fun content(value: String): Utm = copy(utmContent = value)
}

/**
 * Creates UTM parameters
 * @param utmSource `utm_source` value (required)
 */
@JsExport
@JsName("utm")
@OptIn(ExperimentalJsExport::class)
fun utm(utmSource: String) = Utm(
    utmSource = utmSource,
    utmMedium = null,
    utmCampaign = null,
    utmTerm = null,
    utmContent = null
)

/**
 * Gets [Utm] from search component
 * @param searchComponent Search component of URI
 */
fun parseUtm(searchComponent: SearchComponent): Utm = with(searchComponent.getSearch()) {
    Utm(
        utmSource = getValue(UTM_SOURCE) ?: "",
        utmMedium = getValue(UTM_MEDIUM),
        utmCampaign = getValue(UTM_CAMPAIGN),
        utmTerm = getValue(UTM_TERM),
        utmContent = getValue(UTM_CONTENT)
    )
}

