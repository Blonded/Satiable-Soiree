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

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newPet = {
      name: $("#pet-name").val().trim(),
      species: $("#pet-type").val().trim(),
      sleepy: $("[name=sleepy]:checked").val().trim(),
      userID: $("#userID").val().trim()
    };

    // Send the POST request.
    $.ajax("pets/api/pets", {
      type: "POST",
      data: newPet
    }).then(
      function() {
        console.log("created new Pet");
        // Reload the page to get the updated list
        location.reload();
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
