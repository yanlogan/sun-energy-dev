import "../../../node_modules/jquery/dist/jquery.min.js";
import * as $ from "jquery";
import "../../../node_modules/bootstrap/js/dist/tab.js";
import "../../../node_modules/bootstrap/js/dist/carousel.js";

import "../../../node_modules/owl.carousel/dist/owl.carousel.min.js";

$(document).ready(function(){
	var owl = $(".main-products .owl-carousel");
	owl.owlCarousel({
		loop: false,
		rewind: true, // rewind to first on navigation end
		margin:10,
		nav: true,
		navSpeed: 1000,
		dots: false,
		// navContainerClass: "main-products-nav"
	})
		.on("change.owl.carousel", function(e){
			console.log("Carousel state changed");
		});

	// this code just styles active tab on click on it, not on carousel change
	$(".main-products-content")
		.on("click", ".main-products-tabs.nav a", function() {
			$(".nav a").removeClass("main-products__tab_active");
			$(this).addClass("main-products__tab_active");		
		});
	
});