$(document).ready(function() {
	$('.slider').slick({
		speed: 700,
		infinite: true,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow:2,
					slidesToScroll: 1,
					speed: 700,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow:2,
					slidesToScroll: 1,
					speed: 700,
					infinite: true,
					dots: false,
					arrows: false
				}
			}
		]
	});
});