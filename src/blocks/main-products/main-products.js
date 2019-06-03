/* eslint-disable quotes */
/* eslint-disable no-console */
import "../../../node_modules/jquery/dist/jquery.min.js";
import * as $ from "jquery";
import "../../../node_modules/bootstrap/js/dist/tab.js";
import "../../../node_modules/slick-carousel/slick/slick.min.js";

$(document).ready(function() {

	$(".slider").each(function() {
		const slider = $(this);
		var fired = false;
		slider.slick({
			infinite: false,
			autoplay: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			appendArrows: slider.parent(),
			prevArrow: `<span class="main-products-prev"><svg class="main-products-prev-icon" xmlns="http://www.w3.org/2000/svg" width="38" height="71" viewBox="0 0 38 71"><g><g><path d="M.015 68.17l2.815 2.842L38.01 35.5 2.83-.012.015 2.83 32.382 35.5z"/></g></g></svg></span>`,
			nextArrow: `<span class="main-products-next"><svg class="main-products-next-icon" xmlns="http://www.w3.org/2000/svg" width="38" height="71" viewBox="0 0 38 71"><g><g><path d="M.015 68.17l2.815 2.842L38.01 35.5 2.83-.012.015 2.83 32.382 35.5z"/></g></g></svg></span>`,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 665,
				settings: {
					slidesToShow: 1,
					appendArrows: false,
					dots: true
				}
			}, {
				breakpoint: 300,
				settings: "unslick"
			}]
		}).on("afterChange", function (event, slick, currentSlide) {
			// var currentTab = $(".main-products-tabs.nav a.active");
			// var nextTab = currentTab.parent().next().children();
			
			// $(this).siblings(".main-products-next.slick-disabled").one("click", () => {
			// 	if (!fired && nextTab.length) {
			// 		if (currentSlide === slick.slideCount - slick.options.slidesToShow) {
			// 			currentTab.removeClass("main-products__tab_active");
			// 			nextTab.addClass("main-products__tab_active");
			// 			nextTab.tab("show");
			// 			fired = true;
			// 		}
			// 	}
				
			// });

			if (currentSlide >= slick.slideCount / 2) {
				$(".slick-dots li").removeClass("smaller-dot");
				$(".slick-dots li:first-child").addClass("smaller-dot");
			} else {
				$(".slick-dots li").removeClass("smaller-dot");
				$(".slick-dots li:last-child").addClass("smaller-dot");
			}
			if(currentSlide === 0) {
				slider.siblings(".main-products-prev").hide();
			} else {
				slider.siblings(".main-products-prev").show();
			}
			if(currentSlide === slick.slideCount - slick.options.slidesToShow) {
				slider.siblings(".main-products-next").hide();
			} else {
				slider.siblings(".main-products-next").show();
			}   
		});
		slider.siblings(".main-products-prev").hide();
		$(".main-products-tabs").on("show.bs.tab", () => {
			slider.slick("slickGoTo", 0);
			fired = false;
		});
	});
	$(".slick-dots li:last-child").addClass("smaller-dot");
	$(".main-products-content").on("click", ".main-products-tabs.nav a", function() {
		$(".nav a").removeClass("main-products__tab_active");
		$(this).addClass("main-products__tab_active");	
	});
});