    $(function(){

     $(".a").click(function(){

      $(".b").slideToggle();

     });

    });


    $(window).resize(function(){

     if(window.innerWidth<=1100){

        $('.b').show();

     }

    });