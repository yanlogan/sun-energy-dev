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
			appendArrows: false,
		}).on("afterChange", function (event, slick, currentSlide) {
			var currentTab = $(".main-products-tabs.nav a.active");
			var nextTab = currentTab.parent().next().children();
			if (!fired) {
				slider.siblings(".main-products-next").one("click", () => {
					if (nextTab.length) {
						if (currentSlide === slick.slideCount - slick.options.slidesToShow) {
							currentTab.removeClass("main-products__tab_active");
							nextTab.addClass("main-products__tab_active");
							nextTab.tab("show");
							fired = true;
						}
					}
				});
			}
			if(currentSlide === 0) {
				slider.siblings(".main-products-prev").hide();
			}
			else {
				slider.siblings(".main-products-prev").show();
			}  
		});
		slider.siblings(".main-products-prev").hide();
		slider.siblings(".main-products-prev").click(() => {
			slider.slick("slickPrev");
		});
		slider.siblings(".main-products-next").click(() => {
			slider.slick("slickNext");
		});
		$(".main-products-tabs").on("show.bs.tab", () => {
			slider.slick("slickGoTo", 0);
			fired = false;
		});
	});
	$(".main-products-content").on("click", ".main-products-tabs.nav a", function() {
		$(".nav a").removeClass("main-products__tab_active");
		$(this).addClass("main-products__tab_active");	
	});
});