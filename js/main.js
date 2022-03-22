(function ($) {
    "use strict";
    

      var scroll = new SmoothScroll('a[href*="#"]',{
        header: '#header',
        speed: 800,
        speedAsDuration: true,
        easing: 'easeInOutQuad',
      });
      //Animation
      $('.setElm').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
          $(this).addClass('inview');
          if (visiblePartX == 'both' && visiblePartY == 'both'){
            $(this).addClass('inviewAll');
          }
        }
      });
      //nav
      var $nav   = $('#navArea');
      var $btn   = $('.toggle_btn');
      var $mask  = $('#mask');
      var $navlink  = $('#navArea nav ul.menubarMenu li.menuItem a');
      var open   = 'open'; // class
      // menu open close
      $btn.on( 'click', function() {
        if ( ! $nav.hasClass( open ) ) {
          $nav.addClass( open );
        } else {
          $nav.removeClass( open );
        }
      });
      if ( $nav.hasClass( open ) ) {
        $('#navArea nav ul.menubarMenu li.menuItem a').click(function(){
          $nav.removeClass( open );

        });
      }

      // mask close
      $mask.on('click', function() {
        $nav.removeClass( open );
      });
      $navlink.on('click', function() {
        $nav.removeClass( open );
      });
      // click event
      $(".toggle_btn").on("click", function(){
        $(".h-inner .logo-area").toggleClass("zindex");
      });
      $(".s_inner li").on("click", function(){
        $nav.removeClass( open );
        $(".h-inner .logo-area").removeClass("zindex");
      });
    
    $(window).scroll(function(){
      if ($(window).scrollTop() > 100) {
          $('#header').addClass('fixed');
      } else {
          $('#header').removeClass('fixed');
      }
    });
    

    var text = document.getElementById('typestext');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<b class="RotateLetter">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</b>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }

    var text = document.getElementById('typestext1');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<b class="RotateLetter">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</b>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }

    var text = document.getElementById('typestext2');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<b class="RotateLetter">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</b>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
    var text = document.getElementById('typestext3');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<b class="RotateLetter">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</b>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
    var text = document.getElementById('typestext4');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<b class="RotateLetter">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</b>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
    var text = document.getElementById('typestext5');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<b class="RotateLetter">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</b>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
        var text = document.getElementById('typestextr');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<b class="RotateLetter">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</b>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
    var text = document.getElementById('typestextp');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<b class="RotateLetter">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</b>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }

    var text = document.getElementById('typestextd');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<b class="RotateLetter">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</b>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
    var text = document.getElementById('typestextf');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<b class="RotateLetter">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</b>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
    var text = document.getElementById('typestextg');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<b class="RotateLetter">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</b>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
    var text = document.getElementById('typestexth');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<b class="RotateLetter">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</b>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
})(jQuery);	    