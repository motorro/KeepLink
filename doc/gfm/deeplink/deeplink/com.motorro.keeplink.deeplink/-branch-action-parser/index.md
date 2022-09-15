//[deeplink](../../../index.md)/[com.motorro.keeplink.deeplink](../index.md)/[BranchActionParser](index.md)

# BranchActionParser

[common]\
open class [BranchActionParser](index.md)&lt;[A](index.md) : [Action](../-action/index.md)&gt;(children: [Iterable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)&lt;[ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt;&gt;, default: [ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt;) : [ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt; 

Parser to parse path branch

## Parameters

common

| | |
|---|---|
| children | Children to pass parsing. First non-null result is used as a return value from [parse](parse.md) |
| default | Called when no child parser matches given components |

## Constructors

| | |
|---|---|
| [BranchActionParser](-branch-action-parser.md) | [common]<br>fun &lt;[A](index.md) : [Action](../-action/index.md)&gt; [BranchActionParser](-branch-action-parser.md)(vararg children: [ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt;)<br>Constructor with no default action |
| [BranchActionParser](-branch-action-parser.md) | [common]<br>fun &lt;[A](index.md) : [Action](../-action/index.md)&gt; [BranchActionParser](-branch-action-parser.md)(children: [Iterable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)&lt;[ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt;&gt;, default: [ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt;) |

## Functions

| Name | Summary |
|---|---|
| [parse](parse.md) | [common]<br>open override fun [parse](parse.md)(components: [PshComponents](../../../../uri/uri/com.motorro.keeplink.uri.data/-psh-components/index.md), pathIndex: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [A](index.md)?<br>Handles parsing to registered children Parser increments [pathIndex](parse.md) for children as it counts current index as its own |
