//[deeplink](../../index.md)/[com.motorro.keeplink.deeplink](index.md)

# Package com.motorro.keeplink.deeplink

[common]\
Contains tools to build deep-link actions and some useful action parsers

## Types

| Name | Summary |
|---|---|
| [Action](-action/index.md) | [common]<br>abstract class [Action](-action/index.md) : [PshComponents](../../../uri/uri/com.motorro.keeplink.uri.data/-psh-components/index.md)<br>Deep link action marker class. |
| [ActionParser](-action-parser/index.md) | [common]<br>fun interface [ActionParser](-action-parser/index.md)&lt;out [A](-action-parser/index.md) : [Action](-action/index.md)&gt;<br>Parses action from action components |
| [BranchActionParser](-branch-action-parser/index.md) | [common]<br>open class [BranchActionParser](-branch-action-parser/index.md)&lt;[A](-branch-action-parser/index.md) : [Action](-action/index.md)&gt;(children: [Iterable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)&lt;[ActionParser](-action-parser/index.md)&lt;[A](-branch-action-parser/index.md)&gt;&gt;, default: [ActionParser](-action-parser/index.md)&lt;[A](-branch-action-parser/index.md)&gt;) : [ActionParser](-action-parser/index.md)&lt;[A](-branch-action-parser/index.md)&gt; <br>Parser to parse path branch |
| [DeepLink](-deep-link/index.md) | [common]<br>class [DeepLink](-deep-link/index.md)&lt;out [A](-deep-link/index.md) : [Action](-action/index.md)&gt;(val action: [A](-deep-link/index.md), val utm: [Utm](../../../uri/uri/com.motorro.keeplink.uri.data/-utm/index.md)) : [PshComponents](../../../uri/uri/com.motorro.keeplink.uri.data/-psh-components/index.md), [WithAction](-with-action/index.md)&lt;[A](-deep-link/index.md)&gt; <br>Deep-link object |
| [DeepLinkSerializer](-deep-link-serializer/index.md) | [common]<br>open class [DeepLinkSerializer](-deep-link-serializer/index.md)&lt;[A](-deep-link-serializer/index.md) : [Action](-action/index.md)&gt;(builder: [LinkBuilder](-link-builder/index.md)&lt;[A](-deep-link-serializer/index.md)&gt;, parser: [LinkParser](-link-parser/index.md)&lt;[A](-deep-link-serializer/index.md)&gt;) : KSerializer&lt;[DeepLink](-deep-link/index.md)&lt;[A](-deep-link-serializer/index.md)&gt;&gt; <br>Serializes [DeepLink](-deep-link/index.md) to deep-link URI |
| [DefaultActionParser](-default-action-parser/index.md) | [common]<br>class [DefaultActionParser](-default-action-parser/index.md)&lt;[A](-default-action-parser/index.md) : [Action](-action/index.md)&gt;(action: () -&gt; [A](-default-action-parser/index.md)?) : [ActionParser](-action-parser/index.md)&lt;[A](-default-action-parser/index.md)&gt; <br>Used in composite parsers to return default action |
| [LinkBuilder](-link-builder/index.md) | [common]<br>open class [LinkBuilder](-link-builder/index.md)&lt;in [A](-link-builder/index.md) : [Action](-action/index.md)&gt;(targetScheme: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), targetHost: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))<br>Builds deep-link with predefined `scheme` and `host` components |
| [LinkParser](-link-parser/index.md) | [common]<br>open class [LinkParser](-link-parser/index.md)&lt;[A](-link-parser/index.md) : [Action](-action/index.md)&gt;(parser: [ActionParser](-action-parser/index.md)&lt;[A](-link-parser/index.md)&gt;, targetScheme: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), targetHost: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))<br>Deep-link parser |
| [SegmentCheckParser](-segment-check-parser/index.md) | [common]<br>open class [SegmentCheckParser](-segment-check-parser/index.md)&lt;[A](-segment-check-parser/index.md) : [Action](-action/index.md)&gt;(segment: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), next: [ActionParser](-action-parser/index.md)&lt;[A](-segment-check-parser/index.md)&gt;) : [ActionParser](-action-parser/index.md)&lt;[A](-segment-check-parser/index.md)&gt; <br>Common matcher that checks if segment in [parse](-segment-check-parser/parse.md) equals [segment](../../../deeplink/com.motorro.keeplink.deeplink/-segment-check-parser/segment.md) |
| [WithAction](-with-action/index.md) | [common]<br>interface [WithAction](-with-action/index.md)&lt;out [A](-with-action/index.md) : [Action](-action/index.md)&gt;<br>Contains an action |

## Functions

| Name | Summary |
|---|---|
| [deepLink](deep-link.md) | [common]<br>fun &lt;[A](deep-link.md) : [Action](-action/index.md)&gt; [deepLink](deep-link.md)(action: [A](deep-link.md)): [DeepLink](-deep-link/index.md)&lt;[A](deep-link.md)&gt;<br>Creates a new deep-link |
