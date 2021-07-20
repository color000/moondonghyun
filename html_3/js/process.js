      $(function(){
        $(".process > .concept").mouseenter(function(){
          $("#pt1, #pt2, #pt3, #pt4").stop().hide();
          $(".prepare, .retouch, .finalize").css({
            "background" : "rgba(255,255,255,0.5)"
          })
          $(".prepare > h3, .retouch > h3, .finalize > h3").css({
            "color" : "#627290"
          })
          $(".concept>h3").css({
            "color" : "#000"
          })
          $("#pt1").stop().fadeIn();
          $(".concept").css({
            "background" : "#fff"
          })
        }).mouseleave(function(){
          $("#pt2, #pt3, #pt4").stop().hide();
        })
        $(".process > .prepare").mouseenter(function(){
          $("#pt1, #pt2, #pt3, #pt4").stop().hide();
          $(".concept, .retouch, .finalize").css({
            "background" : "rgba(255,255,255,0.5)"
          })
          $(".concept > h3, .retouch > h3, .finalize > h3").css({
            "color" : "#627290"
          })
          $(".prepare>h3").css({
            "color" : "#000"
          })
          $("#pt2").stop().fadeIn();
          $(".prepare").css({
            "background" : "#fff"
          })
        }).mouseleave(function(){
          $("#pt1, #pt3, #pt4").stop().hide();
        })

        $(".process > .retouch").mouseenter(function(){
          $("#pt1, #pt2, #pt3, #pt4").stop().hide();
          $(".prepare, .concept, .finalize").css({
            "background" : "rgba(255,255,255,0.5)"
          })
          $(".prepare > h3, .concept > h3, .finalize > h3").css({
            "color" : "#627290"
          })
          $(".retouch>h3").css({
            "color" : "#000"
          })
          $("#pt3").stop().fadeIn();
          $(".retouch").css({
            "background" : "#fff"
          })
        }).mouseleave(function(){
          $("#pt1, #pt2, #pt4").stop().hide();
        })

        $(".process > .finalize").mouseenter(function(){
          $("#pt1, #pt2, #pt3, #pt4").stop().hide();
          $(".prepare, .retouch, .concept").css({
            "background" : "rgba(255,255,255,0.5)"
          })
          $(".prepare > h3, .retouch > h3, .concept > h3").css({
            "color" : "#627290"
          })
          $(".finalize>h3").css({
            "color" : "#000"
          })
          $("#pt4").stop().fadeIn();
          $(".finalize").css({
            "background" : "#fff"
          })
        }).mouseleave(function(){
          $("#pt1, #pt2, #pt3").stop().hide();
        })
      })