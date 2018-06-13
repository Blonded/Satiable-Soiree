$(document).ready(function() {

    if(isUserLogged() == false) {

        window.location.href = '/';

    }

    $.ajax("/usernav", {
        type: "GET",
        data: {"id": window.sessionStorage.getItem("id")},
        async:false,
      }).then(
        function(result) {
          
            if(result) {
                
                console.log(window.sessionStorage.getItem("id"));

            } else {

                $('#myModal').modal('show');

            }
          // Reload the page to get the updated list
        //   location.reload();
        }
      );
});

function getEvents(userId) {
    

    $.get("/api/usernav" + userId, function(data) {
      
        console.log("Occasions", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }