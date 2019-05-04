import "../../../node_modules/jquery/dist/jquery.min.js";
import $ from "jquery";
// import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../../node_modules/bootstrap/js/dist/tab.js";
import "../../../node_modules/slick-carousel/slick/slick.min.js";

// var sliderButtons = document.querySelectorAll(".header-slider__btn");
// var slides = document.querySelectorAll(".header-slider__slide");

// const resetMainSlider = () => {
// 	sliderButtons.forEach(node => {
// 		node.classList.remove("header-slider__btn_active");
// 	});
// 	slides.forEach(node => {
// 		node.style.display = "none";
// 	});
// };

// const addSliderClickHandler = (sliderButton, slide) => {
// 	sliderButton.addEventListener("click", (e) => {
// 		e.preventDefault();
// 		resetMainSlider();
// 		sliderButton.classList.add("header-slider__btn_active");
// 		slide.style.display = "block";
// 	});
// };

// const showSlide = () => {
// 	sliderButtons[0].classList.add("header-slider__btn_active");
// 	slides[0].style.display = "block";
// 	for (var i = 0; i < sliderButtons.length; i++) {
// 		addSliderClickHandler(sliderButtons[i], slides[i]);
// 	}
// };

// showSlide();

$(document).ready(function(){
	$(".header-slider .container").slick({
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: true,
		dotsClass: "header-slides"
	});
});