$(document).ready(function(){

	// Open and close mobile menu
	$('.button').on('click', function() {
		$(this).toggleClass('open');
		$('#nav-mobile').toggleClass('nav-mobile nav-mobile-show')
	});

	$('.tooltip').on('click', function() {
		$('.button').toggleClass('open');
		$('#nav-mobile').toggleClass('nav-mobile nav-mobile-show')
	});
		  
	// Activates the parallax effect
	$('.parallax').parallax();

	// animates page transition when moving to another section
	var page = $('html, body');
	$('a.tooltip').click(function(){
		page.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});

	// Fix the header when the page is scrolled
	$(document).scroll(function(){
		var topWindow = $(window).scrollTop();
		if(topWindow > 60) {
			$('header').addClass('header_fixed');
			$('.container-top img').removeClass('logo');
			$('.container-top img').addClass('logo_fixed');
		}else {
			$('header').removeClass('header_fixed');
			$('.container-top img').removeClass('logo_fixed');
			$('.container-top img').addClass('logo');
		};
	});
})
