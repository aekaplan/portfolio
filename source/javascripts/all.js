$(document).ready( function() {
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
});
