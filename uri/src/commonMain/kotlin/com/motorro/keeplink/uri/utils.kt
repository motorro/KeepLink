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
import com.motorro.keeplink.uri.data.SearchComponent
import com.motorro.keeplink.uri.data.toParams

/**
 * Creates search components
 */
fun searchComponentOf(search: Map<String, String>): SearchComponent = SearchComponent { search.toParams() }

/**
 * Creates search components
 */
fun searchComponentOf(vararg search: Pair<String, String>): SearchComponent = SearchComponent { mapOf(*search).toParams() }

/**
 * Creates PSH components
 */
fun pshComponentsOf(
    path: List<String>,
    search: Map<String, String> = emptyMap(),
    hash: String = ""
): PshComponents = object : PshComponents() {
    override fun getPath(): Array<String> = path.toTypedArray()
    override fun getSearch(): Array<Param> = search.toParams()
    override fun getHash(): String = hash
}

/**
 * Creates PSH components
 */
fun pshComponentsOf(
    path: List<String>,
    search: List<Param>,
    hash: String
): PshComponents = object : PshComponents() {
    override fun getPath(): Array<String> = path.toTypedArray()
    override fun getSearch(): Array<Param> = search.toTypedArray()
    override fun getHash(): String = hash
}

/**
 * Creates URI components
 */
fun uriComponentsOf(
    scheme: String,
    host: String,
    path: List<String>,
    search: Map<String, String> = emptyMap(),
    hash: String = ""
): UriComponents = UriComponents(
    scheme = scheme,
    host = host,
    path = path.toTypedArray(),
    search = search.toParams(),
    hash = hash
)