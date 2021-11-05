// =============== javascrip index ============== //
// 1- Sticky navbar
// 2- copyright year
// ============================================== //
// 1- Sticky navbar
'use strict';
$(window).on('scroll', function () {
  if ($(window).scrollTop() >= 95 && !$('nav').hasClass('sticky')) {
    $('nav').addClass('sticky');
  } else if ($(window).scrollTop() < 95 && $('nav').hasClass('sticky')) {
    $('nav').removeClass('sticky');
  }
});
// 2- copyright year
$('.copyrightYear').text(new Date().getFullYear());
