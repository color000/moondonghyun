$(function(){
  function iphonetop(){
    $(".iphonebox > .ipulbox > ul").stop().animate({marginTop:-340},function(){
      $(".iphonebox > .ipulbox > ul > li:first").appendTo(".iphonebox >.ipulbox > ul")
      $(".iphonebox > .ipulbox > ul").css({marginTop:0})
    })
  }
  setInterval(iphonetop,3000);

  function iphoneright(){
    $(".iphoneright > .ipulbox > ul").stop().animate({marginTop:-340},function(){
      $(".iphoneright > .ipulbox > ul > li:first").appendTo(".iphoneright >.ipulbox > ul")
      $(".iphoneright > .ipulbox > ul").css({marginTop:0})
    })
  }
  setInterval(iphoneright,3000);

})