/* eslint-disable no-console */
import "../../../node_modules/jquery/dist/jquery.min.js";
import * as $ from "jquery";
import "../../../node_modules/bootstrap/js/dist/tab.js";

$(document).ready(function() {
	$(".products-content").on("click", ".products-tabs.nav a", function() {
		$(".nav a").removeClass("products__tab_active");
		$(this).addClass("products__tab_active");	
	});
});