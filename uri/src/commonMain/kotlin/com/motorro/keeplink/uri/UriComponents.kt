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

package com.motorro.keeplink.uri

import com.motorro.keeplink.uri.data.Param
import com.motorro.keeplink.uri.data.PshComponents

/**
 * Cross-platform URI representation
 * @property scheme URI scheme. May be `http(s)` or a custom application scheme
 * @property host Host part of URI including port value. Like `motorro.com` or `motorro.com:123`
 * @param path Path component - where to go
 * @param search Search component - what to do
 * @param hash Hash component - what to display
 * @see PshComponents
 */
class UriComponents(
    val scheme: String,
    val host: String,
    private val path: Array<String>,
    private val search: Array<Param>,
    private val hash: String,
) : PshComponents() {
    /**
     * Constructor with [PshComponents]
     * @param scheme URI scheme. May be `http(s)` or a custom application scheme
     * @param host Host part of URI including port value. Like `motorro.com` or `motorro.com:123`
     * @param actionComponents Action components
     */
    constructor(scheme: String, host: String, actionComponents: PshComponents): this(
        scheme,
        host,
        actionComponents.getPath(),
        actionComponents.getSearch(),
        actionComponents.getHash()
    )

    /**
     * Path component - where to go.
     * Represents a path to activity in an application: screen, action, etc.
     * Parameters exactly identifying the activity may be represented as path.
     *
     * For example, the following link opens chat with ID 123:
     *
     * `/open/chat/123`
     */
    override fun getPath(): Array<String> = path

    /**
     * Search component - what to do.
     * Represents parameters to activity specified by [path] which instruct activity what to do.
     *
     * For example, the following link opens search activity and instructs it to search with specific parameters:
     *
     * `/open/search?type=CHARTER&from=MOSCOW&to=PARIS&date=2021-01-28`
     */
    override fun getSearch(): Array<Param> = search

    /**
     * Hash component - what to display.
     * Represents extra action to do in activity.
     *
     * For example, you may instruct your document activity to scroll to specified anchor:
     *
     * `/open/settings#background_location`
     */
    override fun getHash(): String = hash

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as UriComponents

        if (scheme != other.scheme) return false
        if (host != other.host) return false
        if (!getPath().contentEquals(other.getPath())) return false
        if (!getSearch().contentEquals(other.getSearch())) return false
        if (getHash() != other.getHash()) return false

        return true
    }

    override fun hashCode(): Int {
        var result = scheme.hashCode()
        result = 31 * result + host.hashCode()
        result = 31 * result + getPath().contentHashCode()
        result = 31 * result + getSearch().contentHashCode()
        result = 31 * result + getHash().hashCode()
        return result
    }
}