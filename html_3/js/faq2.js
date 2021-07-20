      $(function(){
        $(".accordion2 dt:eq(0)").css({ background:"rgba(255,255,255,0.1)" , color:"#1AAFE9" });
        $(".accordion2 dd:not(:eq(3))").hide();
        $(".accordion2 dt").click(function(){ 
          $(".accordion2 dt").find("span").show()
          $(".accordion2 dt").find("p").hide()
          if($(this).next().css("display") == "none"){ 
            $(this).find("span").hide()
            $(this).find("p").show()
            $(".accordion2 dd").slideUp(200);
            $(".accordion2 dt").css({ background:"rgba(255,255,255,0.1)" , color:"#fff" });
            $(this).css({ background:"rgba(255,255,255,0.1)" , color:"#1AAFE9" });
            $(this).next().slideDown(200);
          } else{

            $(this).find("span").show()
            $(this).find("p").hide()
            $(".accordion2 dd").slideUp(200);
            $(".accordion2 dt").css({ background:"rgba(255,255,255,0.1)" , color:"#fff" });
          }
        });
      });