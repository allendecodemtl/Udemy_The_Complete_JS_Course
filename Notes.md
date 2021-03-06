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

____
## **Async**
> Async
``` javascript
const second = () => {
    setTimeout(() => {
        console.log('Async Hey There');
    }, 2000);
}

const first = () => {
    console.log('Hey there!');
    second();
    console.log('End');
}

first();
```
> Callback hell
``` javascript
function getRecipe(){
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        // after 1500 ms
        setTimeout((id) => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Jonas'
            };
            console.log(`${id}: ${recipe.title}`);

            // after another 1000 ms
            setTimeout(publisher => {
                const recipe = {
                    title: 'Italian Pizza',
                    publisher: 'Jonas'
                };
                console.log(recipe);
            },1500, recipe.publisher);

        }, 1000, recipeID[2]);

    }, 1500);
}
getRecipe();
```
```
async.html:20 ((4) [523, 883, 432, 974]
async.html:27 432: Fresh tomato pasta
async.html:34 {title: "Italian Pizza", publisher: "Jonas"}
```
> Promises
``` javascript 
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Jonas'
            };
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout((pub) => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Jonas'
            };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};
```
> Accessing promises
``` javascript 
getIDs
.then((IDs) => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then((recipe) => {
    console.log(recipe);
    return getRelated('Jonas Test');
})
.then((recipe) => {
    console.log(recipe);
})
.catch(error => {
    console.log('Error!!');
});
```
```
async.html:47 (4) [523, 883, 432, 974]
async.html:51 432: Fresh tomato pasta
async.html:55 Jonas Test: Fresh tomato pasta
```
> Async await
``` javascript
async function getRecipeAw() {
    const IDs = await getIDs;
    console.log(IDs);

    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);

    const related = await getRelated('Jonas');
    console.log(related);

    return recipe;
}

getRecipeAw()
.then( result => {
    console.log(`${result} is the best ever`);
});
```
```
async.html:49 (4) [523, 883, 432, 974]
async.html:52 432: Fresh tomato pasta
async.html:55 Jonas: Fresh tomato pasta
async.html:62 432: Fresh tomato pasta is the best ever
```
___
> Async arrow functions look like this:
``` javascript
const foo = async () => {
  // do something
}
```
> The anonymous form works as well:
``` javascript
const foo = async function() {
  // do something
}
```
> An async function declaration looks like this:
``` javascript
async function foo() {
  // do something
}
```
> Using async function in a callback:
``` javascript
const foo = event.onCall(async () => {
  // do something
})
```
___
> AJAX and APIs -> ajax request by using promises
``` javascript
function getWeather(woeid) {
    axios.get(`https://www.metaweather.com/api/location/${woeid}/`)
    .then((result) => {
        //console.log(result);
        return result;
    })
    .then((data) => {
        const today = data.data.consolidated_weather[0];
        console.log(`Temperatures today in ${data.data.title} stay between ${today.min_temp} and ${today.max_temp}`);
    })
    .catch((err) => {
        console.log(err);
    });
}
getWeather(2487956);
getWeather(44418);
```
___
> AJAX and APIs -> ajax request using aync await
``` javascript
async function getWeatherAw(woeid){
    try {
        const result = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`);
        const tomorrow = result.data.consolidated_weather[0];
        console.log(`Temperatures tomorrow in ${result.data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`);

        return result;
    } catch (err) {
        console.log(err);
    }   
}
getWeatherAw(2487956);
```
___
``` javascript
let dataLondon;
getWeatherAw(44418)
.then(data => {
    dataLondon = data;
    console.log(dataLondon);
});
```

___
Node version - ultimately need to use .then and .catch

``` javascript
const axios = require("axios");

const getWeatherAw = async woeid => {
  try {
    const a = await getIDs();
    console.log("a:" + a);
    const b = await getRecipe(a[2]);
    console.log("b:" + b);
    const result = await axios.get(
      `https://www.metaweather.com/api/location/${woeid}/`
    );
    console.log("after get");
    const c = await getRelated("Jonas Test");
    console.log("c:" + c);

    const tomorrow = result.data.consolidated_weather[0];
    console.log(
      `Temperatures tomorrow in ${result.data.title} stay between ${
        tomorrow.min_temp
      } and ${tomorrow.max_temp}`
    );
    return tomorrow;
  } catch (err) {
    console.log(err);
  }
};

const getIDs = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([523, 883, 432, 974]);
    }, 1500);
  });
};

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(
      ID => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Jonas"
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recID
    );
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(
      pub => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Jonas"
        };
        resolve(`${pub}: ${recipe.title}`);
      },
      1500,
      publisher
    );
  });
};

getWeatherAw(2487956)
.then(e => {
    console.log(e);
});
```
