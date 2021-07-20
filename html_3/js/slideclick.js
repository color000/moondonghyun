    $(function(){

     $(".a2").click(function(){

      $(".b").slideToggle();

     });

    });


    $(window).resize(function(){

     if(window.innerWidth<=1100){

        $('.b').show();

     }
    if(window.innerWidth<=599){

        $('.b').hide();

     }
    });