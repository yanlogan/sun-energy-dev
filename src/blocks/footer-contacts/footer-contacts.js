import "../../../node_modules/jquery/dist/jquery.min.js";
import * as $ from "jquery";

$(document).ready(function() {
	$(".contacts-form").on("submit", e => {
		$(".modal-contacts").show();
		e.preventDefault();
	});
});