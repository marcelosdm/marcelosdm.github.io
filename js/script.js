$(document).ready(function(){

	$('.button').on('click', function() {
		$(this).toggleClass('open');
		$('#nav-mobile').toggleClass('nav-mobile nav-mobile-show')
	});
	  
	// $(window).resize(function() {
	// 	if($(window).width() >= '600') {
	// 		$('header > nav').css('display', 'block');
	// 	}
	// })
	
	$('.parallax').parallax();

	$('a.tooltip').mouseover(function(){
		var texto = $(this).attr('data-tooltip');
		// $(this).children('.text_tooltip').html(texto);
		// $(this).children('.text_tooltip').css('opacity', '1');
	});

	// $('a.tooltip').mouseout(function(){
	// 	$(this).children('.text_tooltip').css('opacity', '0');
	// });

	// $('.text_tooltip').mouseover(function(e){
	// 	e.stopPropagation();
	// });

	var page = $('html, body');
	$('a.tooltip').click(function(){
		page.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
	// $('.header-nav-link').click(function(){
	// 	page.animate({
	// 		scrollTop: $( $.attr(this, 'href') ).offset().top
	// 	}, 500);
	// 	return false
	// });

	// $('.nav-mobile').mouseover(function(){
	// 	$('.btn-more-itens').addClass('btn-more-show');
	// });
	// $('.nav-mobile').mouseout(function(){
	// 	$('.btn-more-itens').removeClass('btn-more-show');
	// });

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
