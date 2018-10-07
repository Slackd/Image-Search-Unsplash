const API_URL = 'https://api.unsplash.com/search/photos?page=1&client_id=922ccbb5fe01e8b95a29eaabfc8c5806bc98bedd23dd35079603962e1b1dbe5c';
const form = document.querySelector('form');
const input = document.querySelector('input');

const loadingImage = document.querySelector('#loadingImage');
const imageSection = document.querySelector('.image');

loadingImage.style.display = 'none';

form.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
	event.preventDefault();
	const searchTerm = input.value;
  
	searchStart();
	search(searchTerm)
		.then(displayImages)
		.then(() => {
			loadingImage.style.display = 'none';
		});
}

function searchStart() {
	loadingImage.style.display = '';
	imageSection.innerHTML = '';
}

function search(searchTerm) {
	const url = `${API_URL}&query=${searchTerm}`;
	loadingImage.style.display ='';
	return fetch(url)
		.then(function(response) {
			return response.json();
		});
}


function displayImages (result) {
	result.results.forEach(img=> {
		const imageElement = document.createElement('img');
		imageElement.src = img.urls.full;
		imageSection.appendChild(imageElement);
	});
}





