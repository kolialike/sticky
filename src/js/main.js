jQuery(function($){
  //script-stiky
	var $window = $(window);
	var $bar = $('.bar'); 
	$bar.each(function(index, el) {
		var thisBar = $(this).wrap('<div class="followWrap" />');
		var thisBarTop = thisBar.offset().top;
		$window.on('scroll', function() {
			var windowTop = $window.scrollTop();
			if(windowTop >= thisBarTop){
				thisBar.addClass("bar-fixed");
			}else{
				thisBar.removeClass("bar-fixed");
			}
		});
	});
});
