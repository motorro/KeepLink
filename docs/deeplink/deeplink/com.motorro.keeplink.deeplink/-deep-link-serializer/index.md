//[deeplink](../../../index.md)/[com.motorro.keeplink.deeplink](../index.md)/[DeepLinkSerializer](index.md)

# DeepLinkSerializer

[common]\
open class [DeepLinkSerializer](index.md)&lt;[A](index.md) : [Action](../-action/index.md)&gt;(builder: [LinkBuilder](../-link-builder/index.md)&lt;[A](index.md)&gt;, parser: [LinkParser](../-link-parser/index.md)&lt;[A](index.md)&gt;) : KSerializer&lt;[DeepLink](../-deep-link/index.md)&lt;[A](index.md)&gt;&gt; 

Serializes [DeepLink](../-deep-link/index.md) to deep-link URI

## Parameters

common

| | |
|---|---|
| builder | Link builder |
| parser | Link parser |

## Constructors

| | |
|---|---|
| [DeepLinkSerializer](-deep-link-serializer.md) | [common]<br>fun &lt;[A](index.md) : [Action](../-action/index.md)&gt; [DeepLinkSerializer](-deep-link-serializer.md)(builder: [LinkBuilder](../-link-builder/index.md)&lt;[A](index.md)&gt;, parser: [LinkParser](../-link-parser/index.md)&lt;[A](index.md)&gt;) |

## Functions

| Name | Summary |
|---|---|
| [deserialize](deserialize.md) | [common]<br>open override fun [deserialize](deserialize.md)(decoder: Decoder): [DeepLink](../-deep-link/index.md)&lt;[A](index.md)&gt;<br>Deserializes from components and parses using internal parser |
| [serialize](serialize.md) | [common]<br>open override fun [serialize](serialize.md)(encoder: Encoder, value: [DeepLink](../-deep-link/index.md)&lt;[A](index.md)&gt;)<br>Serializes using action components |

## Properties

| Name | Summary |
|---|---|
| [descriptor](descriptor.md) | [common]<br>open override val [descriptor](descriptor.md): SerialDescriptor<br>Descriptor |
