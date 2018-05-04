$(document).ready(function(){
    $('#main').click(function(){
      $('#main').animate({height:'800px',width:'800px'});
      $('#icon').fadeOut();
      $('#menu ul').delay(300).animate({opacity:'1'});
      $('#menu ul').css("visibility","visible");
      $('#menu-layer').animate({height:'850px',width:'850px'});

      $('#second-circle').animate({height:'450px',width:'450px'});
      $('#container').delay(300).animate({opacity:'1'});
      $('#container').css("visibility","visible");
      $('#second-circle-layer').animate({height:'500px',width:'500px'});
    });

    $('#close').click(function(){
      $('#main').animate({height:'50px',width:'50px'});
      $('#icon').fadeIn();
      $('#menu ul').delay(300).animate({opacity:'0'});
      $('#menu ul').css("visibility","hidden");
      $('#menu-layer').animate({height:'0px',width:'0px'});

      $('#second-circle').animate({height:'0px',width:'0px'});
      $('#container').delay(300).animate({opacity:'0'});
      $('#container').css("visibility","hidden");
      $('#second-circle-layer').animate({height:'0px',width:'0px'});
    });
});
