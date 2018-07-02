$(document).ready(function(){

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var username = getCookie("User");
    if (username != "") {
        $('#cambio').html('<li><a id="userlog" href="user.html">'+username+'</a></li>');
        $('#nentrada').css('display','block');
    } else {
        $('#cambio').html('<li><a id="cambio" href="login.html">Acceder</a></li>');
        $('#nentrada').css('display','none');
    }
}

checkCookie();
});
