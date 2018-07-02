$(document).ready(function(){

  var entradas=[];
  var html = '';

  $('#nentrada').click(function(){
    location.href="../html/nentrada.html";
  });


  $.getJSON("../php/blog.php", function(result){
        $.each(result, function(i, field){
          entradas[i] = field;
          html+='<article>'+
          '<a href="../html/display.html?entrada='+field['id']+'"><h3> - '+field['title']+'</h3></a><div>'+truncate(field['body'])+'</p></div><p>Tags: <i class="fa fa-ticket"></i> '+field['tags']+', <i class="fa fa-ticket"></i> Todas</p></article><hr>';
        });
        $('#containerEn').html(html);
    });

    $('select').change(function(){
      html = '';
      $.each(entradas, function(i, field){
        if(field['tags']==$('select').val()){
          html+='<article>'+
          '<a href="../html/display.html?entrada='+field['id']+'"><h3> - '+field['title']+'</h3></a><div>'+truncate(field['body'])+'</p></div><p>Tags: <i class="fa fa-ticket"></i> '+field['tags']+', <i class="fa fa-ticket"></i> Todas</p></article><hr>';
      }
        if($("select option:first").is(':selected')){
          html+='<article>'+
          '<a href="../html/display.html?entrada='+field['id']+'"><h3> - '+field['title']+'</h3></a><div>'+truncate(field['body'])+'</p></div><p>Tags: <i class="fa fa-ticket"></i> '+field['tags']+', <i class="fa fa-ticket"></i> Todas</p></article><hr>';
      }
      });
      $('#containerEn').html('');
      $('#containerEn').html(html);
    });
});

function truncate(String){
   if (String.length > 150)
      return String.substring(0,150)+'...';
   else
      return string;
};
