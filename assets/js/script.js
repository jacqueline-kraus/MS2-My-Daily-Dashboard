$(document).ready(function(){

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
        .then(jsonObject => [
            jsonObject.meals[0].strMeasure1 + jsonObject.meals[0].strIngredient1,
            jsonObject.meals[0].strMeasure2 + jsonObject.meals[0].strIngredient2,
            jsonObject.meals[0].strMeasure3 + jsonObject.meals[0].strIngredient,
        ])
        .then(ingredients => createIngredientsList(ingredients))
    
});

function createIngredientsList(ingredientsListItems) {
    //let ingredientsListItems = [{
      //  strIngredient1: '',
        //strIngredient2: '',


   // }];
    // https://getbutterfly.com/generate-html-list-from-javascript-array/
    // Make the list
    let listElement = document.createElement('ul');

    // Add it to the page
    document.getElementById('mealIngredientsList').appendChild(listElement);

    for (i = 0; i < ingredientsListItems.length; ++i) {
        // create an item for each one
        let listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = ingredientsListItems[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
};
}