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

package com.motorro.keeplink.uri.data

import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

/**
 * Path/Search/Hash components
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
abstract class PshComponents : PathComponent, SearchComponent, HashComponent {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is PshComponents) return false

        if (!getPath().contentEquals(other.getPath())) return false
        if (!getSearch().contentEquals(other.getSearch())) return false
        if (getHash() != other.getHash()) return false

        return true
    }

    override fun hashCode(): Int {
        var result = getPath().contentHashCode()
        result = 31 * result + getSearch().contentHashCode()
        result = 31 * result + getHash().hashCode()
        return result
    }

    override fun toString(): String {
        return "Action(path=${getPath().contentToString()}, search=${getSearch().contentToString()}, hash=${getHash()}))"
    }
}

/**
 * Data storage for deserializer
 */
@JsExport
@OptIn(ExperimentalJsExport::class)
class PshComponentsImpl(
    var mPath: Array<String>? = null,
    var mSearch: Array<Param>? = null,
    var mHash: String? = null
): PshComponents() {
    override fun getPath(): Array<String> = mPath ?: emptyArray()
    override fun getSearch(): Array<Param> = mSearch ?: emptyArray()
    override fun getHash(): String = mHash ?: ""
    override fun toString(): String = "PshComponentsImpl(mPath=${mPath?.contentToString()}, mSearch=${mSearch?.contentToString()}, mHash=$mHash)"
}
