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
	console.log('p');
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
