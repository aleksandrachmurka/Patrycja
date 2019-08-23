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

	history.replaceState({}, 'Home', '#home' );

	window.addEventListener('popstate', change);
}

function showSection(event) {
	event.preventDefault();
	let targetSection = event.target.getAttribute('data-link');
	document.querySelector('.active').classList.remove('active');

	if (targetSection === 'home') {
		body.style.background = 'url("images/for_web/violet_wall.jpg") no-repeat top center fixed';
		body.style.backgroundSize = 'cover';
	} else {
		body.style.background = 'black';
	}

	document.getElementsByClassName(targetSection)[0].classList.add('active');

	history.pushState({}, '', `#${targetSection}`);
}

function change(event) {
	let hash = location.hash.replace('#','');
	console.log(hash)
	document.querySelector('.active').classList.remove('active');
	document.getElementsByClassName(hash)[0].classList.add('active');

	if (hash === 'home') {
		body.style.background = 'url("images/for_web/violet_wall.jpg") no-repeat top center fixed';
		body.style.backgroundSize = 'cover';
	} else {
		body.style.background = 'black';
	}

}

document.addEventListener('DOMContentLoaded', init);