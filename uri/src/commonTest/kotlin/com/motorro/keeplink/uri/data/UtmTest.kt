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

import com.motorro.keeplink.mocks.EMPTY_UTM_COMPONENTS
import com.motorro.keeplink.mocks.UTM
import com.motorro.keeplink.mocks.UTM_COMPONENTS
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class UtmTest {
    @Test
    fun createsUtmFromComponents() {
        assertEquals(UTM, parseUtm(UTM_COMPONENTS))
    }

    @Test
    fun utmExportsComponents() {
        assertTrue {
            UTM_COMPONENTS.getSearch().contentEquals(UTM.getSearch())
        }
    }

    @Test
    fun returnsEmptyComponentsForEmptyUtm() {
        assertTrue { EMPTY_UTM_COMPONENTS.getSearch().isEmpty() }
    }
}