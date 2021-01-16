# Satiable-Soiree 🍱

App for gathering friends in events with food.

Satiable-Soiree is a web app that helps to manage events planned with friends. Our mission is to make it so
you can plan events such as picnic's, bbq's, etc. with friends and make the "meal-planning" or prep expectations a piece of cake!

Log-in to the site, and create your event [Name, Location, Date, Time]. Thereafter - add the foods you would prefer to have at the event so your friends can decide what they would like to bring, and they're able to publicly select from the event. Simply share the link with your friends, and Tah-Dah! You have yourself a well-planned party!

Enjoy.

## Use the app:
* [Launch app](https://warm-dusk-10926.herokuapp.com/)

![Homepage](public/img/index.png)

## Required packages [NPM]:
* Express
* Express-handlebars
* FS
* Path
* Request
* Body-Parser
* Sequelize

![demo](public/img/index2.gif)

![validation demo](public/img/user_validation.gif)

## Built With:

* [HTML5](https://www.w3.org/TR/html/) - Markup language
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Stylesheets
* [Javascript](https://www.javascript.com/) - Programming Language
* [HandleBars](https://handlebarsjs.com/) - JS Template System
* [jQuery](https://jquery.com/) - Javascript Library
* [MySQL](https://www.mysql.com/) - Open Source Database
* [Bootstrap](https://getbootstrap.com/) - Website Framework
* [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) - Save key/value pairs in a web browser to store
* [Heroku](https://heroku.com) - Platform Service to launch site
* [TyperJs](https://steven.codes/typerjs/) - Javascript Library FUNCTIONAL
* [Google Fonts](https://fonts.google.com/) - Font Library

## Code examples

* **Express handlebars** - Rendering the guests and food from an event:

```
<h4 class="align-center row ml-5 mr-5 p-4" style="background-color: rgb(235, 235, 235);">Who Is Going?</h4>
    <div class = "row ml-5 mr-5" >
      {{!-- Who will be going? --}}
      {{#each results.infousersfood}}
      <div class="col-4">{{> user/user-block}}</div> 
      {{/each}}
    </div>

    
  <h4 class="row ml-5 mr-5 p-4" style="background-color: rgb(235, 235, 235)">Foods</h4>
    <div class="row ml-5 mr-5">
      {{!-- Which food are people bringing? --}}
      {{#each results.infofood}}
        <div class="col-4">{{> food/food-block}}</div>
      {{/each}}
    </div>
```

* **Sequelize** - Creating a new user:
```
db.User.create(
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      allergies: req.body.allergies,
      email: req.body.email,
      password: md5(req.body.password)
    }).then(function(result) {

      res.json(result);

  });
```

* **Session Storage** - Creating User Session (using jQuery click event):
```
$(".btn-logout").on("click", function(event) {

        event.preventDefault();

        window.sessionStorage.removeItem('logged');
        window.sessionStorage.removeItem('id');
        window.sessionStorage.removeItem('firstname');
        window.sessionStorage.removeItem('lastname');
        window.sessionStorage.removeItem('email');
        window.sessionStorage.removeItem('password');
        window.sessionStorage.removeItem('allergies');

        window.location.href = '/';

    });
```

## Authors 🖋

* **Lena Martinson** [Lena Martinson](https://github.com/Blonded)
* **Gustavo Gibo** [Gustavo Gibo](https://github.com/gustavogibo)
* **Jessica Brush** [Jessica Brush](https://github.com/dandiflower)

## Acknowledgments 🗣

* **TyperJs** [TyperJS - Library] (https://steven.codes/typerjs/)
* **UnSplash** [Photos] (https://unsplash.com/)
