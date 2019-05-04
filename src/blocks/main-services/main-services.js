import "../../../node_modules/jquery/dist/jquery.min.js";
import $ from "jquery";
import "../../../node_modules/bootstrap/js/dist/tab.js";
import "../../../node_modules/bootstrap/js/dist/carousel.js";

$(document).ready( function() {
	$('#servicesCarousel').carousel({
		interval:   4000
});

var clickEvent = false;
$('#servicesCarousel').on('click', '.nav a', function() {
		clickEvent = true;
		$('.nav a').removeClass('main-services__tab_active');
		$(this).addClass('main-services__tab_active');		
}).on('slid.bs.carousel', function(e) {
	if(!clickEvent) {
		var count = $('.nav').children().length -1;
		var current = $('.nav a.main-services__tab_active');
		current.removeClass('main-services__tab_active').parent().next().children().addClass('main-services__tab_active');
		var id = parseInt(current.parent().data('slide-to'));
		if(count == id) {
			$('.nav a').first().addClass('main-services__tab_active');	
		}
	}
	clickEvent = false;
});
});