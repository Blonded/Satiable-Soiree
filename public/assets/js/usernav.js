$(document).ready(function() {

    if(isUserLogged() == false) {

        window.location.href = '/';

    }

    getOccasions(window.sessionStorage.getItem("id"));
});

function getOccasions(userId) {
    
    $.get("/api/usernav", {id: userId}, function(data) {
      
      console.log("Occasions", data);
      var posts = data;

      for (let index = 0; index < posts.length; index++) {

        var name = posts[index].name;

        if(name.length > 25) {

          name = name.substring(0, 30).split(" ").slice(0, -1).join(" ") + "...";

        }
        
        var block = "";
        block += "<div class='col-4'>";
          block += "<div class='card' style='margin-top:25px;'>";
            block +="<img class='card-img-top img-fluid' src='http://visitlawrencecounty.com/wp-content/uploads/2017/11/picnic.jpg' alt='Card image cap'>";
            block +="<div class='card-body'>"              
              block +="<h5 class='card-title'>"+name+"</h5>";
              block +="<ul>";
                if(posts[index].number == 0) {
                  block +="<li>Address: "+posts[index].street+", "+posts[index].zipcode+"</li>";
                } else {
                  block +="<li>Address: "+posts[index].number+" "+posts[index].street+", "+posts[index].zipcode+"</li>";
                }
                block +="<li>Address: "+posts[index].city+"</li>";
                block +="<li>"+posts[index].city+"</li>";
                block +="<li>"+posts[index].city+"</li>";
              block +="</ul>";
              block += "<a href='#' class='btn btn-primary'>More details</a>";
            block +="</div>";            
          block +="</div>";
        block +="</div>";
        $(".container-occasions").append(block);
        // console.log(posts[index].name);

        /*

        
          <img class='card-img-top' src='...' alt='Card image cap'>
          
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
          </div>
        </div>

        */
        
      }

      
    });
  }