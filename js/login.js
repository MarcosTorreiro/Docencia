$(document).ready(function(){
  $('#regis').click(function(){
    $('#formregis').css("display","block");
    $('#formlogin').css("display","none");
  });

  $('#log').click(function(){
    $('#formregis').css("display","none");
    $('#formlogin').css("display","block");
  });

  $('#login').click(function() {
    $.getJSON('../php/usuario.php?tipoFormulario=1&user=' +
      $('#nombre').val() + '&password=' + $('#password').val(), {
        format: "json"
      }).done(function(result) {
      if (result['validacion']) {
        var str = result["user"];
        setCookie("userdata", str, 30);
      } else {
        // TODO: Failed;
      }
    });
  });

  $('#register').click(function() {
    console.log('hola');
    if ($('#pass').val() == $('#copypassword').val()) {
      $.getJSON('../php/usuario.php?tipoFormulario=2&user=' +
      $('#nombre').val() + '&password=' + $('#password').val(), {
        format: "json"
      }).done(function(result) {
      if (result['validacion']) {
        var str = result["user"];
        setCookie("userdata", str, 30);
      } else {
        // TODO: Failed;
      }
    });
    }else{
      $('#aviso').css('display','block');
    }

  });

});
