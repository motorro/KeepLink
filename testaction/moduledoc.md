# Module testaction

Sample deep-link structure and actions

Supported actions:
```
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


# Package com.motorro.keeplink.testaction

Sample action structure

# Package com.motorro.keeplink.testaction.data

Sample custom data structures and functions to use - date and enum


