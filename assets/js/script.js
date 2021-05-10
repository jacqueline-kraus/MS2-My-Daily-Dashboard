$(document).ready(function(){
    showMeal();
    showJoke();
    showMovie();
});

function showMeal() {
    let randomMeal = fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        // .then(response => {
        //     response.json().then(jsonObject => {   
        //         const arrayIngredients = [
        //             jsonObject.meals[0].strIngredient1,
        //             jsonObject.meals[0].strIngredient2,
        //             jsonObject.meals[0].strIngredient3,
        //         ];
        //         createIngredientsList(arrayIngredients);
        //     });
        // })
        .then(response => response.json())
        .then(jsonObject => renderMeal(jsonObject.meals[0]))
}

function renderMeal(mealObject) {
    // ingredients rendering
    let ingredients = [
        {ingredient: mealObject.strIngredient1, measure: mealObject.strMeasure1},
        {ingredient: mealObject.strIngredient2, measure: mealObject.strMeasure2},
        {ingredient: mealObject.strIngredient3, measure: mealObject.strMeasure3},
        {ingredient: mealObject.strIngredient4, measure: mealObject.strMeasure4},
        {ingredient: mealObject.strIngredient5, measure: mealObject.strMeasure5},
        {ingredient: mealObject.strIngredient6, measure: mealObject.strMeasure6},
        {ingredient: mealObject.strIngredient7, measure: mealObject.strMeasure7},
        {ingredient: mealObject.strIngredient8, measure: mealObject.strMeasure8},
        {ingredient: mealObject.strIngredient9, measure: mealObject.strMeasure9},
        {ingredient: mealObject.strIngredient10, measure: mealObject.strMeasure10},
        {ingredient: mealObject.strIngredient11, measure: mealObject.strMeasure11},
        {ingredient: mealObject.strIngredient12, measure: mealObject.strMeasure12},
        {ingredient: mealObject.strIngredient13, measure: mealObject.strMeasure13},
        {ingredient: mealObject.strIngredient14, measure: mealObject.strMeasure14},
        {ingredient: mealObject.strIngredient15, measure: mealObject.strMeasure15},
        {ingredient: mealObject.strIngredient16, measure: mealObject.strMeasure16},
        {ingredient: mealObject.strIngredient17, measure: mealObject.strMeasure17},
        {ingredient: mealObject.strIngredient18, measure: mealObject.strMeasure18},
        {ingredient: mealObject.strIngredient19, measure: mealObject.strMeasure19},
        {ingredient: mealObject.strIngredient20, measure: mealObject.strMeasure20},

    ];

    // https://getbutterfly.com/generate-html-list-from-javascript-array/
    // Make the list
    let listElement = document.createElement('ul');

    // Add it to the page
    document.getElementById('mealIngredientsList').appendChild(listElement);

    for (let i = 0; i < ingredients.length; ++i) {
        if (ingredients[i].ingredient !== "") {
        // create an item for each one
        let listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML =  ingredients[i].measure + " " + ingredients[i].ingredient;

        // Add listItem to the listElement
        listElement.appendChild(listItem);
        }
    };
    // set meal title
    let mealTitle = document.getElementById('meal-title');
    let modalMealTitle = document.getElementById('modal-meal-title');
    mealTitle.innerHTML = mealObject.strMeal;
    modalMealTitle.innerHTML = mealObject.strMeal;

    //set preparation text
    let mealPreparation = document.getElementById('meal-preparation');
    //https://stackoverflow.com/questions/784539/how-do-i-replace-all-line-breaks-in-a-string-with-br-elements --> break for new lines
    mealPreparation.innerHTML = mealObject.strInstructions.replace(/(?:\r\n|\r|\n)/g, '<br>');

    //set meal image
    let mealImage = document.getElementById('meal-image');
    mealImage.src = mealObject.strMealThumb;

}

//https://sv443.net/jokeapi/v2/
function showJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
      .then(response => response.json())
      .then((jokeData) => {
        if (jokeData.type === 'single') {
            return jokeData.joke
        } else {
            return jokeData.setup + ' ' + jokeData.delivery;
        }
      })
      .then(joke => renderJoke(joke));
  }
  
function renderJoke(jokeContent) {
    let jokeElement = document.getElementById('joke');
    jokeElement.innerHTML = jokeContent;
}

// get movie

function showMovie() {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=3c3923c788ee6ca56d320ff902df6f31')
      .then(response => response.json())

      .then(movieData => {
        const randomNumber =  getRandomNumber(movieData.results.length);
        const randomMovie = movieData.results[randomNumber];
        
        return randomMovie;
      })
      .then(randomMovieGenerated => renderMovie(randomMovieGenerated))
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

function renderMovie(movieTrending) {
    let movieContentElement = document.getElementById('movie-content');
    let movieImageElement = document.getElementById('movie-image');
    movieContentElement.innerHTML = movieTrending.title;
    movieImageElement.src = 'https://image.tmdb.org/t/p/w185' + movieTrending.poster_path;
}

  