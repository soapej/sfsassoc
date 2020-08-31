$(function(){

	var slides = [
		"Contingency Fee - If I am not successful, there is no charge",
		"Participate in my fee sharing arrangement",
		"I will aggressively negotiate the most favorable settlement terms for you"
	];

	
	function blueNav(){
		$('nav').css('background-color', '#d1edfa');
	}
	function clearNav(){
		$('nav').css('background-color', 'transparent');
	}


	$('.articles a').mouseenter(function(){
		$(this).find('.text').addClass('show');
		$(this).find('.article-img').removeClass('show');
	});
	$('.articles a').mouseleave(function(){
		$(this).find('.text').removeClass('show')
		$(this).find('.article-img').addClass('show');
	});
	
	$(window).scroll(function(){
		if($(window).scrollTop() > 90) {
			blueNav();
		} else {
			clearNav();
		}
	});

});