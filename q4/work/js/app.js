// $(function() {

//   $('.nav li').click(function() {
//     // nav liをクリックしたら下記イベントを起こす

//     var i = $('nav li').index(this);
//     // クリックしたnav li のインデックス番号を取得し、変数 i とする

//     $('.description li').addClass('is-hidden');
//     // .description li に class="is-hidden" を加える

//     $('.description li').eq(i).removeClass('is-hidden');
//     // .description liのインデックス番号 i から class="is-hidden" を外す
//   });

// });












$(function() {

  $('.nav li').click(function() {

    var i = $('.nav li').index(this);

    $('.description li').addClass('is-hidden');
    $('.description li').eq(i).removeClass('is-hidden');

  });



});