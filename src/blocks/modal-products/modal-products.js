import "../../../node_modules/jquery/dist/jquery.min.js";
import * as $ from "jquery";

$(document).ready(function() {
	$(".modal-products-close").on("click", function() {
		$(".modal-products").hide();
	});
	$(".modal-products-close-mob").on("click", function() {
		$(".modal-products").hide();
	});
});