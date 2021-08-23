$(document).ready(function () {

  $('#carousel-1').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    lazyLoad: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 30) {
      $('.fixed-top').addClass('bg-white');
      $('.fixed-top').addClass('border');
      $('.fixed-top').addClass('shadow-sm');
      $('#toTop').removeClass('d-none');
    } else {
      $('.fixed-top').removeClass('bg-white');
      $('.fixed-top').removeClass('border');
      $('.fixed-top').removeClass('shadow-sm');
      $('#toTop').addClass('d-none');
    }
  });

  $('#toTop').click(function () {
    $('html').animate({ scrollTop: 0 }, 1000);
  });

  $('.cog').click(function () {
    $(".color-table").animate({ display: 'block', width: '180px', width: 'toggle' });
  });

  $('#rtl').click(function () {
    if ($('body').css("direction") === "rtl") {
      $('body').css({ "direction": "ltr" });
      $('.bg-person').css("background-image","url('./img/bg01.png')");
    }
    else {
      $('body').css({ "direction": "rtl" });
      $('.bg-person').css("background-image","url('./img/bg01-1.png')");
    }
  });

  var tmp = 1;
  $('#dark').click(function () {
    if (tmp === 1) {
      $('body').css({ "background-color": "#596275" });
      $('.bg-person').css({ "background-color": "#303952" });
      tmp = 0;
    }
    else {
      $('body').css({ "background-color": "white" });
      $('.bg-person').css({ "background-color": "#f1f2f6" });
      tmp = 1;
    }

  });

  $('#navHead').on('show.bs.collapse', function () {
    document.getElementById('bar').innerHTML = '<i class="fas fa-times"></i>';
  });
  $('#navHead').on('hide.bs.collapse', function () {
    document.getElementById('bar').innerHTML = '<i class="fas fa-bars"></i>';
  });

  $('#color1').click(function () {
    $('.active, .txt-blue').css({ "color": "#0652dd" });
    $('.bg-blue').css({ "background-color": "#0652dd" });
    $('.btn-outline-option').css({ "border-color": "#0652dd", "color": "#0652dd" });
    $('.btn-outline-option').hover(function () {
      $(this).css({ "color": "white", "background-color": "#0652dd" });
    }, function () {
      $(this).css({ "color": "#0652dd", "background-color": "white" });
    });
    $('.nav-link').hover(function () {
      $(this).css({ 'color': '#0652dd' });
    }, function () {
      $(this).css({ 'color': 'rgb(91, 91, 91)' });
    });
  });
  $('#color2').click(function () {
    $('.active,.txt-blue').css({ "color": "#55efc4" });
    $('.bg-blue').css({ "background-color": "#55efc4" });
    $('.btn-outline-option').css({ "border-color": "#55efc4", "color": "#55efc4" });
    $('.btn-outline-option').hover(function () {
      $(this).css({ "color": "white", "background-color": "#55efc4" });
    }, function () {
      $(this).css({ "color": "#55efc4", "background-color": "white" });
    });
    $('.nav-link').hover(function () {
      $(this).css({ 'color': '#55efc4' });
    }, function () {
      $(this).css({ 'color': 'rgb(91, 91, 91)' });
    });
  });
  $('#color3').click(function () {
    $('.active, .txt-blue').css({ "color": "#6c5ce7" });
    $('.bg-blue').css({ "background-color": "#6c5ce7" });
    $('.btn-outline-option').css({ "border-color": "#6c5ce7", "color": "#6c5ce7" });
    $('.btn-outline-option').hover(function () {
      $(this).css({ "color": "white", "background-color": "#6c5ce7" });
    }, function () {
      $(this).css({ "color": "#6c5ce7", "background-color": "white" });
    });
    $('.nav-link').hover(function () {
      $(this).css({ 'color': '#6c5ce7' });
    }, function () {
      $(this).css({ 'color': 'rgb(91, 91, 91)' });
    });
  });
  $('#color4').click(function () {
    $('.active, .txt-blue').css({ "color": "#ff7675" });
    $('.bg-blue').css({ "background-color": "#ff7675" });
    $('.btn-outline-option').css({ "border-color": "#ff7675", "color": "#ff7675" });
    $('.btn-outline-option').hover(function () {
      $(this).css({ "color": "white", "background-color": "#ff7675" });
    }, function () {
      $(this).css({ "color": "#ff7675", "background-color": "white" });
    });
    $('.nav-link').hover(function () {
      $(this).css({ 'color': '#ff7675' });
    }, function () {
      $(this).css({ 'color': 'rgb(91, 91, 91)' });
    });
  });
  $('#color5').click(function () {
    $('.active, .txt-blue').css({ "color": "#74b9ff" });
    $('.bg-blue').css({ "background-color": "#74b9ff" });
    $('.btn-outline-option').css({ "border-color": "#74b9ff", "color": "#74b9ff" });
    $('.btn-outline-option').hover(function () {
      $(this).css({ "color": "white", "background-color": "#74b9ff" });
    }, function () {
      $(this).css({ "color": "#74b9ff", "background-color": "white" });
    });
    $('.nav-link').hover(function () {
      $(this).css({ 'color': '#74b9ff' });
    }, function () {
      $(this).css({ 'color': 'rgb(91, 91, 91)' });
    });
  });
  $('#color6').click(function () {
    $('.active, .txt-blue').css({ "color": "#27ae60" });
    $('.bg-blue').css({ "background-color": "#27ae60" });
    $('.btn-outline-option').css({ "border-color": "#27ae60", "color": "#27ae60" });
    $('.btn-outline-option').hover(function () {
      $(this).css({ "color": "white", "background-color": "#27ae60" });
    }, function () {
      $(this).css({ "color": "#27ae60", "background-color": "white" });
    });
    $('.nav-link').hover(function () {
      $(this).css({ 'color': '#27ae60' });
    }, function () {
      $(this).css({ 'color': 'rgb(91, 91, 91)' });
    });
  });
  $('#color7').click(function () {
    $('.active, .txt-blue').css({ "color": "#1dd1a1" });
    $('.bg-blue').css({ "background-color": "#1dd1a1" });
    $('.btn-outline-option').css({ "border-color": "#1dd1a1", "color": "#1dd1a1" });
    $('.btn-outline-option').hover(function () {
      $(this).css({ "color": "white", "background-color": "#1dd1a1" });
    }, function () {
      $(this).css({ "color": "#1dd1a1", "background-color": "white" });
    });
    $('.nav-link').hover(function () {
      $(this).css({ 'color': '#55efc4' });
    }, function () {
      $(this).css({ 'color': 'rgb(91, 91, 91)' });
    });
  });
  $('#color8').click(function () {
    $('.active, .txt-blue').css({ "color": "#a29bfe" });
    $('.bg-blue').css({ "background-color": "#a29bfe" });
    $('.btn-outline-option').css({ "border-color": "#a29bfe", "color": "#a29bfe" });
    $('.btn-outline-option').hover(function () {
      $(this).css({ "color": "white", "background-color": "#a29bfe" });
    }, function () {
      $(this).css({ "color": "#a29bfe", "background-color": "white" });
    });
    $('.nav-link').hover(function () {
      $(this).css({ 'color': '#a29bfe' });
    }, function () {
      $(this).css({ 'color': 'rgb(91, 91, 91)' });
    });
  });
});

document.addEventListener('DOMContentLoaded', function (event) {
  // array with texts to type in typewriter
  var dataText = ["Calvin Carlo", "Web Developer", "UI/UX Designer"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.querySelector("#textCss").innerHTML = text.substring(0, i + 1) + '<span class="span" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] === 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 2000);
    }
    // check if dataText[i] exists
    else if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
