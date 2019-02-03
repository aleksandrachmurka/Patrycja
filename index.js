const body= document.querySelector('body');

const startLink = document.querySelector('.logo');
const showsLink = document.querySelector('[href="#shows"]');
const fotoLink = document.querySelector('[href="#foto"]');
const videoLink = document.querySelector('[href="#video"]');
const aboutLink = document.querySelector('[href="#about"]');
const contactLink = document.querySelector('[href="#contact"]');

const start = document.querySelector('.start');
const shows = document.querySelector('.shows');
const gallery = document.querySelector('.gallery');
const foto = document.querySelector('.foto');
const video = document.querySelector('.video');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');


function showStart() {
	start.style.display = 'block';
	contact.style.display = 'none';
	gallery.style.display = 'none';
	body.style.background = 'url("images/for_web/violet_wall.jpg") no-repeat center center fixed';
	body.style.backgroundSize = 'cover';
}

function showFoto() {
	gallery.style.display = 'block';
	foto.style.display = 'block';
	video.style.display = 'block';
	start.style.display = 'none';
	contact.style.display = 'none';
	body.style.background = 'black';
	body.style.backgroundSize = 'cover';
}

function showVideo() {
	gallery.style.display = 'block';
	video.style.display = 'block';
	foto.style.display = 'none';
	start.style.display = 'none';
	contact.style.display = 'none';
	body.style.background = 'black';
	body.style.backgroundSize = 'cover';
}

function showContact() {
	contact.style.display = 'block';
	start.style.display = 'none';
	gallery.style.display = 'none';
	body.style.background = 'black';
}


startLink.addEventListener('click', showStart);
fotoLink.addEventListener('click', showFoto);
videoLink.addEventListener('click', showVideo);
contactLink.addEventListener('click', showContact);

