$(function() {

    $("#event-submit").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var dateInput = moment($("#date").val().trim());
        dateInput = dateInput.format("YYYY-MM-DD HH:mm:ss");

        var starttimeInput = moment($("#starttime").val(), "HH:mm:ss");
        starttimeInput = starttimeInput.format("HH:mm:ss");

        var endtimeInput = moment($("#endtime").val(), "HH:mm:ss");
        endtimeInput = endtimeInput.format("HH:mm:ss");

        var newEvent = {
            name: $("#name").val(),
            street: $("#street").val().trim(),
            number: $("#number").val().trim(),
            zipcode: $("#zipcode").val().trim(),
            city: $("#city").val().trim(),
            date: dateInput,
            starttime: starttimeInput,
            endtime: endtimeInput,
            UserId: window.sessionStorage.getItem("id")
        };

        console.log(newEvent);

        // Send the POST request.
        $.ajax("/api/createevent", {
            type: "POST",
            data: newEvent
        }).then(
            function(result) {
            
            if(result) {

                $(".see-event").attr("href", "/event/"+result.id+"/user/"+result.UserId);
                $('#modal-success').modal('show');

            }

            }
        );
    });

    var occasionDate = $(".occasion-date").data("value");
    occasionDate = moment(occasionDate);
    occasionDate = occasionDate.format("dddd, MMMM Do YYYY");
    $(".occasion-date").text(occasionDate);

});