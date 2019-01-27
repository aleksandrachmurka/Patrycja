const body= document.querySelector('body');

const startLink = document.querySelector('.logo');
const showsLink = document.querySelector('[href="#shows"]');
const galleryLink = document.querySelector('[href="#gallery"]');
const aboutLink = document.querySelector('[href="#about"]');
const contactLink = document.querySelector('[href="#contact"]');

const start = document.querySelector('.start');
const shows = document.querySelector('.shows');
const gallery = document.querySelector('.gallery');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

function showStart() {
	contact.style.display = 'none';
	start.style.display = 'block';
	body.style.background = 'url("images/for_web/violet_wall.jpg") no-repeat center center fixed';
	body.style.backgroundSize = 'cover';
}

function showGallery() {
	gallery.style.display = 'block';
	start.style.display = 'none';
	body.style.background = 'url("images/for_web/glitter.jpg") no-repeat center center fixed';
	body.style.backgroundSize = 'cover';
}

function showContact() {
	contact.style.display = 'block';
	start.style.display = 'none';
	contact.style.display = 'none';
	body.style.background = 'black';
}


startLink.addEventListener('click', showStart);
galleryLink.addEventListener('click', showGallery);
contactLink.addEventListener('click', showContact);

