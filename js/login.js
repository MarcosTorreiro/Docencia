$(document).ready(function(){
  $('#regis').click(function(){
    $('#formregis').css("display","block");
    $('#formlogin').css("display","none");
  });

  $('#log').click(function(){
    $('#formregis').css("display","none");
    $('#formlogin').css("display","block");
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

});

$('#formregis').bind('submit', function(){
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
        // Do things with returned data such as handling errors and success
        if(data['result']=='Success'){
          location.href='../html/index.html';
        }else{
          if(data['code']=='Ex001'){
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
