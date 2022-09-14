package com.motorro.keeplink

/**
 * Parses string URI to [UriComponents]
 * @receiver Source string
 * @return Parsed components
 */
internal expect fun String.toComponents(): UriComponents

/**
 * Builds string URI from [UriComponents]
 * @receiver Target components
 * @return Built URI
 */
internal expect fun UriComponents.build(): String
