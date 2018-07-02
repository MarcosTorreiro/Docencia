$(document).ready(function(){

  var paramstr = window.location.search.substr(1);
  var paramarr = paramstr.split ("=");
  var params = paramarr[1];

  $('#return').click(function(){
    location.href="../html/blog.html";
  });

  $.getJSON("../php/display.php?entrada="+params, function(result){
      var html = '';
        html+='<article>'+
        '<h1>'+result['title']+'</h1><div>'+result['body']+'</p></div><p><div id="ordenar"><div>Tags: <i class="fa fa-ticket"></i> '+result['tags']+',<i class="fa fa-ticket"></i> Todas</div><div><i class="fa fa-calendar"></i> '+result['fecha']+'</div></div></p></article>';
        $('#entrada').html(html);
    });
});
