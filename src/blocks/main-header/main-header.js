var sliderButtons = document.querySelectorAll('.header-slider__btn');
var slides = document.querySelectorAll('.header-slider__slide');

var currentMainSlider = 0;

const resetMainSlider = () => {
	sliderButtons.forEach(node => {
		node.classList.remove('header-slider__btn_active');
	});
	slides.forEach(node => {
		node.style.display = 'none';
	});
};

const addSliderClickHandler = (sliderButton, slide, index) => {
	sliderButton.addEventListener('click', (e) => {
		e.preventDefault();
		resetMainSlider();
		sliderButton.classList.add('header-slider__btn_active');
		slide.style.display = 'block';
		currentMainSlider = index;
	});
};

const showSlide = () => {
	sliderButtons[0].classList.add('header-slider__btn_active');
	slides[0].style.display = 'block';
	for (var i = 0; i < sliderButtons.length; i++) {
		addSliderClickHandler(sliderButtons[i], slides[i], i);
	}
};

showSlide();