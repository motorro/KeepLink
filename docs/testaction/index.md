//[testaction](index.md)

# testaction

[common, ios, js, jvm]\
Sample deep-link structure and actions

Supported actions:

```kotlin
TestAction
    |
    --- Invalid (parse failed)
    |
    --- Unknown (Parsed but not any of known actions)
    |
    --- Root (default action)
    |
    --- Profile
    |  
    --- Login
    |   |
    |   --- Magic-link(hash)
    |       /login/magic/{token:String}
    |
    --- Search
        /search?type={type}&from={from}&to={to}&date={date}
```

## Packages

| Name |
|---|
| [com.motorro.keeplink.testaction](testaction/com.motorro.keeplink.testaction/index.md) | Sample action structure |
| [com.motorro.keeplink.testaction.data](testaction/com.motorro.keeplink.testaction.data/index.md) | Sample custom data structures and functions to use - date and enum |
