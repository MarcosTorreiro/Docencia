
$(document).ready(function(){

    $('#banner').css({'height':$(window).height()+'px'});

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll>=875){
      $('nav').css('opacity','1');
    }else{
      $('nav').css('opacity','0.4');
    }
    if(scroll>=275){
      $('#presentacion h1').css('opacity', 0);
      $('#presentacion p').css('opacity', 0);
      $('#nosotros').css('opacity', 0);
    }else{
      $('#presentacion h1').css('opacity', 1);
      $('#presentacion p').css('opacity', 1);
      $('#nosotros').css('opacity', 1);
    }
   });

   $('#nosotros').click(function(){
     $('html, body').animate({
        scrollTop: $(h2).offset().top
    }, 2000);
   });

   $('#inicio').click(function(){
     $('html, body').animate({
        scrollTop: 0
    }, 2000);
   });

   $('#saber').click(function(){
     $('html, body').animate({
        scrollTop: 925
    }, 2000);
   });

 });
