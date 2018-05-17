$(document).ready(function(){

  $(function() {
    $('div#froala-editor').froalaEditor({
      theme: 'dark',
      toolbarBottom: false,
      height: 350,
      toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript',
      'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle',
      'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent',
      'indent', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable',
       '|', 'quote', 'insertHR', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html']

    });
  });

  $('#cancel').click(function(){
    location.href="../html/blog.html";
  });

  $('#formentrada').bind('submit', function(e){
      $('#user').val($('#userlog').text());
      $('#body').val($('div#froala-editor').froalaEditor('html.get'));
    var isValid = true;
    if (!isValid) {
      e.preventDefault();
      return false;
    } else {
      var data = $("#formentrada").serialize();
      console.log(data);
      $.ajax({
        type: 'POST',
        url: '../php/entradas.php',
        data: data,
        beforeSend: function() {
          // Do stuff before sending
        },
        success: function(data) {
          console.log(data);
          // Do things with returned data such as handling errors and success
          if(data.data.result=='Success'){
            location.href = '../html/entrada.html';
          }else{
            if(data.data.code=='Ex001'){
              $('#mensaje').css('opacity',0.7);
              $('#mensaje p').text('Error al crear la entrada');
            }else{
              $('#mensaje').css('opacity',0.7);
              $('#mensaje p').text('Error');
            }
          }
        }
      });
      e.preventDefault();
      return false;
    }
  });

});
