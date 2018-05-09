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
    var array = {username:$('#nombre').val(), password:$('#password').val()};
    $.ajax({
      url:'../php/usuario.php',
      data:array,
      type:'POST',
      success: function(result){
        if(result['validation']){
          window.location.href = "http://localhost/docencia/html/index.html";
        }else{
          window.location.href = "http://localhost/docencia/html/blog.html";
        }
      }});
  });

  $('#register').click(function() {


  });

});
