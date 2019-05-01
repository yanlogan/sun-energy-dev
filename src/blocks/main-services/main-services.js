var tabs = document.querySelectorAll('.main-services__tab');
var tabPanels = document.querySelectorAll('.main-services-tabcontent');
var prevButton = document.querySelector('.main-services-prev');
var nextButton = document.querySelector('.main-services-next');
var currentServiceTab = 0;

const resetTabs = () => {
	tabs.forEach(node => {
		node.classList.remove('main-services__tab_active');
	});
	tabPanels.forEach(node => {
		node.classList.remove('main-services-tabcontent_active');
		node.style.display = 'none';
	});
};

const addTabClickHandler = (tab, tabPanel, index) => {
	tab.addEventListener('click', (e) => {
		e.preventDefault();
		resetTabs();
		tab.classList.add('main-services__tab_active');
		tabPanel.classList.add('main-services-tabcontent_active');
		tabPanel.style.display = 'block';
		currentServiceTab = index;
	});
};

const showPanel = () => {
	tabs[0].classList.add('main-services__tab_active');
	tabPanels[0].classList.add('main-services-tabcontent_active');
	tabPanels[0].style.display = 'block';
	for (var i = 0; i < tabs.length; i++) {
		addTabClickHandler(tabs[i], tabPanels[i], i);
	}
};

showPanel();

const slideNext = () => {
	resetTabs();
	tabs[currentServiceTab + 1].classList.add('main-services__tab_active');
	tabPanels[currentServiceTab + 1].classList.add('main-services-tabcontent_active');
	tabPanels[currentServiceTab + 1].style.display = 'block';
	currentServiceTab++;
};

const slidePrev = () => {
	resetTabs();
	tabs[currentServiceTab - 1].classList.add('main-services__tab_active');
	tabPanels[currentServiceTab - 1].classList.add('main-services-tabcontent_active');
	tabPanels[currentServiceTab - 1].style.display = 'block';
	currentServiceTab--;
};

nextButton.addEventListener('click', () => {
	if (currentServiceTab === tabs.length - 1) currentServiceTab = -1;
	slideNext();
});

prevButton.addEventListener('click', () => {
	if (currentServiceTab === 0) currentServiceTab = tabs.length;
	slidePrev();
});