import "../../../node_modules/jquery/dist/jquery.min.js";
import * as $ from "jquery";

$(document).ready(function() {
	$(".modal-contacts-close").on("click", function() {
		$(".modal-contacts").hide();
	});
	$(".modal-contacts-close-mob").on("click", function() {
		$(".modal").hide();
	});
});