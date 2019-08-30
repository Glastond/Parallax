$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  $(".bird-logo").css({
    transform: "translate(0px, " + wScroll / 2 + "%)"
  });

  $(".back-bird").css({
    transform: "translate(0px, " + wScroll / 4 + "%)"
  });

  $(".fore-bird").css({
    transform: "translate(0px, -" + wScroll / 40 + "%)"
  });

  // Landing Element
  if (wScroll > $(".models").offset().top - $(window).height() / 1.2) {
    $(".models figure").each(function(i) {
      setTimeout(function() {
        $(".models figure")
          .eq(i)
          .addClass("is-showing");
      }, 700 * Math.exp(i * 0.14) - 700);
    });
  }
  if (wScroll > $(".large-window").offest().top - $("window").height()) {
    $(".large-window").css({
      "background-position": "center" + wScroll + "px"
    });
  }
});
