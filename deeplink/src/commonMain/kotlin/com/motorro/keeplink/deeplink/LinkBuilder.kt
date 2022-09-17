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

package com.motorro.keeplink.deeplink

import com.motorro.keeplink.uri.UriComponents
import com.motorro.keeplink.uri.build
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Builds a deep-link to string
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
interface LinkBuilder<in A: Action> {
    /**
     * Builds a deep-link
     * @param link Path/search/hash components to embed
     */
    @JsName("build")
    fun build(link: DeepLink<A>): String
}

/**
 * Builds deep-link with predefined `scheme` and `host` components
 * @param targetScheme Intended scheme component
 * @param targetHost Intended host component
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
@Suppress("NON_EXPORTABLE_TYPE")
open class SchemeHostLinkBuilder<in A : Action>(
    private val targetScheme: String,
    private val targetHost: String
) : LinkBuilder<A> {
    /**
     * Builds a deep-link
     * @param link Path/search/hash components to embed
     */
    override fun build(link: DeepLink<A>): String = UriComponents(targetScheme, targetHost, link).build()
}
