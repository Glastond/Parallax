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

  //   Promoscope

  if (wScroll > $(".large-window").offset().top - $("window").height()) {
    $(".large-window").css({
      "background-position":
        "center " + (wScroll - $(".large-window").offset().top) + "px"
    });
    var opacity =
      (wScroll - $(".large-window").offset().top + 400) / (wScroll / 4);

    $(".window-tint").css({ opacity: opacity });
  }

  //  Flying Elements
  if (wScroll > $(".blog-posts").offset().top - $(window).height()) {
    var offset = Math.min(
      0,
      wScroll - $(".blog-posts").offset().top + $(window).height() - 350
    ).toFixed();

    $(".post-1").css({
      transform: "translate(" + offset + "px, " + Math.abs(offset * 0.2) + "px)"
    });

    $(".post-3").css({
      transform:
        "translate(" +
        Math.abs(offset) +
        "px, " +
        Math.abs(offset * 0.2) +
        "px)"
    });
  }
});
