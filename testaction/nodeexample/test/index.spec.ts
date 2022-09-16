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

import * as DeepLinkLibrary from "testaction"
import {buildMagicLink, buildProfileLink, buildSearchLink, parseLink} from "..";
import {it} from "mocha";
import TestAction = DeepLinkLibrary.com.motorro.keeplink.testaction.TestAction;
import TransportTypes = DeepLinkLibrary.com.motorro.keeplink.testaction.data.TransportTypes;

describe("Deep-link", function () {
    describe ("Client", function () {
        it ("should parse valid magic link", function () {
            const link = "motorro:/login/magic/123?utm_source=test";
            const parsedLink = parseLink(link);

            parsedLink.action.should.be.instanceOf(TestAction.Login.Magic);
            (parsedLink.action as TestAction.Login.Magic).token.should.equal("123");
            parsedLink.utm.utmSource.should.equal("test");
        });

        it ("should parse valid search page link", function () {
            const link = "motorro:/search?type=train&from=moscow&to=paris&date=2022-09-16";
            const parsedLink = parseLink(link);

            parsedLink.action.should.be.instanceOf(TestAction.Search);

            const search = parsedLink.action as TestAction.Search;

            search.type.should.equal(TransportTypes.TRAIN);
            search.from.should.equal("moscow");
            search.to.should.equal("paris");
            search.date.year.should.equal(2022);
            search.date.month.should.equal(9);
            search.date.day.should.equal(16);
        });
    });

    describe("Server", function () {
        it ("should build profile link", function () {
            buildProfileLink().should.equal("motorro:/profile")
        });
        it ("should build magic link", function () {
            buildMagicLink("123").should.equal("motorro:/login/magic/123")
        });
        it ("should build search link", function () {
            buildSearchLink().should.equal("motorro:/search?type=TRAIN&from=MOSCOW&to=PARIS&date=2022-09-16&utm_source=test")
        });
    })
});
