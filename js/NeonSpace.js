$(function(){
  $("#neonbox").mouseenter(function(){
    $("#neonspace > li").stop().animate({marginTop:"-1150px"},8000)
  }).mouseleave(function(){
    $("#neonspace > li").stop().animate({marginTop:"0px"},3000)
  })

  $("#grobox").mouseenter(function(){
    $("#gro > li").stop().animate({marginTop:"-2970px"},8000)
  }).mouseleave(function(){
    $("#gro > li").stop().animate({marginTop:"0px"},3000)
  })

})