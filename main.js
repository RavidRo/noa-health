import './style.css';
import './styles/findme.css';
import './styles/helps.css';
import './styles/joinme.css';
import './styles/about.css';
import './styles/intro.css';
import './styles/header.css';
import './styles/contactform.css';
import './styles/footer.css';
import './styles/modal.css';

// Setting the copyright's year
document.querySelector('#copyright-year').innerHTML = new Date().getFullYear();

// Connecting the config file
import config from './config.json';
// Header
document.querySelector('#title').innerHTML = config.header.title;
document.querySelector('#catch-phrase').innerHTML = config.header['catch-phrase'];
// Intro
document.querySelector('#quote').innerHTML = config.intro.quote;
document.querySelector('#intro-services').innerHTML = config.intro.services.join(' | ');
// About
document.querySelector('#about-title').innerHTML = config.about.title;
document.querySelector('#about-opening').innerHTML = config.about.opening;
const paragraphsElements = config.about.paragraphs.map((paragraph) => {
	let p = document.createElement('p');
	p.innerHTML = paragraph;
	return p;
});
document.querySelector('#about-paragraphs').replaceChildren(...paragraphsElements);
//Join Me
document.querySelector('#join-title-1').innerHTML = config.joinme.title.part1;
document.querySelector('#join-title-bold').innerHTML = config.joinme.title.boldPart;
document.querySelector('#join-title-2').innerHTML = config.joinme.title.part2;
document.querySelector('#join-reason-1').innerHTML = config.joinme.reason1;
document.querySelector('#join-reason-2').innerHTML = config.joinme.reason2;
//Help
document.querySelector('#helps-title').innerHTML = config.helpwith.title;
// Social Media
document.querySelector('#social-media-title').innerHTML = config['social-media'].title;
document.querySelector('#instagram-link').setAttribute('href', config['social-media'].instagram);
document.querySelector('#youtube-link').setAttribute('href', config['social-media'].youtube);
// Services
document.querySelector('#workshop-title').innerHTML = config.services['workshop'].title;
document.querySelector('#coaching-title').innerHTML = config.services['personal-coaching'].title;
// Workshop
document.querySelector('#popup-workshop-title').innerHTML = config.workshop.title;
document.querySelector('#popup-workshop-opening').innerHTML = config.workshop.opening;
const infoElements = config.workshop.information.map((paragraph) => {
	let p = document.createElement('p');
	p.innerHTML = paragraph;
	return p;
});
document.querySelector('#popup-workshop-information').replaceChildren(...infoElements);
document.querySelector('#popup-workshop-second-title').innerHTML = config.workshop['second-title'];
const intendedToElements = config.workshop['intended-to'].map((paragraph) => {
	let p = document.createElement('p');
	p.innerHTML = paragraph;
	return p;
});
document.querySelector('#popup-workshop-intended-to').replaceChildren(...intendedToElements);
document.querySelector('#popup-workshop-ending').innerHTML = config.workshop['save-your-seat'];
// Coaching
document.querySelector('#popup-coaching-title').innerHTML = config.coaching.title;
const info1Elements = config.coaching['first-paragraphs'].map((paragraph) => {
	let p = document.createElement('p');
	p.innerHTML = paragraph;
	return p;
});
document.querySelector('#popup-coaching-information-1').replaceChildren(...info1Elements);
document.querySelector('#popup-coaching-second-title').innerHTML = config.coaching['second-title'];
const info2Elements = config.coaching['second-paragraphs'].map((paragraph) => {
	let p = document.createElement('p');
	p.innerHTML = paragraph;
	return p;
});
document.querySelector('#popup-coaching-information-2').replaceChildren(...info2Elements);

// Opening and closing the modal
var modals = document.querySelectorAll('[data-modal]');

modals.forEach(function (trigger) {
	trigger.addEventListener('click', function (event) {
		event.preventDefault();
		var modal = document.getElementById(trigger.dataset.modal);
		modal.classList.add('open');
		var exits = modal.querySelectorAll('.modal-exit');
		exits.forEach(function (exit) {
			exit.addEventListener('click', function (event) {
				event.preventDefault();
				modal.classList.remove('open');
			});
		});
	});
});
