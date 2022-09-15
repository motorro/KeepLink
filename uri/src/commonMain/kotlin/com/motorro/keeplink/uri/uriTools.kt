package com.motorro.keeplink.uri

/**
 * Parses string URI to [UriComponents]
 * @receiver Source string
 * @return Parsed components
 */
expect fun String.toComponents(): UriComponents

/**
 * Builds string URI from [UriComponents]
 * @receiver Target components
 * @return Built URI
 */
expect fun UriComponents.build(): String
