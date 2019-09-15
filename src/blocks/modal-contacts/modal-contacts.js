import "../../../node_modules/jquery/dist/jquery.min.js";
import * as $ from "jquery";

$(document).ready(function() {
	$(".modal-contacts-close").on("click", function(e) {
		$(".modal-contacts").hide();
		e.preventDefault();
	});
	$(".modal-contacts-close-mob").on("click", function(e) {
		$(".modal-contacts").hide();
		e.preventDefault();
	});
});