$(document).ready(function() {
// burger
	$('.burger-nav').on('click tap', function(){
		console.log('burgs');
		$('.nav-links-wrap').toggleClass('burger');
	});
// Nav fixed when scroll
	$(window).scroll(function() {
		console.log('fixed scroll');
		if ($(window).scrollTop() > 50 && $(window).width() > 940) {
			$('.header-nav').addClass('navbar-fixed');
		}
		if ($(window).scrollTop() < 51) {
			$('.header-nav').removeClass('navbar-fixed');
		}
	});

	$(window).scroll(function() {
		console.log('scrolling');
		if ($(window).scrollTop() > 50 && $(window).width() < 940) {
			$('.header-nav').addClass('navbar-fixed');
		}
		if ($(window).scrollTop() < 51) {
			$('.header-nav').removeClass('navbar-fixed');
		}
	});
// Smooth scroll
	$('.header-mouse').click(function() {
		console.log('smooth');
		$('html, body').animate({
			scrollTop: $('#about').offset().top},
			'slow');
	});

	$('.toTop').click(function() {
		console.log('toTop');
		$('html, body').animate({
			scrollTop: $('header').offset().top},
			'slow');
	});

});

