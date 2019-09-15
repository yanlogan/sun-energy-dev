import "../../../node_modules/jquery/dist/jquery.min.js";
import $ from "jquery";
import "../../../node_modules/bootstrap/js/dist/tab.js";
import "../../../node_modules/slick-carousel/slick/slick.min.js";

$(document).ready( function() {

	$(".header-slider-bg").slick({
		infinite: true,
		autoplay: false,
		pauseOnHover: false,
		// autoplaySpeed: 5000,
		appendArrows: false,
		dots: false,
	});

	$(".header-slider").slick({
		infinite: true,
		autoplay: true,
		pauseOnHover: false,
		autoplaySpeed: 5000,
		appendArrows: false,
		dots: true,
		asNavFor: ".header-slider-bg"
	});

});