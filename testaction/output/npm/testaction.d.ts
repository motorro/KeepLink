type Nullable<T> = T | null | undefined
export declare namespace com.motorro.keeplink.uri.data {
    interface ComponentValue {
        toComponentValue(): string;
        readonly __doNotUseOrImplementIt: {
            readonly "com.motorro.keeplink.uri.data.ComponentValue": unique symbol;
        };
    }
}
export declare namespace com.motorro.keeplink.uri.data {
    interface HashComponent {
        getHash(): string;
        readonly __doNotUseOrImplementIt: {
            readonly "com.motorro.keeplink.uri.data.HashComponent": unique symbol;
        };
    }
}
export declare namespace com.motorro.keeplink.uri.data {
    class Param {
        constructor(name: string, value: string);
        get name(): string;
        get value(): string;
        copy(name?: string, value?: string): com.motorro.keeplink.uri.data.Param;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace com.motorro.keeplink.uri.data {
    interface PathComponent {
        getPath(): Array<string>;
        readonly __doNotUseOrImplementIt: {
            readonly "com.motorro.keeplink.uri.data.PathComponent": unique symbol;
        };
    }
}
export declare namespace com.motorro.keeplink.uri.data {
    abstract class PshComponents implements com.motorro.keeplink.uri.data.PathComponent, com.motorro.keeplink.uri.data.SearchComponent, com.motorro.keeplink.uri.data.HashComponent {
        constructor();
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        toString(): string;
        abstract getPath(): Array<string>;
        abstract getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        abstract getHash(): string;
        readonly __doNotUseOrImplementIt: com.motorro.keeplink.uri.data.PathComponent["__doNotUseOrImplementIt"] & com.motorro.keeplink.uri.data.SearchComponent["__doNotUseOrImplementIt"] & com.motorro.keeplink.uri.data.HashComponent["__doNotUseOrImplementIt"];
    }
    class PshComponentsImpl extends com.motorro.keeplink.uri.data.PshComponents {
        constructor(mPath?: Nullable<Array<string>>, mSearch?: Nullable<Array<com.motorro.keeplink.uri.data.Param>>, mHash?: Nullable<string>);
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
export declare namespace com.motorro.keeplink.uri.data {
    interface SearchComponent {
        getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        readonly __doNotUseOrImplementIt: {
            readonly "com.motorro.keeplink.uri.data.SearchComponent": unique symbol;
        };
    }
}
export declare namespace com.motorro.keeplink.uri.data {
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
        copy(utmSource?: string, utmMedium?: Nullable<string>, utmCampaign?: Nullable<string>, utmTerm?: Nullable<string>, utmContent?: Nullable<string>): com.motorro.keeplink.uri.data.Utm;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: com.motorro.keeplink.uri.data.SearchComponent["__doNotUseOrImplementIt"];
    }
    function utm(utmSource: string): com.motorro.keeplink.uri.data.Utm;
}
export declare namespace com.motorro.keeplink.deeplink {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    abstract class Action extends com.motorro.keeplink.uri.data.PshComponents {
        constructor();
        getPath(): Array<string>;
        getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        getHash(): string;
        get isValid(): boolean;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace com.motorro.keeplink.deeplink {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class DeepLink<A extends com.motorro.keeplink.deeplink.Action> extends com.motorro.keeplink.uri.data.PshComponents implements com.motorro.keeplink.deeplink.WithAction<A> {
        constructor(action: A, utm: com.motorro.keeplink.uri.data.Utm);
        get action(): A;
        get utm(): com.motorro.keeplink.uri.data.Utm;
        get isValid(): boolean;
        withUtm(utm: com.motorro.keeplink.uri.data.Utm): com.motorro.keeplink.deeplink.DeepLink<A>;
        getPath(): Array<string>;
        getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        getHash(): string;
        toString(): string;
        readonly __doNotUseOrImplementIt: com.motorro.keeplink.deeplink.WithAction<A>["__doNotUseOrImplementIt"] & com.motorro.keeplink.uri.data.PshComponents["__doNotUseOrImplementIt"];
        static get Companion(): {
            get $cachedDescriptor(): any/* kotlinx.serialization.descriptors.SerialDescriptor */;
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    function deepLink<A extends com.motorro.keeplink.deeplink.Action>(action: A): com.motorro.keeplink.deeplink.DeepLink<A>;
}
export declare namespace com.motorro.keeplink.deeplink {
    class DeepLinkSerializer<A extends com.motorro.keeplink.deeplink.Action> /* implements kotlinx.serialization.KSerializer<com.motorro.keeplink.deeplink.DeepLink<A>> */ {
        constructor(builder: com.motorro.keeplink.deeplink.LinkBuilder<A>, parser: com.motorro.keeplink.deeplink.LinkParser<A>);
    }
}
export declare namespace com.motorro.keeplink.deeplink {
    interface LinkBuilder<A extends com.motorro.keeplink.deeplink.Action> {
        build(link: com.motorro.keeplink.deeplink.DeepLink<A>): string;
        readonly __doNotUseOrImplementIt: {
            readonly "com.motorro.keeplink.deeplink.LinkBuilder": unique symbol;
        };
    }
    class SchemeHostLinkBuilder<A extends com.motorro.keeplink.deeplink.Action> implements com.motorro.keeplink.deeplink.LinkBuilder<A> {
        constructor(targetScheme: string, targetHost: string);
        build(link: com.motorro.keeplink.deeplink.DeepLink<A>): string;
        readonly __doNotUseOrImplementIt: com.motorro.keeplink.deeplink.LinkBuilder<A>["__doNotUseOrImplementIt"];
    }
}
export declare namespace com.motorro.keeplink.deeplink {
    interface LinkParser<A extends com.motorro.keeplink.deeplink.Action> {
        parse(uri: string): Nullable<com.motorro.keeplink.deeplink.DeepLink<A>>;
        readonly __doNotUseOrImplementIt: {
            readonly "com.motorro.keeplink.deeplink.LinkParser": unique symbol;
        };
    }
    class SchemeHostLinkParser<A extends com.motorro.keeplink.deeplink.Action> implements com.motorro.keeplink.deeplink.LinkParser<A> {
        constructor(parser: any/* com.motorro.keeplink.deeplink.ActionParser<A> */, targetScheme: string, targetHost: string);
        parse(uri: string): Nullable<com.motorro.keeplink.deeplink.DeepLink<A>>;
        readonly __doNotUseOrImplementIt: com.motorro.keeplink.deeplink.LinkParser<A>["__doNotUseOrImplementIt"];
    }
}
export declare namespace com.motorro.keeplink.deeplink {
    interface WithAction<A extends com.motorro.keeplink.deeplink.Action> {
        readonly action: A;
        readonly __doNotUseOrImplementIt: {
            readonly "com.motorro.keeplink.deeplink.WithAction": unique symbol;
        };
    }
}
export declare namespace com.motorro.keeplink.testaction {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    abstract class TestAction extends com.motorro.keeplink.deeplink.Action {
        protected constructor();
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    namespace TestAction {
        /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
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
        /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
        class Root extends com.motorro.keeplink.testaction.TestAction {
            constructor();
            getPath(): Array<string>;
        }
        /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
        class Profile extends com.motorro.keeplink.testaction.TestAction {
            constructor();
            getPath(): Array<string>;
        }
        /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
        abstract class Login extends com.motorro.keeplink.testaction.TestAction {
            protected constructor();
            getPath(): Array<string>;
        }
        namespace Login {
            /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
            class Magic extends com.motorro.keeplink.testaction.TestAction.Login {
                constructor(token: string);
                get token(): string;
                getPath(): Array<string>;
            }
        }
        /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
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
export declare namespace com.motorro.keeplink.testaction.data {
    class LocalDateFields implements com.motorro.keeplink.uri.data.ComponentValue {
        constructor(year: number, month: number, day: number);
        get year(): number;
        get month(): number;
        get day(): number;
        toComponentValue(): string;
        copy(year?: number, month?: number, day?: number): com.motorro.keeplink.testaction.data.LocalDateFields;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: com.motorro.keeplink.uri.data.ComponentValue["__doNotUseOrImplementIt"];
        static get Companion(): {
            parse(componentValue: string): com.motorro.keeplink.testaction.data.LocalDateFields;
        };
    }
}
export declare namespace com.motorro.keeplink.testaction.data {
    class TransportType implements com.motorro.keeplink.uri.data.ComponentValue {
        constructor(value: string);
        get value(): string;
        toComponentValue(): string;
        copy(value?: string): com.motorro.keeplink.testaction.data.TransportType;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: com.motorro.keeplink.uri.data.ComponentValue["__doNotUseOrImplementIt"];
        static get Companion(): {
            parse(componentValue: string): com.motorro.keeplink.testaction.data.TransportType;
        };
    }
    const TransportTypes: {
        get FLIGHT(): com.motorro.keeplink.testaction.data.TransportType;
        get TRAIN(): com.motorro.keeplink.testaction.data.TransportType;
    };
}
export declare namespace com.motorro.keeplink.testaction {
    const LinkParsers: {
        get MOTORRO(): com.motorro.keeplink.deeplink.LinkParser<com.motorro.keeplink.testaction.TestAction>;
        get LOCALHOST_8080(): com.motorro.keeplink.deeplink.LinkParser<com.motorro.keeplink.testaction.TestAction>;
    };
    const LinkBuilders: {
        get MOTORRO(): com.motorro.keeplink.deeplink.LinkBuilder<com.motorro.keeplink.testaction.TestAction>;
        get LOCALHOST_8080(): com.motorro.keeplink.deeplink.LinkBuilder<com.motorro.keeplink.testaction.TestAction>;
    };
}
export declare namespace com.motorro.keeplink.testaction.data {
    function fromDate(date: Date): com.motorro.keeplink.testaction.data.LocalDateFields;
    function toDate(localDateFields: com.motorro.keeplink.testaction.data.LocalDateFields): Date;
}
export declare namespace com.motorro.keeplink.testaction {
    function magicLink(token: string): com.motorro.keeplink.testaction.TestAction;
    function search(type: com.motorro.keeplink.testaction.data.TransportType, from: string, to: string, date: Date): com.motorro.keeplink.testaction.TestAction;
}