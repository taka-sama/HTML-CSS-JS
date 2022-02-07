// https://github.com/LadyBiosphere/animated-counterの改変
$('#box1').on('inview', function(event, isInView) {
  if (isInView) {
    //要素が見えたときに実行する処理
    $("#box1 .count-up").each(function(){
      $(this).prop('Counter',4560000).animate({//0からカウントアップ
            Counter: $(this).text()
        }, {
        // スピードやアニメーションの設定
            duration: 3000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
            easing: 'swing',//動きの種類。他にもlinearなど設定可能
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
  }
});