      $(function(){
        $(".accordion dt:eq(0)").css({ background:"rgba(255,255,255,0.1)" , color:"#1AAFE9" });
        $(".accordion dd:not(:eq(0))").hide();
        $(".accordion dt").click(function(){ 
          $(".accordion dt").find("span").show()
          $(".accordion dt").find("p").hide()
          if($(this).next().css("display") == "none"){ 
            $(this).find("span").hide()
            $(this).find("p").show()
            $(".accordion dd").slideUp(200);
            $(".accordion dt").css({ background:"rgba(255,255,255,0.1)" , color:"#fff" });
            $(this).css({ background:"rgba(255,255,255,0.1)" , color:"#1AAFE9" });
            $(this).next().slideDown(200);
          } else{

            $(this).find("span").show()
            $(this).find("p").hide()
            $(".accordion dd").slideUp(200);
            $(".accordion dt").css({ background:"rgba(255,255,255,0.1)" , color:"#fff" });
          }
        });
      });