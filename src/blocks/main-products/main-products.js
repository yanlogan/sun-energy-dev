/* eslint-disable no-console */
import "../../../node_modules/jquery/dist/jquery.min.js";
import * as $ from "jquery";
import "../../../node_modules/bootstrap/js/dist/tab.js";
import "../../../node_modules/bootstrap/js/dist/carousel.js";

import "../../../node_modules/owl.carousel/dist/owl.carousel.min.js";

$(document).ready(function(){
	var owl = $(".main-products .owl-carousel");
	owl.owlCarousel({
		loop:false,
		margin:10,
		nav: true,
		navSpeed: 1000,
		dots: false,
		// navContainerClass: "main-products-nav"
	})
		.on("changed.owl.carousel", function(e){
			console.log("Carousel state changed");
			var currentTab = $(".main-products-tabs.nav a.active");
			var nextTab = currentTab.parent().next().children();
			console.log("Next tab: " + nextTab.html());
			// if it's not the last tab
			if (nextTab.length) { //!currentTab.parent().is(".main-products-tabs:last-child"
			// then if the last item is shown and there's nothing left to scroll
				if (e.item.index === e.item.count - e.page.size) {
					// if we click next
					$(".owl-next.disabled").one("click", () => {
						console.log("Disabled button clicked");
						// carousel resets so if we switch back to this tab, items start from 0 again
						owl.trigger("to.owl.carousel", [0]);
						console.log("Carousel reset to 0 item");
						// make next tab active
						// main-products__tab_active just styles the active tab color and underline
						currentTab.removeClass("main-products__tab_active");
						nextTab.addClass("main-products__tab_active");
						nextTab.tab("show");	
					}
					);
					
				}
			}
		});

	// this code just styles active tab on click on it, not on carousel
	$(".main-products-content")
		.on("click", ".main-products-tabs.nav a", function() {
			$(".nav a").removeClass("main-products__tab_active");
			$(this).addClass("main-products__tab_active");		
		});
	
});