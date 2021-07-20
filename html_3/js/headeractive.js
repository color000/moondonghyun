         $(function(){
            $(window).scroll(function(){
            var navbar = $(this).scrollTop();
            console.log(navbar);
            var $header = $('header');
            if(navbar > 100){
                $header.addClass('activated');
            }else{
                $header.removeClass('activated');
            }
          })
        })