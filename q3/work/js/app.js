// $(function() {

//   $('.drawer_button').click(function() {
//     $(this).toggleClass('active');
//     $('.drawer_bg').fadeToggle();
//     $('nav').toggleClass('open')
//   });

//   $('.drawer_bg').click(function() {
//     $(this).fadeOut();
//     $('.drawer_button').removeClass('active');
//     $('nav').removeClass('open');
//   });

// });









$(function() {

  $('.drawer_button').click(function() {

    $('.drawer_button').toggleClass('active');

    $('.drawer_nav_wrapper').toggleClass('open');

    $('.drawer_bg').fadeToggle();

  });

  $('.drawer_bg').click(function() {

    $('.drawer_button').removeClass('active');

    $('.drawer_nav_wrapper').removeClass('open');

    $(this).fadeOut();

  });




});

