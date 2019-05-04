import "../../../node_modules/jquery/dist/jquery.min.js";
import $ from "jquery";
import "../../../node_modules/bootstrap/js/dist/tab.js";
import "../../../node_modules/bootstrap/js/dist/carousel.js";


$(document).ready( function() {

	var clickEvent = false;
	$("#servicesCarousel")
		.on("click", ".main-services-tabs.nav a", function() {
			clickEvent = true;
			$(".nav a").removeClass("main-services__tab_active");
			$(this).addClass("main-services__tab_active");		
		})
		.on("slid.bs.carousel", function() {
			if(!clickEvent) {
				var count = $(".main-services-tabs.nav").children().length -1;
				var current = $(".main-services-tabs.nav a.main-services__tab_active");
				current.removeClass("main-services__tab_active").parent().next().children().addClass("main-services__tab_active");
				var id = parseInt(current.parent().data("slideTo"));
				if(count == id) {
					$(".main-services-tabs.nav a").first().addClass("main-services__tab_active");	
				}
			}
			clickEvent = false;
		});
});