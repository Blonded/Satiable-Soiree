var request = require('request');
var keyword = "tags=vegetarian%2Cdessert";

var options = {
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?number=10&' + keyword,
  headers: {
    'X-Mashape-Key': 'rGrby8nEPymshgGOY61XmSELWlpYp12dWvejsneHIm0yMOm6iS'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
        // console.log(info.stargazers_count + " Stars");
        // console.log(info.forks_count + " Forks");
  }
}

request(options, callback);

