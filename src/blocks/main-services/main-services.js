/* eslint-disable quotes */
import "../../../node_modules/jquery/dist/jquery.min.js";
import $ from "jquery";
import "../../../node_modules/slick-carousel/slick/slick.min.js";

$(document).ready( function() {

	const slider = $(".main-services-content-wrapper");
	slider.slick({
		autoplay: false,
		infinite: false,
		appendArrows: slider.parent(),
		prevArrow: `<span class="main-services-prev"><svg class="main-services-prev-icon" xmlns="http://www.w3.org/2000/svg" width="38" height="71" viewBox="0 0 38 71"><g><g><path fill="#fff" d="M.015 68.17l2.815 2.842L38.01 35.5 2.83-.012.015 2.83 32.382 35.5z"/></g></g></svg></span>`,
		nextArrow: `<span class="main-services-next"><svg class="main-services-next-icon" xmlns="http://www.w3.org/2000/svg" width="38" height="71" viewBox="0 0 38 71"><g><g><path fill="#fff" d="M.015 68.17l2.815 2.842L38.01 35.5 2.83-.012.015 2.83 32.382 35.5z"/></g></g></svg></span>`,
		responsive: [{
			breakpoint: 768,
			settings: {
				appendArrows: false,
			}
		}, {
			breakpoint: 300,
			settings: "unslick"
		}]
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
	slider.siblings(".main-services-prev").hide();
	$("a[data-slide]").click(function(e) {
		$(".main-services__tab").removeClass("main-services__tab_active");
		$(this).addClass("main-services__tab_active");
		e.preventDefault();
		var slideId = $(this).data("slide");
		slider.slick("slickGoTo", slideId);
	});
});