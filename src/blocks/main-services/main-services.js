import "../../../node_modules/jquery/dist/jquery.min.js";
import $ from "jquery";
import "../../../node_modules/slick-carousel/slick/slick.min.js";

$(document).ready( function() {

	const slider = $(".main-services-content-wrapper");
	slider.slick({
		autoplay: false,
		infinite: false,
		appendArrows: false,
	}).on("afterChange", function(event, slick, currentSlide) {
		$(".main-services__tab").removeClass("main-services__tab_active");
		$(`a[data-slide=${currentSlide}]`).addClass("main-services__tab_active");
		if(currentSlide === 0) {
			slider.siblings(".main-services-prev").hide();
		}
		else {
			slider.siblings(".main-services-prev").show();
		}
		if(currentSlide === slick.slideCount - 1) {
			slider.siblings(".main-services-next").hide();
		}
		else {
			slider.siblings(".main-services-next").show();
		}   
	});
	$("a[data-slide]").click(function(e) {
		$(".main-services__tab").removeClass("main-services__tab_active");
		$(this).addClass("main-services__tab_active");
		e.preventDefault();
		var slideId = $(this).data("slide");
		slider.slick("slickGoTo", slideId);
	});
	slider.siblings(".main-services-prev").hide();
	slider.siblings(".main-services-prev").click(() => {
		slider.slick("slickPrev");
	});
	slider.siblings(".main-services-next").click(() => {
		slider.slick("slickNext");
	});
});