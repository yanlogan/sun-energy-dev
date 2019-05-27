import "../../../node_modules/jquery/dist/jquery.min.js";
import * as $ from "jquery";

$(document).ready(function() {
	$(".modal-close").on("click", function() {
		$(".modal").hide();
	});
});