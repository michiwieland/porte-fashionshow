(function( $ ) {
	$(function(){
    $('#fullpage').fullpage({
      navigation: true,
      navigationPosition: 'right',
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
      controlArrows: false,
      css3: true,
    });

    $('#arrow-down').click(function(){
      $.fn.fullpage.moveSectionDown();
    });
  });
})(jQuery);