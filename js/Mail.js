$(function(){
  $(".typingpbox > ul > li").mouseenter(function(){
    $(".typingpbox > ul > li > span").hide()
    $(this).find("span").fadeIn()
  }).mouseleave(function(){
    $(".typingpbox > ul > li > span").hide()
  })
})