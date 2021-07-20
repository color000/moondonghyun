$(function(){
  $(".mimg > ul > li").mouseenter(function(){
    $(".mimg > ul > li > span").hide()
    $(this).find("span").fadeIn()
  }).mouseleave(function(){
    $(".mimg > ul > li > span").hide()
  })
})