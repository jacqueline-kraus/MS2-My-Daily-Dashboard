// jshint esversion:6

// function to refresh the whole website after 24 hours
setInterval(function () {
	showMeal();
	showJoke();
	showMovie();
	getCity();
}, 86400000);

// trigger data fetch when document is ready
$(document).ready(function () {
	showMeal();
	showJoke();
	showMovie();
	getCity();
});

// Fetch meal data from API (https://www.themealdb.com)
function showMeal() {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(response => response.json())
		.then(jsonObject => renderMeal(jsonObject.meals[0]));
}

// Rendering meal data to be filled in html
function renderMeal(mealObject) {
	// ingredients rendering
	let ingredients = [{
			ingredient: mealObject.strIngredient1,
			measure: mealObject.strMeasure1
		},
		{
			ingredient: mealObject.strIngredient2,
			measure: mealObject.strMeasure2
		},
		{
			ingredient: mealObject.strIngredient3,
			measure: mealObject.strMeasure3
		},
		{
			ingredient: mealObject.strIngredient4,
			measure: mealObject.strMeasure4
		},
		{
			ingredient: mealObject.strIngredient5,
			measure: mealObject.strMeasure5
		},
		{
			ingredient: mealObject.strIngredient6,
			measure: mealObject.strMeasure6
		},
		{
			ingredient: mealObject.strIngredient7,
			measure: mealObject.strMeasure7
		},
		{
			ingredient: mealObject.strIngredient8,
			measure: mealObject.strMeasure8
		},
		{
			ingredient: mealObject.strIngredient9,
			measure: mealObject.strMeasure9
		},
		{
			ingredient: mealObject.strIngredient10,
			measure: mealObject.strMeasure10
		},
		{
			ingredient: mealObject.strIngredient11,
			measure: mealObject.strMeasure11
		},
		{
			ingredient: mealObject.strIngredient12,
			measure: mealObject.strMeasure12
		},
		{
			ingredient: mealObject.strIngredient13,
			measure: mealObject.strMeasure13
		},
		{
			ingredient: mealObject.strIngredient14,
			measure: mealObject.strMeasure14
		},
		{
			ingredient: mealObject.strIngredient15,
			measure: mealObject.strMeasure15
		},
		{
			ingredient: mealObject.strIngredient16,
			measure: mealObject.strMeasure16
		},
		{
			ingredient: mealObject.strIngredient17,
			measure: mealObject.strMeasure17
		},
		{
			ingredient: mealObject.strIngredient18,
			measure: mealObject.strMeasure18
		},
		{
			ingredient: mealObject.strIngredient19,
			measure: mealObject.strMeasure19
		},
		{
			ingredient: mealObject.strIngredient20,
			measure: mealObject.strMeasure20
		},
	];

	// Copied code from: https://getbutterfly.com/generate-html-list-from-javascript-array/ and adjusted for this projects needs:
	// Make the list
	let listElement = document.createElement('ul');

	// Add it to the page
	document.getElementById('mealIngredientsList').innerHTML = '';
	document.getElementById('mealIngredientsList').appendChild(listElement);

	for (let i = 0; i < ingredients.length; ++i) {
		if (ingredients[i].ingredient !== "") {
			// create an item for each one
			let listItem = document.createElement('li');

			// Add the item text
			listItem.innerHTML = ingredients[i].measure + " " + ingredients[i].ingredient;

			// Add listItem to the listElement
			listElement.appendChild(listItem);
		}
	}

	// set meal title
	let mealTitle = document.getElementById('meal-title');
	let modalMealTitle = document.getElementById('modal-meal-title');

	mealTitle.innerHTML = mealObject.strMeal;
	modalMealTitle.innerHTML = mealObject.strMeal;

	// set preparation text
	let mealPreparation = document.getElementById('meal-preparation');

	// used: https://stackoverflow.com/questions/784539/how-do-i-replace-all-line-breaks-in-a-string-with-br-elements: break for new lines
	mealPreparation.innerHTML = mealObject.strInstructions.replace(/(?:\r\n|\r|\n)/g, '<br>');

	// set meal image
	let mealImage = document.getElementById('meal-image');
	mealImage.src = mealObject.strMealThumb;

}

// Fetch Joke data from https://sv443.net/jokeapi/v2/
function showJoke() {
	fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
		.then(response => response.json())
		// 2 types of jokes: single or two part
		.then((jokeData) => {
			if (jokeData.type === 'single') {
				return jokeData.joke;
			} else {
				return jokeData.setup + ' ' + jokeData.delivery;
			}
		})
		.then(joke => renderJoke(joke));
}

// render joke content for index.html
function renderJoke(jokeContent) {
	let jokeElement = document.getElementById('joke');
	jokeElement.innerHTML = jokeContent;
}

// Fetch movie data (https://api.themoviedb.org)
function showMovie() {
    // get random page number (a total pages of 1000 with 20 items each) and return random movie
	let randomPageNumber = getRandomNumber(1000);
	fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=3c3923c788ee6ca56d320ff902df6f31' + '&page=' + randomPageNumber)
		.then(response => response.json())
		.then(movieData => {
			const randomNumber = getRandomNumber(movieData.results.length);
			const randomMovie = movieData.results[randomNumber];

			return randomMovie;
		})
		.then(randomMovieGenerated => renderMovie(randomMovieGenerated));
}

