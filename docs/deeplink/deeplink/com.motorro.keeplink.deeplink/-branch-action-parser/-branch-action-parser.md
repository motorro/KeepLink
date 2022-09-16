//[deeplink](../../../index.md)/[com.motorro.keeplink.deeplink](../index.md)/[BranchActionParser](index.md)/[BranchActionParser](-branch-action-parser.md)

# BranchActionParser

[common]\
fun &lt;[A](index.md) : [Action](../-action/index.md)&gt; [BranchActionParser](-branch-action-parser.md)(vararg children: [ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt;)

Constructor with no default action

## Parameters

common

| | |
|---|---|
| children | Children to pass parsing. First non-null result is used as a return value from [parse](parse.md) |

[common]\
fun &lt;[A](index.md) : [Action](../-action/index.md)&gt; [BranchActionParser](-branch-action-parser.md)(children: [Iterable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)&lt;[ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt;&gt;, default: [ActionParser](../-action-parser/index.md)&lt;[A](index.md)&gt;)

## Parameters

common

| | |
|---|---|
| children | Children to pass parsing. First non-null result is used as a return value from [parse](parse.md) |
| default | Called when no child parser matches given components |
