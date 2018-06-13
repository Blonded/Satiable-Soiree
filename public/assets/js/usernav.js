$(document).ready(function() {

    if(isUserLogged() == false) {

        window.location.href = '/';

    }

    getOccasions(window.sessionStorage.getItem("id"));
});

function getOccasions(userId) {
    
    $.get("/api/usernav", {id: userId}, function(data) {
      
      console.log("Occasions", data);
      posts = data;

      for (let index = 0; index < posts.length; index++) {
        
        var block = "";
        block += "<div class='col'>";
          block +="<h2>"+posts[index].name+"</h2>";
          block +="<ul>";
            block +="<li>Address: "+posts[index].street+", </li>";
            block +="<li>"+posts[index].city+"</li>";
            block +="<li>"+posts[index].city+"</li>";
          block +="</ul>";
          block +="</div>"
          block +="</div>";
        console.log(posts[index].name);
        
      }

      
    });
  }