    window.onload = function () {
      window.onscroll = function () {
        var t = document.documentElement.scrollTop;
        var tb = $("#topbar")
        t > 10 ? tb.addClass("change") : tb.removeClass("change")
      }

      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      new AnimOnScroll(document.getElementById('grid'), {
        minDuration: 0.4,
        maxDuration: 0.6,
        viewportFactor: 0.2
      });
      
      $("#more").mouseover(function(){
        $("#more").addClass("mv")
      $("#more p").css({transform:"translateX(-15px)"});
      $("#more img").css({display:"inline-block",transform:"translateX(10px)"})
      })
      $("#more").mouseout(function(){
        $("#more").removeClass("mv")
        $("#more p").css({transform:"translateX(0px)"});
        $("#more img").css({transform:"translateX(0px)"});

        })
    }