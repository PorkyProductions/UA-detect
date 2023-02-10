---
title: "Types"
navigation: true
aside: true
toc: true
header: true
bottom: true
navigation.icon: "https://raw.githubusercontent.com/PorkyProductions/UA-detect/mega/images/png/noTagline2.png"
layout: default
---

::alert{type="info"}
New in UADetect 5!
::

# UADetect Type Defintions

## About:
Becuase UADetect is written 100% in TypeScript, with strict types, we ship `.d.ts` files in the main bundle for your editor/IDE to pick up. This should be done automaticlly, and will suit most users. However, for authors writing derivitve libraries, the type definitions may come in handy. To import the type defitions, simply add use the following import patterns

```ts
import type {
    _UADetect
} from 'uadetect/dist/types'

```

In the above example, we import the `_UADetect` interface, which is an interface that has all of the individual types on it. For most poeple, this will be perfectly acceptable, as types and interfaces are usually eliminated during the build process of web apps. However, there may be a need to import he individual types. 
::list{type="danger"}
Starting in UADetect 6, all functions will have their own named type aliases
::
Starting with UADetect 6, the return types of funtions take the form of the component, except in PascalCase. For example, the type for the `browser` component is `Browser`. So, to manipulate the `Browser` type, it would look something like this:
```ts
import type { Browser } from 'uadetect/dist/types'
interface OldBrowsers extends Browser {
    Netscape: "Netscape",
    InternetExplorer: "IE"
}
```