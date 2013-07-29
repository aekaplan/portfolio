$(document).ready( function() {
  $("img.lazy").lazyload({
    effect : "fadeIn"
  });

  $(".toggle-wrap").click( function() {
    var navigation = $(".header ul");

    if (navigation.hasClass("visible")) {
      navigation.removeClass("visible").addClass("hidden");
    } else {
      navigation.removeClass("hidden").addClass("visible");
    }
  });

  $(function() {
    var $window = $(window),
        main   = $('.sidebar-container'),
        sidebar = $('.sidebar');

    function floatSidebarMenu() {
      if ($window.scrollTop() > main.position().top)
        sidebar.addClass("fixed");
      else
        sidebar.removeClass("fixed");
    }

    $(window).resize(floatSidebarMenu);
    $(window).scroll(floatSidebarMenu);
  });

  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
  });
});
