// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-sleep").on("click", function(event) {

    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");
    console.log(newSleep)
    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("pets/api/pets/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

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
