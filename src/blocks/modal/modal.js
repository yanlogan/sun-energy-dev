import "../../../node_modules/jquery/dist/jquery.min.js";
import * as $ from "jquery";

$(document).ready(function() {
	$(".modal-close").on("click", function(e) {
		$(".modal").hide();
		e.preventDefault();
	});
	$(".modal-close-mob").on("click", function(e) {
		$(".modal").hide();
		e.preventDefault();
	});
	$(".modal-form").on("submit", e => {
		e.preventDefault();
	});
});