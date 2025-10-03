type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
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
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Param.$metadata$ {
        const constructor: abstract new () => Param;
    }
    namespace Param {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                private constructor();
            }
        }
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
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace PshComponents.$metadata$ {
        const constructor: abstract new () => PshComponents;
    }
    class PshComponentsImpl extends com.motorro.keeplink.uri.data.PshComponents.$metadata$.constructor {
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
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace PshComponentsImpl.$metadata$ {
        const constructor: abstract new () => PshComponentsImpl;
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
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Utm.$metadata$ {
        const constructor: abstract new () => Utm;
    }
    function utm(utmSource: string): com.motorro.keeplink.uri.data.Utm;
}
export declare namespace com.motorro.keeplink.deeplink {
    abstract class Action extends com.motorro.keeplink.uri.data.PshComponents.$metadata$.constructor {
        constructor();
        getPath(): Array<string>;
        getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        getHash(): string;
        get isValid(): boolean;
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace Action.$metadata$ {
        const constructor: abstract new () => Action;
    }
    namespace Action {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor /* implements kotlinx.serialization.internal.SerializerFactory */ {
                private constructor();
            }
        }
    }
}
export declare namespace com.motorro.keeplink.deeplink {
    class DeepLink<A extends com.motorro.keeplink.deeplink.Action> extends com.motorro.keeplink.uri.data.PshComponents.$metadata$.constructor implements com.motorro.keeplink.deeplink.WithAction<A> {
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
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace DeepLink.$metadata$ {
        const constructor: abstract new <A extends com.motorro.keeplink.deeplink.Action>() => DeepLink<A>;
    }
    namespace DeepLink {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor /* implements kotlinx.serialization.internal.SerializerFactory */ {
                get $cachedDescriptor(): any/* kotlinx.serialization.descriptors.SerialDescriptor */;
                private constructor();
            }
        }
    }
    function deepLink<A extends com.motorro.keeplink.deeplink.Action>(action: A): com.motorro.keeplink.deeplink.DeepLink<A>;
}
export declare namespace com.motorro.keeplink.deeplink {
    class DeepLinkSerializer<A extends com.motorro.keeplink.deeplink.Action> /* implements kotlinx.serialization.KSerializer<com.motorro.keeplink.deeplink.DeepLink<A>> */ {
        constructor(builder: com.motorro.keeplink.deeplink.LinkBuilder<A>, parser: com.motorro.keeplink.deeplink.LinkParser<A>);
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace DeepLinkSerializer.$metadata$ {
        const constructor: abstract new <A extends com.motorro.keeplink.deeplink.Action>() => DeepLinkSerializer<A>;
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
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace SchemeHostLinkBuilder.$metadata$ {
        const constructor: abstract new <A extends com.motorro.keeplink.deeplink.Action>() => SchemeHostLinkBuilder<A>;
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
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace SchemeHostLinkParser.$metadata$ {
        const constructor: abstract new <A extends com.motorro.keeplink.deeplink.Action>() => SchemeHostLinkParser<A>;
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
    abstract class TestAction extends com.motorro.keeplink.deeplink.Action.$metadata$.constructor {
        protected constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace TestAction.$metadata$ {
        const constructor: abstract new () => TestAction;
    }
    namespace TestAction {
        class Invalid extends com.motorro.keeplink.testaction.TestAction.$metadata$.constructor {
            private constructor();
            get isValid(): boolean;
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Invalid.$metadata$ {
            const constructor: abstract new () => Invalid;
        }
        class Unknown extends com.motorro.keeplink.testaction.TestAction.$metadata$.constructor {
            constructor(components: com.motorro.keeplink.uri.data.PshComponents);
            getPath(): Array<string>;
            getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
            getHash(): string;
            get isValid(): boolean;
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Unknown.$metadata$ {
            const constructor: abstract new () => Unknown;
        }
        class Root extends com.motorro.keeplink.testaction.TestAction.$metadata$.constructor {
            constructor();
            getPath(): Array<string>;
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Root.$metadata$ {
            const constructor: abstract new () => Root;
        }
        class Profile extends com.motorro.keeplink.testaction.TestAction.$metadata$.constructor {
            constructor();
            getPath(): Array<string>;
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Profile.$metadata$ {
            const constructor: abstract new () => Profile;
        }
        abstract class Login extends com.motorro.keeplink.testaction.TestAction.$metadata$.constructor {
            protected constructor();
            getPath(): Array<string>;
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Login.$metadata$ {
            const constructor: abstract new () => Login;
        }
        namespace Login {
            class Magic extends com.motorro.keeplink.testaction.TestAction.Login.$metadata$.constructor {
                constructor(token: string);
                get token(): string;
                getPath(): Array<string>;
            }
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace Magic.$metadata$ {
                const constructor: abstract new () => Magic;
            }
        }
        class Search extends com.motorro.keeplink.testaction.TestAction.$metadata$.constructor {
            constructor(type: com.motorro.keeplink.testaction.data.TransportType, from: string, to: string, date: com.motorro.keeplink.testaction.data.LocalDateFields);
            get type(): com.motorro.keeplink.testaction.data.TransportType;
            get from(): string;
            get to(): string;
            get date(): com.motorro.keeplink.testaction.data.LocalDateFields;
            getPath(): Array<string>;
            getSearch(): Array<com.motorro.keeplink.uri.data.Param>;
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Search.$metadata$ {
            const constructor: abstract new () => Search;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor /* implements kotlinx.serialization.internal.SerializerFactory */ {
                private constructor();
            }
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
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace LocalDateFields.$metadata$ {
        const constructor: abstract new () => LocalDateFields;
    }
    namespace LocalDateFields {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                parse(componentValue: string): com.motorro.keeplink.testaction.data.LocalDateFields;
                private constructor();
            }
        }
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
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace TransportType.$metadata$ {
        const constructor: abstract new () => TransportType;
    }
    namespace TransportType {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace Companion.$metadata$ {
            abstract class constructor {
                parse(componentValue: string): com.motorro.keeplink.testaction.data.TransportType;
                private constructor();
            }
        }
    }
    abstract class TransportTypes extends KtSingleton<TransportTypes.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace TransportTypes.$metadata$ {
        abstract class constructor {
            get FLIGHT(): com.motorro.keeplink.testaction.data.TransportType;
            get TRAIN(): com.motorro.keeplink.testaction.data.TransportType;
            private constructor();
        }
    }
}
export declare namespace com.motorro.keeplink.testaction {
    abstract class LinkParsers extends KtSingleton<LinkParsers.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace LinkParsers.$metadata$ {
        abstract class constructor {
            get MOTORRO(): com.motorro.keeplink.deeplink.LinkParser<com.motorro.keeplink.testaction.TestAction>;
            get LOCALHOST_8080(): com.motorro.keeplink.deeplink.LinkParser<com.motorro.keeplink.testaction.TestAction>;
            private constructor();
        }
    }
    abstract class LinkBuilders extends KtSingleton<LinkBuilders.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace LinkBuilders.$metadata$ {
        abstract class constructor {
            get MOTORRO(): com.motorro.keeplink.deeplink.LinkBuilder<com.motorro.keeplink.testaction.TestAction>;
            get LOCALHOST_8080(): com.motorro.keeplink.deeplink.LinkBuilder<com.motorro.keeplink.testaction.TestAction>;
            private constructor();
        }
    }
}
export declare namespace com.motorro.keeplink.testaction.data {
    function fromDate(date: Date): com.motorro.keeplink.testaction.data.LocalDateFields;
    function toDate(localDateFields: com.motorro.keeplink.testaction.data.LocalDateFields): Date;
}
export declare namespace com.motorro.keeplink.testaction {
    function magicLink(token: string): com.motorro.keeplink.testaction.TestAction;
    function search(type: com.motorro.keeplink.testaction.data.TransportType, from: string, to: string, date: Date): com.motorro.keeplink.testaction.TestAction;
}