// function to get a random number to get then a random movie
function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}

// render movie data for index.html
function renderMovie(movieTrending) {
	let movieTitleElement = document.getElementById('movie-title');
	let movieTitleModal = document.getElementById('movie-title-modal');
	let movieImageElement = document.getElementById('movie-image');
	let movieDescriptionModal = document.getElementById('movie-description-modal');
	let movieReleaseDateModal = document.getElementById('movie-release-date-modal');

    //Code from: https://stackoverflow.com/questions/7463658/how-to-trim-a-string-to-n-chars-in-javascript and https://jsfiddle.net/t354gw7e/
    // Trimming movie title string to show on website (for mobile optimization)
    let titleLength = 30;
    movieTitleElement.innerHTML = movieTrending.title;
    let movieTitleString = movieTitleElement.innerHTML;
    let trimmedString = movieTitleString.length > titleLength ?
        movieTitleString.substring(0, titleLength - 3) + '...' :
        movieTitleString;

	movieTitleElement.innerHTML = trimmedString;

	movieTitleElement.title = movieTrending.title;
	movieTitleModal.innerHTML = movieTrending.title;
	movieImageElement.src = 'https://image.tmdb.org/t/p/w185' + movieTrending.poster_path;
	movieDescriptionModal.innerHTML = `<b>Short description:</b><br> ${movieTrending.overview}`;
	movieReleaseDateModal.innerHTML = `<b>Release Date:</b><br> ${movieTrending.release_date}`;
}


// Fetch weather API and show weather on website:

// Get City, by default city is detected by geolocation through API (https://geolocation-db.com/json/)
function getCity() {
	fetch('https://geolocation-db.com/json/')
		.then(response => response.json())
		.then(cityData => {
			if (cityData.city == false) {
				return alert('Sorry, we could not detect your location. Please type manually.');
			} else {
				return showWeather(cityData.city);
			}
		});
}


// Fetch weather data from Openweathermap API (https://api.openweathermap.org)
function showWeather(city) {
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e58f5d3306895d50f6392ff5f57595de&units=metric')
		.then(response => response.json())
		.then(weatherData => renderWeather(weatherData));
}

// change location on weather modal
function changeCity() {
	let inputValue = document.getElementById('new-location').value;
	showWeather(inputValue);
}

// submit change location form (function used in form in index.html)
function onCityFormSubmit(event) {
	event.preventDefault();
	changeCity();
	$('#weatherModal').modal('hide');
}

// Render weather to show in index.html
function renderWeather(weatherReport) {
	document.getElementById('new-location').value = '';
	
	// if the http code of the response is above or equal 400 then there was a problem fetching the city
	if (parseInt(weatherReport.cod) >= 400) {
		document.getElementById('city-alert').classList.remove('d-none');
		setTimeout(function () {
			$('#weatherModal').modal('show');
		}, 1000);
		return;
	}

	document.getElementById('city-alert').classList.add('d-none');

	let locationName = document.getElementById('location-name');
	let weatherIconElement = document.getElementById('weather-icon');
	let weatherMainTempElement = document.getElementById('weather-main-temp');
	let weatherMainMaxTempElement = document.getElementById('weather-main-max-temp');
	let weatherMainMinTempElement = document.getElementById('weather-main-min-temp');
	let weatherMainFeelTempElement = document.getElementById('weather-main-feel');

	// convert sunrise/sunset (UTC Timestamp) data in local time
	var secSunrise = weatherReport.sys.sunrise;
	var dateSunrise = new Date(secSunrise * 1000);
	var timestrSunrise = dateSunrise.toLocaleTimeString();

	var secSunset = weatherReport.sys.sunset;
	var dateSunset = new Date(secSunset * 1000);
	var timestrSunset = dateSunset.toLocaleTimeString();

	let weatherSysSunriseElement = document.getElementById('weather-sys-sunrise');
	let weatherSysSunsetElement = document.getElementById('weather-sys-sunset');

	locationName.innerHTML = `<b>Location:</b> ${weatherReport.name}, ${weatherReport.sys.country}`;
	weatherIconElement.src = 'https://openweathermap.org/img/wn/' + weatherReport.weather[0].icon + '@2x.png';
	weatherMainTempElement.innerHTML = `<i class="fas fa-temperature-high"></i> <b>Temperature:</b> ${parseInt(weatherReport.main.temp)} °C`;
	weatherMainMaxTempElement.innerHTML = 'Max. Temperature: ' + parseInt(weatherReport.main.temp_max) + '°C';
	weatherMainMinTempElement.innerHTML = 'Min. Temperature: ' + parseInt(weatherReport.main.temp_min) + '°C';
	weatherMainFeelTempElement.innerHTML = `<b>Feels Like:</b> ${parseInt(weatherReport.main.feels_like)} °C`;
	weatherSysSunriseElement.innerHTML = `<i class="far fa-sun"></i> <b>Sunrise:</b> ${timestrSunrise}`;
	weatherSysSunsetElement.innerHTML = `<i class="far fa-moon"></i> <b>Sunset:</b> ${timestrSunset}`;
}