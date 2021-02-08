const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCatagory(data.meals))

}

const displayCatagory = meals => {
    // console.log(meals);
    // meals.forEach(food => console.log(food.strMeal))
    const foodContainer = document.getElementById('food-container');
    if (meals) {
        meals.forEach(food => {
            //console.log(food);
            const foodDiv = document.createElement('div');
            foodDiv.className = 'single-result row align-items-center my-3 p-3';
            // foodDiv.innerHTML = food.strMeal;
            foodDiv.innerHTML = ` 
        <div class="col-md-9">
          <img  src = "${food.strMealThumb}" alt = "food" width=200px;height=200px;>
          <h3 class="lyrics-name">${food.strMeal}</h3>
             
        </div>
         <div class="col-md-3 text-md-right text-center">
             <button onclick="getDetails('${food.strMeal}')" class="btn btn-success">Food Details</button>
         </div>
         `;
            foodContainer.appendChild(foodDiv);

        });
    }
    else{
        const detailsDiv = document.getElementById('display-details');
        detailsDiv.innerText = "Result not Found";
    }
}



const getDetails = (title) => {
    //console.log(image,title,ingredients);
    //console.log(title);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals))



}

const displayDetails = details => {
    // console.log(details);
    const detailsDiv = document.getElementById('display-details');
    detailsDiv.innerHTML = `
    <div class="col-md-9">
    <img  src = "${details[0].strMealThumb}" alt = "food" width=200px;height=200px;>
    <h3 class="ingrediant-name">${details[0].strMeal}</h3>

    <ul style="list-style:none; font-size:15px"> Ingrediant:
        <li class="ingrediant-name">${details[0].strIngredient1}</li>
        <li class="ingrediant-name">${details[0].strIngredient2}</li>
        <li class="ingrediant-name">${details[0].strIngredient3}</li>
        <li class="ingrediant-name">${details[0].strIngredient4}</li>
        <li class="ingrediant-name">${details[0].strIngredient5}</li>
        <li class="ingrediant-name">${details[0].strIngredient6}</li>
        <li class="ingrediant-name">${details[0].strIngredient7}</li>
        <li class="ingrediant-name">${details[0].strIngredient8}</li>
        <li class="ingrediant-name">${details[0].strIngredient9}</li>
        <li class="ingrediant-name">${details[0].strIngredient10}</li>
    </ul>
       
  </div>
   
    
    `
        ;
    //console.log(detailsDiv);

}