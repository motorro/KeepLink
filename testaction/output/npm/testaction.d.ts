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

type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace com.motorro.keeplink.uri.data {
    interface ComponentValue {
        toComponentValue(): string;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace com.motorro.keeplink.uri.data {
    interface HashComponent {
        getHash(): string;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace com.motorro.keeplink.uri.data {
    class Param {
        constructor(name: string, value: string);
        get name(): string;
        get value(): string;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.motorro.keeplink.uri.data.Param> */;
        };
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.motorro.keeplink.uri.data.Param> */;
        component1(): string;
        component2(): string;
        copy(name?: string, value?: string): com.motorro.keeplink.uri.data.Param;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static Param_init_$Create$(seen1: number, name: Nullable<string>, value: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.motorro.keeplink.uri.data.Param;
    }
}
export namespace com.motorro.keeplink.uri.data {
    interface PathComponent {
        getPath(): Array<string>;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace com.motorro.keeplink.uri.data {
    abstract class PshComponents implements com.motorro.keeplink.uri.data.PathComponent, com.motorro.keeplink.uri.data.SearchComponent, com.motorro.keeplink.uri.data.HashComponent {
        constructor();
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        toString(): string;
        abstract getPath(): Array<string>;
        abstract getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        abstract getHash(): string;
        readonly __doNotUseIt: __doNotImplementIt;
    }
    class PshComponentsImpl extends com.motorro.keeplink.uri.data.PshComponents {
        constructor(mPath: Nullable<Array<string>>, mSearch: Nullable<Array<com.motorro.keeplink.uri.data.Param>>, mHash: Nullable<string>);
        get mPath(): Nullable<Array<string>>;
        set mPath(value: Nullable<Array<string>>);
        get mSearch(): Nullable<Array<com.motorro.keeplink.uri.data.Param>>;
        set mSearch(value: Nullable<Array<com.motorro.keeplink.uri.data.Param>>);
        get mHash(): Nullable<string>;
        set mHash(value: Nullable<string>);
        getPath(): Array<string>;
        getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        getHash(): string;
        toString(): string;
    }
}
export namespace com.motorro.keeplink.uri.data {
    interface SearchComponent {
        getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace com.motorro.keeplink.uri.data {
    class Utm implements com.motorro.keeplink.uri.data.SearchComponent {
        constructor(utmSource: string, utmMedium: Nullable<string>, utmCampaign: Nullable<string>, utmTerm: Nullable<string>, utmContent: Nullable<string>);
        get utmSource(): string;
        get utmMedium(): Nullable<string>;
        get utmCampaign(): Nullable<string>;
        get utmTerm(): Nullable<string>;
        get utmContent(): Nullable<string>;
        getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        medium(value: string): com.motorro.keeplink.uri.data.Utm;
        campaign(value: string): com.motorro.keeplink.uri.data.Utm;
        term(value: string): com.motorro.keeplink.uri.data.Utm;
        content(value: string): com.motorro.keeplink.uri.data.Utm;
        static get $serializer(): {
        } & any/* kotlinx.serialization.internal.GeneratedSerializer<com.motorro.keeplink.uri.data.Utm> */;
        component1(): string;
        component2(): Nullable<string>;
        component3(): Nullable<string>;
        component4(): Nullable<string>;
        component5(): Nullable<string>;
        copy(utmSource?: string, utmMedium?: Nullable<string>, utmCampaign?: Nullable<string>, utmTerm?: Nullable<string>, utmContent?: Nullable<string>): com.motorro.keeplink.uri.data.Utm;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static Utm_init_$Create$(seen1: number, utmSource: Nullable<string>, utmMedium: Nullable<string>, utmCampaign: Nullable<string>, utmTerm: Nullable<string>, utmContent: Nullable<string>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.motorro.keeplink.uri.data.Utm;
        readonly __doNotUseIt: __doNotImplementIt;
    }
    function utm(utmSource: string): com.motorro.keeplink.uri.data.Utm;
}
export namespace com.motorro.keeplink.deeplink {
    abstract class Action extends com.motorro.keeplink.uri.data.PshComponents {
        constructor();
        getPath(): Array<string>;
        getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        getHash(): string;
        get isValid(): boolean;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.motorro.keeplink.deeplink.Action> */;
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
        static Action_init_$Create$(seen1: number, isValid: boolean, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.motorro.keeplink.deeplink.Action;
    }
}
export namespace com.motorro.keeplink.deeplink {
    class DeepLink<A> extends com.motorro.keeplink.uri.data.PshComponents implements com.motorro.keeplink.deeplink.WithAction<A> {
        constructor(action: A, utm: com.motorro.keeplink.uri.data.Utm);
        get action(): A;
        get utm(): com.motorro.keeplink.uri.data.Utm;
        get isValid(): boolean;
        withUtm(utm: com.motorro.keeplink.uri.data.Utm): com.motorro.keeplink.deeplink.DeepLink<A>;
        getPath(): Array<string>;
        getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        getHash(): string;
        toString(): string;
        static get Companion(): {
            serializer<T0>(typeSerial0: any/* kotlinx.serialization.KSerializer<T0> */): any/* kotlinx.serialization.KSerializer<com.motorro.keeplink.deeplink.DeepLink<T0>> */;
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
        static DeepLink_init_$Create$<A extends com.motorro.keeplink.deeplink.Action>(seen1: number, action: Nullable<A>, utm: Nullable<com.motorro.keeplink.uri.data.Utm>, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.motorro.keeplink.deeplink.DeepLink<A>;
        readonly __doNotUseIt: __doNotImplementIt;
    }
    namespace DeepLink {
        class $serializer<A> /* implements kotlinx.serialization.internal.GeneratedSerializer<com.motorro.keeplink.deeplink.DeepLink<A>> */ {
            private constructor();
            static $serializer_init_$Create$<A>(typeSerial0: any/* kotlinx.serialization.KSerializer<A> */): com.motorro.keeplink.deeplink.DeepLink.$serializer<A>;
        }
    }
    function deepLink<A extends com.motorro.keeplink.deeplink.Action>(action: A): com.motorro.keeplink.deeplink.DeepLink<A>;
}
export namespace com.motorro.keeplink.deeplink {
    class DeepLinkSerializer<A> /* implements kotlinx.serialization.KSerializer<com.motorro.keeplink.deeplink.DeepLink<A>> */ {
        constructor(builder: com.motorro.keeplink.deeplink.LinkBuilder<A>, parser: com.motorro.keeplink.deeplink.LinkParser<A>);
    }
}
export namespace com.motorro.keeplink.deeplink {
    class LinkBuilder<A> {
        constructor(targetScheme: string, targetHost: string);
        build(link: com.motorro.keeplink.deeplink.DeepLink<A>): string;
    }
}
export namespace com.motorro.keeplink.deeplink {
    class LinkParser<A> {
        constructor(parser: any/* com.motorro.keeplink.deeplink.ActionParser<A> */, targetScheme: string, targetHost: string);
        parse(uri: string): Nullable<com.motorro.keeplink.deeplink.DeepLink<A>>;
    }
}
export namespace com.motorro.keeplink.deeplink {
    interface WithAction<A> {
        readonly action: A;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace com.motorro.keeplink.testaction {
    class TestAction extends com.motorro.keeplink.deeplink.Action {
        protected constructor();
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<com.motorro.keeplink.testaction.TestAction> */;
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
        static TestAction_init_$Create$(seen1: number, isValid: boolean, serializationConstructorMarker: any/* Nullable<kotlinx.serialization.internal.SerializationConstructorMarker> */): com.motorro.keeplink.testaction.TestAction;
    }
    namespace TestAction {
        class Invalid extends com.motorro.keeplink.testaction.TestAction {
            private constructor();
            get isValid(): boolean;
        }
        class Unknown extends com.motorro.keeplink.testaction.TestAction {
            constructor(components: com.motorro.keeplink.uri.data.PshComponents);
            getPath(): Array<string>;
            getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
            getHash(): string;
            get isValid(): boolean;
        }
        class Root extends com.motorro.keeplink.testaction.TestAction {
            constructor();
            getPath(): Array<string>;
        }
        class Profile extends com.motorro.keeplink.testaction.TestAction {
            constructor();
            getPath(): Array<string>;
        }
        class Login extends com.motorro.keeplink.testaction.TestAction {
            protected constructor();
            getPath(): Array<string>;
        }
        namespace Login {
            class Magic extends com.motorro.keeplink.testaction.TestAction.Login {
                constructor(token: string);
                get token(): string;
                getPath(): Array<string>;
            }
        }
        class Search extends com.motorro.keeplink.testaction.TestAction {
            constructor(type: com.motorro.keeplink.testaction.data.TransportType, from: string, to: string, date: com.motorro.keeplink.testaction.data.LocalDateFields);
            get type(): com.motorro.keeplink.testaction.data.TransportType;
            get from(): string;
            get to(): string;
            get date(): com.motorro.keeplink.testaction.data.LocalDateFields;
            getPath(): Array<string>;
            getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        }
    }
}
export namespace com.motorro.keeplink.testaction.data {
    class LocalDateFields implements com.motorro.keeplink.uri.data.ComponentValue {
        constructor(year: number, month: number, day: number);
        get year(): number;
        get month(): number;
        get day(): number;
        static get Companion(): {
            parse(componentValue: string): com.motorro.keeplink.testaction.data.LocalDateFields;
        };
        toComponentValue(): string;
        component1(): number;
        component2(): number;
        component3(): number;
        copy(year?: number, month?: number, day?: number): com.motorro.keeplink.testaction.data.LocalDateFields;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace com.motorro.keeplink.testaction.data {
    class TransportType implements com.motorro.keeplink.uri.data.ComponentValue {
        constructor(value: string);
        get value(): string;
        static get Companion(): {
            parse(componentValue: string): com.motorro.keeplink.testaction.data.TransportType;
        };
        toComponentValue(): string;
        component1(): string;
        copy(value?: string): com.motorro.keeplink.testaction.data.TransportType;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseIt: __doNotImplementIt;
    }
    const TransportTypes: {
        get FLIGHT(): com.motorro.keeplink.testaction.data.TransportType;
        get TRAIN(): com.motorro.keeplink.testaction.data.TransportType;
    };
}
export namespace com.motorro.keeplink.testaction {
    const LinkParsers: {
        get MOTORRO(): com.motorro.keeplink.deeplink.LinkParser<com.motorro.keeplink.testaction.TestAction>;
        get LOCALHOST_8080(): com.motorro.keeplink.deeplink.LinkParser<com.motorro.keeplink.testaction.TestAction>;
    };
    const LinkBuilders: {
        get MOTORRO(): com.motorro.keeplink.deeplink.LinkBuilder<com.motorro.keeplink.testaction.TestAction>;
        get LOCALHOST_8080(): com.motorro.keeplink.deeplink.LinkBuilder<com.motorro.keeplink.testaction.TestAction>;
    };
}
export namespace com.motorro.keeplink.testaction.data {
    function fromDate(date: Date): com.motorro.keeplink.testaction.data.LocalDateFields;
    function toDate(localDateFields: com.motorro.keeplink.testaction.data.LocalDateFields): Date;
}
export namespace com.motorro.keeplink.testaction {
    function magicLink(token: string): com.motorro.keeplink.testaction.TestAction;
    function search(type: com.motorro.keeplink.testaction.data.TransportType, from: string, to: string, date: Date): com.motorro.keeplink.testaction.TestAction;
}