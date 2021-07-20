$(function(){
  function bslide(){
    $("#interpark").stop().animate({marginLeft:-560},function(){
      $("#interpark>li:first").appendTo("#interpark");
      $("#interpark").css({marginLeft:0})
    })
  }
  setInterval(bslide,3000)

  function wslide(){
    $("#wagashi").stop().animate({marginLeft:-560},function(){
      $("#wagashi>li:first").appendTo("#wagashi");
      $("#wagashi").css({marginLeft:0})
    })
  }
  setInterval(wslide,3000)


})