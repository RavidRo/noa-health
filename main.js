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
import './styles/animation.css';

// Setting the copyright's year
function setCopyrightYear() {
	document.querySelector('#copyright-year').innerHTML = new Date().getFullYear();
}

// Connecting the config file
import config from './config.json';
function initiateTextFromConfig() {
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
	const helps = config.helpwith.helps.map((help, index) => {
		let div = document.createElement('div');
		let h4 = document.createElement('h4');
		let h1 = document.createElement('h1');

		div.classList = 'help';
		h4.classList = 'text';
		h1.classList = 'number';

		h4.innerHTML = help;
		h1.innerHTML = `0${index + 1}`;

		div.replaceChildren(h4, h1);

		return div;
	});
	document.querySelector('#helps-list').replaceChildren(...helps);

	// Social Media
	document.querySelector('#social-media-title').innerHTML = config['social-media'].title;
	document
		.querySelector('#instagram-link')
		.setAttribute('href', config['social-media'].instagram);
	document.querySelector('#youtube-link').setAttribute('href', config['social-media'].youtube);
	// Services
	document.querySelector('#workshop-title').innerHTML = config.services['workshop'].title;
	document.querySelector('#workshop-description').innerHTML = config.workshop.opening;
	document.querySelector('#coaching-title').innerHTML =
		config.services['personal-coaching'].title;
	document.querySelector('#coaching-description').innerHTML =
		config.coaching['first-paragraphs'][0];
	// Workshop
	document.querySelector('#popup-workshop-title').innerHTML = config.workshop.title;
	document.querySelector('#popup-workshop-opening').innerHTML = config.workshop.opening;
	const infoElements = config.workshop.information.map((paragraph) => {
		let p = document.createElement('p');
		p.innerHTML = `- ${paragraph}`;
		return p;
	});
	document.querySelector('#popup-workshop-information').replaceChildren(...infoElements);
	document.querySelector('#popup-workshop-second-title').innerHTML =
		config.workshop['second-title'];
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
	document.querySelector('#popup-coaching-second-title').innerHTML =
		config.coaching['second-title'];
	const info2Elements = config.coaching['second-paragraphs'].map((paragraph) => {
		let p = document.createElement('p');
		p.innerHTML = paragraph;
		return p;
	});
	document.querySelector('#popup-coaching-information-2').replaceChildren(...info2Elements);
	document.querySelector('#contact-form-title').innerHTML = config['contact-form-title'];
	document.querySelector('#more-details-workshop').innerHTML = config['more-details-workshop'];
	document.querySelector('#more-details-coaching').innerHTML = config['more-details-coaching'];
}

// Opening and closing the modal
function connectionModalsFunctionality() {
	let modals = document.querySelectorAll('[data-modal]');

	modals.forEach(function (trigger) {
		trigger.addEventListener('click', function (event) {
			event.preventDefault();
			let modal = document.getElementById(trigger.dataset.modal);
			modal.classList.add('open');
			let exits = modal.querySelectorAll('.modal-exit');

			function exitEvent(event) {
				event.preventDefault();
				modal.classList.remove('open');
			}

			let callToActionButton = document.getElementById('call-to-action-button');
			let contactForm = document.getElementById('contactme');
			callToActionButton.addEventListener('click', function (event) {
				event.preventDefault();
				exitEvent(event);
				contactForm.scrollIntoView({ behavior: 'smooth' });
			});
			exits.forEach(function (exit) {
				exit.addEventListener('click', exitEvent);
			});
		});
	});
}

function attachFormSubmitEvent(formId) {
	function formSubmit(event) {
		var url = `https://formsubmit.co/${config.email}`;
		var request = new XMLHttpRequest();
		request.open('POST', url, true);
		request.onload = function () {
			// request successful
			// we can use server response to our request now
		};

		request.onerror = function () {
			// request failed
			// console.log('Fail :(');
		};

		request.send(new FormData(event.target)); // create FormData from form that triggered event
		event.preventDefault();
		alert(config['contact-form-submit-message']);
	}

	document.getElementById(formId).addEventListener('submit', formSubmit);
}

function observeAnimations() {
	const inViewport = (entries, observer) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle('is-inViewport', entry.isIntersecting);
		});
	};

	const Obs = new IntersectionObserver(inViewport);
	const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

	// Attach observer to every [data-inviewport] element:
	const ELs_inViewport = document.querySelectorAll('[animation]');
	ELs_inViewport.forEach((EL) => {
		Obs.observe(EL, obsOptions);
	});
}
function cancelAnimations() {
	document.querySelectorAll('[animation]').forEach((element) => {
		element.classList.add('is-inViewport');
	});
}

function onMobile() {
	let check = false;
	(function (a) {
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				a
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				a.substr(0, 4)
			)
		)
			check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);
	return check;
}

initiateTextFromConfig();
connectionModalsFunctionality();
setCopyrightYear();
if (onMobile()) {
	observeAnimations();
} else {
	cancelAnimations();
}
attachFormSubmitEvent('fs-frm');
