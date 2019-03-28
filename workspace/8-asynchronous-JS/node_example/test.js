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
