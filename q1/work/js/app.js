
// $(function () {
//   $("#q1").css("color", "green");
//   // idのq1を取得。cssを操作、緑に文字色を変更。

//   $("#q2").on("click", function() {$("#q2").css("background", "white")});
//   // idのq2を取得。クリックしてq2のcssを操作、背景を白に変更。

//   $("#q3").on("click", function() {$("#q3").fadeOut(3000)});
//   // idのq3を取得。クリックしてq3を3秒でフェードアウト。

//   $("#q4").on("click", function() {$("#q4").addClass("large")});
//   // idのq4を取得。クリックしてq4に class="large" を追加。

//   $("#q5").on("click", function() {$("#q5_center").append('<button id="q5" class="btn">Q5</button>')});
//   // idのq5を取得。クリックして#q5_center内に <button id="q5" class="btn">Q5</button> を追加。

//   $("#q6").on("click", function() {$("#q6").animate({"margin-top": 100, "margin-left": 100}, 2000)});
//   // idのq6を取得。クリックして#q6を margin-top: 100, margin-left: 100 を2秒かけてアニメーションさせる。 

//   $("#q7").on("click", function() {console.log(this)});
//   // idのq7を取得。クリックして#7自身をコンソールに表示する。
  
//   $("#q8").on({
//     // idのq8を取得。
//     mouseenter: function() {$(this).addClass("large")},
//     // マウスが対象の上にあるとき、class="large" を id="q8" に追加。
//     mouseleave: function() {$(this).removeClass("large")}
//     // マウスが対象から外れたとき、class="large" を id="q8" から削除。
//   });

//   $("#q9 li").on("click", function() {
//     // idの9の子要素 li を取得、クリック時のイベントを設定する。
//     let i = $(this).index();
//     // i をそれ自身のインデックス番号とする。
//     alert(i + 1);
//     // iに1を足したアラートを表示する。
//   });

//   $("#q10 li").on("click", function() {
//     // idの10の子要素 li を取得、クリック時のイベントを設定する。
//     let i = $(this).index();
//     // i をそれ自身のインデックス番号とする。
//     $("#q11 li").eq(i).addClass("large-text");
//     //class="large-text" を #q11 li のインデックス番号に追加。
//   });

// });


$(function() {

  $('#q1').css('color', 'green');

  $('#q2').click(function() {
    $('#q2').css('background-color', 'pink');
  });

  $('#q3').click(function() {
    $('#q3').fadeOut(3000);
  });

  $('#q4').click(function() {
    $('#q4').addClass('large');
  });

  $('#q5').click(function() {
    $(this)
    .prepend("DOMの中の前")
    .append("DOMの中の後")
    .before("DOMの前")
    .after("DOMの後");
  });

  $('#q6').click(function() {
    $(this).animate({
      'margin-top': 100,
      'margin-left': 100
    }, 2000);
  });

  $('#q7').click(function() {
    console.log(this);
  });

  $('#q8').hover(
    function() {
      $(this).addClass('large');
    },
    function() {
      $(this).removeClass('large');
    }
  );

  $('#q9 li').click(function() {
    alert($(this).index());
  });

  $('#q10 li').click(function() {
    var i = $(this).index();
    $('#q11 li').eq(i).addClass('large-text');
  });

});


