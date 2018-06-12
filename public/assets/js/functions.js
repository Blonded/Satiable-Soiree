function isUserLogged() {

    if(window.sessionStorage.getItem("logged")) {

        $(".navbar-guest").hide();
        $(".navbar-user").show();
        return true;

    }
    
    $(".navbar-guest").show();
    $(".navbar-user").hide();
    return false;

}

$(document).ready(function() {

    isUserLogged();

});

