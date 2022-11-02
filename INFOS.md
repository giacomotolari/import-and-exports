### Imports and Exports

- Default exports vs. named exports: 
  `export default`, `export {<var1>, <var2> [, ...]}`
- Namespacing imports: 
  `import <namespace> from <path>`, `import * as <namespace> from <path>`
- Destructuring imports: `import { <var1>, <var2 [, ...]} from `<path>`


## Exercise:

Browser-modules-imports-exports https://classroom.github.com/a/9O7KNxyA


Exports without a default tag are Named exports. Exports with the default tag are Default exports. 
Using one over the other can have effects on your code readability, file structure, and component organization. 


 ## Named Exports

 Can export multiple values
 MUST use the exported name when importing

 ## Default Exports

 Export a single value
 Can use any name when importing

https://betterprogramming.pub/understanding-the-difference-between-named-and-default-exports-in-react-2d253ca9fc22


namespace imports https://medium.com/unsplash/named-namespace-imports-7345212bbffb

ALL IMPORTS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import



### Splitting the code in SPA applications is very important for:

 - to prevent conflicts with GIT when working in TEAM

 - to have the code more orderly;

 - to facilitate debugging;

 - to improve performance;

 - to be able to reuse parts of the code and avoid rewriting the same code several times.