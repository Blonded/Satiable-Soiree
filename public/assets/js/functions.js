function isUserLogged() {

    if(window.sessionStorage.getItem("logged")) {

        $(".navbar-guest").hide();
        $(".navbar-user").show();
        $(".nav-dashboard").attr("href", "/usernav/"+window.sessionStorage.getItem('id'));

        $(".welcome").html("<span class='nav-link'><b>Welcome "+window.sessionStorage.getItem("firstname")+"</b></span>");
        return true;

    }
    
    $(".navbar-guest").show();
    $(".navbar-user").hide();
    return false;

}

$(document).ready(function() {

    isUserLogged();

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

});

