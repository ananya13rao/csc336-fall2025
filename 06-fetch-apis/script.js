//ADVICE 
let button = document.querySelector("#callbackDemoButton");


button.addEventListener("click", e => getAndDisplayAdvice() );


async function getAndDisplayAdvice() {


  // fetch 
  let adviceResponse = await fetch("https://api.adviceslip.com/advice?cb=" + Date.now());
  let adviceData = await adviceResponse.json();


  let adviceP = document.createElement("p");
  adviceP.textContent = adviceData.slip.advice;
  document.querySelector("#adviceDiv").appendChild(adviceP);
}




// RECIPE
let button2 = document.querySelector('#callbackOtherButton');

button2.addEventListener('click',e=> getAndDisplayRecipe() );

async function getAndDisplayRecipe(){
let recipeResponse = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  let recipeData = await recipeResponse.json();

  
  let meal = recipeData.meals && recipeData.meals[0];

  let recipeP = document.createElement('p');
  recipeP.textContent = meal ? `Try ${meal.strMeal}` : 'No meal found.';

    let img = document.createElement('img');
    img.src = meal.strMealThumb;
    img.width = 200;
    document.querySelector('#recipeDiv').appendChild(img);

  document.querySelector('#recipeDiv').appendChild(recipeP);
}

// adding the image
let img = document.createElement('img');
img.src = meal.strMealThumb;
img.width = 200;
document.querySelector('#recipeDiv').appendChild(img);

