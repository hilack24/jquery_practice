// $(function() {

//   $('.dropdwn li').hover(
//     function() {
//       $(this).children('ul').slideDown();
//     },
//     function() {
//       $(this).children('ul').slideUp();
//     }
//   );

// });








$(function() {

  $('.dropdwn li').hover(
    function() {
      $(this).children('.dropdwn_menu').slideDown();
    },
    function() {
      $(this).children('.dropdwn_menu').slideUp();
    }
  );




});

