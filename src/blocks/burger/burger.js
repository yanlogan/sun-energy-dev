import "../../../node_modules/jquery/dist/jquery.min.js";
import $ from "jquery";

$(document).ready( function() {

	$(".header-burger").on("click", () => {
		$(".header-menu-mob").show();
	});

});