import "../../../node_modules/jquery/dist/jquery.min.js";
import * as $ from "jquery";

$(document).ready(function() {
	$(".header-menu__btn").on("click", function() {
		$(".modal").show();
	});
	$(".header-menu-mob-close").on("click", function() {
		$(".header-menu-mob").hide();
	});
});