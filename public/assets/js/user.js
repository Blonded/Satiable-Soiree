// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // $("#get-pets").on("click", function(event) {
  //   console.log("clicked Button")
  //   var id = $(this).data("userid");
  //   console.log("users/api/users/" + id + "/pets")

  //   // Send the PUT request.
  //   $.ajax("users/users/" + id + "/pets", {
  //     type: "get"
  //   }).done(
  //     function() {
  //       console.log("made request or all user pet info");
  //       // Reload the page to get the updated list
  //       // location.reload();
  //     }
  //   );
  // });

  $("#email").focusout(function() {

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(regex.test($(this).val()) == false) {

      $('#myModal3').modal('show');
      $("#btn-createprofile").addClass("disabled");
      $("#btn-createprofile").attr("aria-disabled", "true");

      return true;

    } else {

      $("#btn-createprofile").removeClass("disabled");
      $("#btn-createprofile").attr("aria-disabled", "false");

    }

    var obj = {
      email : $(this).val()
    };

    $.ajax("/api/checkExistingEmail", {
      type: "POST",
      data: obj
    }).then(
      function(result) {
        
        if(result) {

          $('#myModal').modal('show');
          $("#btn-createprofile").addClass("disabled");

        } else {

          $("#btn-createprofile").removeClass("disabled");

        }
        
        // location.reload();
      }
    );
    
  });

  $("#btn-createprofile").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var resultAllergies = [];

    $('.head input:checked').each(function() {
      resultAllergies.push(this.value);
    });

    // resultAllergies = $("input").attr("name");

    console.log(resultAllergies);

    var newUser = {
      firstname: $("#firstname").val().trim(),
      lastname: $("#lastname").val().trim(),
      allergies: resultAllergies,
      email: $("#email").val().trim(),
      password: $("#password").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/createprofile", {
      type: "POST",
      data: newUser
    }).then(
      function(result) {
        
        if(result) {

          window.sessionStorage.clear();
          window.sessionStorage.setItem('logged', true);
          window.sessionStorage.setItem('id', result.id);
          window.sessionStorage.setItem('firstname', result.firstname);
          window.sessionStorage.setItem('lastname', result.lastname);
          window.sessionStorage.setItem('email', result.email);
          window.sessionStorage.setItem('password', result.password);
          window.sessionStorage.setItem('allergies', result.allergies);

          $('#myModal4').modal('show');

        }

      }
    );
  });

  $(".delete-pet").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("pets/api/pets/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
