//const apiKey = 'b6cc4392568a3586e950307c86a22bbd';

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
  .then((response) => response.json())
  .then((data) => displayCountries(data));

const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");

//   for (let i = 0; i < countries.meals.length; i++) {
//     const country = countries.meals[i];
    const country = countries.meals;
    for (let i = 0; i < country.length; i++) {
        const countryy = country[i];
    const countryDiv = document.createElement("div");

    countryDiv.className = "country";

    const countryInfo = `
        <h3 class = "country-name">${countryy.strMeal}</h3>
        <p>${countryy.strMeal}</p>
        <button onclick="displayCountries('${countryy.strMeal}')">details</button>
        `;
    countryDiv.innerHTML = countryInfo;
    countriesDiv.appendChild(countryDiv);
  }
};


const getWeatherData = strMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`;
    fetch(url)
        .then(response => response.json())
        .then(data => updateUI(data))
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('strMeal').value;
    getWeatherData(inputCity)
})

const updateUI = data => {
    const countryDiv = document.getElementById('countryDetails');
   document.getElementById('show-city').innerText = data.countryy.strMeal || "Unknown Location!";
   countryDiv.innerHTML =`
   <h1>${data.countryy.strMeal}</h1> 
   `
   document.getElementById('city').value = "";
   
}

getWeatherData('Dhaka');