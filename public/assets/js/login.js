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
        function(result) {
          
            if(result) {
                
                window.sessionStorage.setItem('logged', true);
                window.sessionStorage.setItem('id', result.id);
                window.sessionStorage.setItem('firstname', result.firstname);
                window.sessionStorage.setItem('lastname', result.lastname);
                window.sessionStorage.setItem('email', result.email);
                window.sessionStorage.setItem('password', result.password);
                window.sessionStorage.setItem('allergies', result.allergies);

                window.location.href = '/usernav/'+result.id;

            } else {

                $('#myModal').modal('show');

            }
          // Reload the page to get the updated list
        //   location.reload();
        }
      );
    });
  
  });
  