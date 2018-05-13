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
        $('#cambio').html('<ul><li><a id="userlog" href="user.html">'+username+'</a></li><li class="invisible" id="cerrar">Cerrar sesión</li></ul>');
    } else {
        $('#cambio').html('<li id="cambio"><a href="login.html">Acceder</a></li>');
    }
}

var delete_cookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

$('#cerrar').click(function(){
  delete_cookie('User');
  location.href='login.html';
});

$( "#userlog" ).click(function(){
  $('#cerrar').toggle();
}

);

getCookie('User');
checkCookie();
});
