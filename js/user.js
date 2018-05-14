$(document).ready(function(){
  $('#modifi').click(function(){
    $('#usermodifi').css("display","block");
    $('#formuser').css("display","none");
  });

  $('#cancel').click(function(){
    $('#usermodifi').css("display","none");
    $('#formuser').css("display","block");
  });

  $('#password').focusout(function(){
    if($('#repeatPass').val()!=$('#password').val()){
      $('#mensaje').css('opacity',0.7);
      $('#mensaje p').text('Las contraseñas no coinciden');
      $('#register').prop( "disabled", true );
      $('#password').css('border-bottom','solid 2px red');
      $('#repeatPass').css('border-bottom','solid 2px red');
    }else{
      $('#mensaje').css('opacity',0);
      $('#register').prop( "disabled", false);
      $('#password').css('border-bottom','solid 2px #2996E6');
      $('#repeatPass').css('border-bottom','solid 2px #2996E6');
    }
  });

  $('#repeatPass').focusout(function(){
    if($('#repeatPass').val()!=$('#password').val()){
      $('#mensaje').css('opacity',0.7);
      $('#mensaje p').text('Las contraseñas no coinciden');
      $('#register').prop( "disabled", true );
      $('#password').css('border-bottom','solid 2px red');
      $('#repeatPass').css('border-bottom','solid 2px red');
    }else{
      $('#mensaje').css('opacity',0);
      $('#register').prop( "disabled", false);
      $('#password').css('border-bottom','solid 2px #2996E6');
      $('#repeatPass').css('border-bottom','solid 2px #2996E6');
    }
  });

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

  $('#user').text(getCookie('User'));

  $('#close').click(function(){
    delete_cookie('User');
    location.href='login.html';
  });

});
