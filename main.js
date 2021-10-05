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

document.querySelector('#copyright-year').innerHTML = new Date().getFullYear();

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
