fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => res.json())
    .then(data => displayCatagories(data));

const displayCatagories = catagories => {
   // console.log(catagories);
    //console.log(catagories.meals[0].strMeal);
    // const catagory = catagories.meals;
    // for (let i = 0; i < catagory.length; i++) {
    //     console.log(catagory[i].strMeal);
    // }
    // for (let i = 0; i < catagories.meals.length; i++) {
    //     let catagory = catagories.meals[i];
    //     console.log(catagory.strMeal);
    //     //const countryDiv = document.createElement("div");
    // }
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('strMeal').value;
    getWeatherData(inputCity)
})
