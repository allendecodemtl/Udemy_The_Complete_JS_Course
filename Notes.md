### **Source**
https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c

### **Generators**
https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e

### **let and cons**
```javascript
var is traditionally function scoped.
let is a new variable declaration which is block scoped.
const is just like let, but immutable.
```

### **Importing moduless**
```javascript
import * from 'mymodule'
import React from 'react'
import { React, Component } from 'react'
import React as MyLibrary from 'react'
```

### **Exporting modules**
```javascript
export var foo = 2
export function bar() { /* ... */ }
```


### **For-of loop**
> ES5 back in 2009 introduced forEach() loops. While nice, they offered no way to break, like for loops always did.
> ES2015 introduced the for-of loop, which combines the conciseness of forEach with the ability to break:
```javascript
const x = ['a', 'b', 'c'];

for (const v of x) {
  if (v === 'b'){
     break;
   }
   console.log(v);
}

x.forEach(x => {
   if (x === 'b') break;  // Compile error
});
```
