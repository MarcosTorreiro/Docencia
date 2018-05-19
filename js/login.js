$(document).ready(function(){
  $('#regis').click(function(){
    $('#formregis').css("display","block");
    $('#formlogin').css("display","none");
  });

  $('#log').click(function(){
    $('#formregis').css("display","none");
    $('#formlogin').css("display","block");
  });

  $('#password').focusout(function(){
    if($('#repeatPass').val()!=$('#password').val()){
      $('#mensaje').css('opacity',0.7);
      $('#mensaje p').text('Las contraseñas no coinciden');
      $('#register').prop( "disabled", true );
      $('#password').css('border-bottom','solid 2px red');
      $('#repeatPass').css('border-bottom','solid 2px red');
    }else{
      $('#register').prop( "disabled", false);
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
      $('#register').prop( "disabled", false);
    }
  });
    $('nav').css('background-color','#2C2C2C','opacity','0.5');
});

$('#formregis').bind('submit', function(e){
  var isValid = true;
  if (!isValid) {
    e.preventDefault();
    return false;
  } else {
    var data = $("#formregis").serialize();
    $.ajax({
      type: 'POST',
      url: '../php/register.php',
      data: data,
      beforeSend: function() {
        // Do stuff before sending
      },
      success: function(data) {
        //Do things with returned data such as handling errors and success
        if(data.data.result=='Success'){
          setCookie($('#user').val());
          location.href = '../html/index.html';
        }else{
          if(data.data.code=='Ex001'){
            $('#mensaje').css('opacity',0.7);
            $('#mensaje p').text('Ya existe un usuario con ese nombre');
          }else{
            $('#mensaje').css('opacity',0.7);
            $('#mensaje p').text('Error al registrarse. Intentalo de nuevo');
          }
        }
      }
    });
    e.preventDefault();
    return false;
  }
});


$('#formlogin').bind('submit', function(e){
  var isValid = true;
  if (!isValid) {
    e.preventDefault();
    return false;
  } else {
    var data = $("#formlogin").serialize();
    $.ajax({
      type: 'POST',
      url: '../php/login.php',
      data: data,
      beforeSend: function() {
        // Do stuff before sending
      },
      success: function(data) {
        console.log(data);
        //Do things with returned data such as handling errors and success
        if(data.data.result=='Success'){
          setCookie($('#username').val());
          location.href = '../html/index.html';
        }else{
          $('#mensaje').css('opacity',0.7);
          $('#mensaje p').text('El usuario o la contraseña son incorrectos');
        }
      }
    });
    e.preventDefault();
    return false;
  }
});

function setCookie(cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "User=" + cvalue + "; " + expires;
}
