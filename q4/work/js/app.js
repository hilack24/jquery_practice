$(function() {

  $('.nav li').click(function() {

    var i = $('nav li').index(this);

    $('.description li').addClass('is-hidden');
    $('.description li').eq(i).removeClass('is-hidden');

  });

});