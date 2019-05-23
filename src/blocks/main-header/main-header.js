import "../../../node_modules/jquery/dist/jquery.min.js";
import $ from "jquery";
import "../../../node_modules/bootstrap/js/dist/tab.js";
import "../../../node_modules/bootstrap/js/dist/carousel.js";

$(document).ready( function() {

	var clickEvent = false;
	$("#mainCarousel")
		.on("click", ".header-slides.nav div", function() {
			clickEvent = true;
			$(".nav div").removeClass("header-slider__btn_active");
			$(this).addClass("header-slider__btn_active");
		})
		.on("slid.bs.carousel", function() {
			if(!clickEvent) {
				var count = $(".header-slides.nav").children().length -1;
				var current = $(".header-slides.nav div.header-slider__btn_active");
				current.removeClass("header-slider__btn_active").next().addClass("header-slider__btn_active");
				var id = parseInt(current.data("slideTo"));
				if(count == id) {
					$(".header-slides.nav div").first().addClass("header-slider__btn_active");	
				}
			}
			clickEvent = false;
		});
});