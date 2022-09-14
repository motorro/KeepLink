package com.motorro.data

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
