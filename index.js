const body= document.querySelector('body');


function init() {
	document.querySelectorAll('[data-link]').forEach( function(link) {
		link.addEventListener('click', showSection);
	});

	history.replaceState({}, 'Start', '#start' );

	window.addEventListener('popstate', change);
}

function showSection(event) {
	event.preventDefault();
	let targetSection = event.target.getAttribute('data-link');
	document.querySelector('.active').classList.remove('active');

	if (targetSection === 'start') {
		body.style.background = 'url("images/for_web/violet_wall.jpg") no-repeat center center fixed';
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

	if (hash === 'start') {
		body.style.background = 'url("images/for_web/violet_wall.jpg") no-repeat center center fixed';
		body.style.backgroundSize = 'cover';
	} else {
		body.style.background = 'black';
	}

}

document.addEventListener('DOMContentLoaded', init);

// Steve Griffith https://gist.github.com/prof3ssorSt3v3/f00d99fb69272fc2e0e4f4dd46e89f41