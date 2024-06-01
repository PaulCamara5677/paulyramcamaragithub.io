$(document).ready(function(){
    $("html").niceScroll({
    cursorcolor:"#144677",
    cursorwidth:"7px"
    });
    $(".carousel").carousel({
      interval : 5000
    });
    $(".pad").on("click",function(){
      $(".tog").slideToggle(300,function(){
        $('html').click(function(){
          $(".tog").slideUp(200);
        });
      });
    });
  });
  $(window).on("load",function(){
    $(".loading-screen h1,.loading-screen h2").fadeOut(800,function(){
      $(".loading-screen").fadeOut(1600,function(){
        $(this).remove();
      });
      $("body").css("overflow","auto");
    });
  });
  $(document).ready(function(){
    $(window).on("scroll",function(){
      if($(window).scrollTop() >= 1200){
        $(".scroll-top").fadeIn(400);
      }else{
        $(".scroll-top").fadeOut(100);
      }
      });
      $(".scroll-top").on("click",function(){
        $("html,body").animate({scrollTop:0},1200);
    });
  });
  $(document).ready(function bon(){
    $(".scroll-top").animate({bottom:21},300,function(){
      $(".scroll-top").animate({bottom:15},300,function(){
        bon();
      });
    });
  });