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
import {com} from "testaction"
import {assertNonNull} from "./NonNullable";
import TestAction = DeepLinkLibrary.com.motorro.keeplink.testaction.TestAction;
import DeepLink = DeepLinkLibrary.com.motorro.keeplink.deeplink.DeepLink;
import LinkParsers = DeepLinkLibrary.com.motorro.keeplink.testaction.LinkParsers;
import LinkBuilders = DeepLinkLibrary.com.motorro.keeplink.testaction.LinkBuilders;
import TransportTypes = DeepLinkLibrary.com.motorro.keeplink.testaction.data.TransportTypes;
import deepLink = DeepLinkLibrary.com.motorro.keeplink.deeplink.deepLink;
import utm = DeepLinkLibrary.com.motorro.keeplink.uri.data.utm;
import magicLink = com.motorro.keeplink.testaction.magicLink;
import search = com.motorro.keeplink.testaction.search;

/**
 * Link scheme parser to use
 */
const parser = LinkParsers.MOTORRO;

/**
 * Link scheme builder to use
 */
const builder = LinkBuilders.MOTORRO;

/**
 * Link parse example (client)
 * @param uri
 */
export function parseLink(uri: string): DeepLink<TestAction> {
    const link = parser.parse(uri);

    assertNonNull(link);

    return link;
}

/**
 * Profile link build example (server)
 * Uses constructor
 */
export function buildProfileLink(): string {
    const action = new TestAction.Profile();
    const link = deepLink(action);
    return builder.build(link);
}

/**
 * Magic link build example (server)
 * Uses export alias
 * @param token
 */
export function buildMagicLink(token: string): string {
    const action = magicLink(token);
    const link = deepLink(action);
    return builder.build(link);
}

/**
 * Search link build example (server)
 * Uses export alias
 */
export function buildSearchLink(): string {
    const action = search(
        TransportTypes.TRAIN,
        "MOSCOW",
        "PARIS",
        new Date(2022, 8, 16)
    );
    const link = deepLink(action).withUtm(utm("test"))
    return builder.build(link)
}
