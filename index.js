const body= document.querySelector('body');

function init() {
	if (navigator.serviceWorker) {
	  navigator.serviceWorker.register('./service_worker.js')
	    .then(function() {
	      console.log('Service Worker registered');
	    }).catch(function(err) {
	      console.log('Failed to register Service Worker' + err);
	    });
	}

	document.querySelectorAll('[data-link]').forEach( function(link) {
		link.addEventListener('click', showSection);
	});

	document.querySelector('#gallery-link').addEventListener('focus', showGalleryMenu);

	history.replaceState({}, 'Home', '#home' );

	window.addEventListener('popstate', change);
}

function showSection(event) {
	event.preventDefault();
	let targetSection = event.target.getAttribute('data-link');
	document.querySelector('.active').classList.remove('active');

	handleBackground(targetSection);
	handleNav(targetSection);

	document.getElementsByClassName(targetSection)[0].classList.add('active');

	history.pushState({}, '', `#${targetSection}`);
}

function change(event) {
	let hash = location.hash.replace('#','');
	document.querySelector('.active').classList.remove('active');
	document.getElementsByClassName(hash)[0].classList.add('active');

	handleBackground(hash);
	handleNav(hash);
}

function handleBackground(section) {
	if (section === 'home') {
		body.style.background = 'url("images/for_web/violet_wall.jpg") no-repeat top center fixed';
		body.style.backgroundSize = 'cover';
	} else {
		body.style.background = 'black';
	}
}

function handleNav(section) {
	if (section !== 'home') {
		document.querySelector('header').classList.add('header--section');
		document.querySelector('.navbar').classList.add('navbar--section');
	} else {
		document.querySelector('header').classList.remove('header--section');
		document.querySelector('.navbar').classList.remove('navbar--section');
	}
}

function showGalleryMenu() {
	this.setAttribute('aria-expanded', 'true');
	document.querySelector('ul[aria-hidden]').setAttribute('aria-hidden', 'false');
}

document.addEventListener('DOMContentLoaded', init);