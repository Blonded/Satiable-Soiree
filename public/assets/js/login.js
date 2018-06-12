// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  
    $(".btn-login").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newLogin = {
        email: $("#email").val().trim(),
        password: $("#password").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/login", {
        type: "POST",
        data: newLogin
      }).then(
        function() {
          console.log("New login");
          // Reload the page to get the updated list
        //   location.reload();
        }
      );
    });
  
  });
  