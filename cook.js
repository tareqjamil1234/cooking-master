//const api = "https://www.themealdb.com/api/json/v1/1/categories.php"
fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => response.json())
  .then((data) => displayCountries(data));

const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries");

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const countryDiv = document.createElement("div");

    countryDiv.className = "country";

    // const h3= document.createElement("h3");
    // h3.innerText=country.name;
    // const p= document.createElement("p");
    // p.innerText=country.capital;
    // countryDiv.appendChild(h3);
    // countryDiv.appendChild(p);
    // countriesDiv.appendChild(countryDiv);

    const countryInfo = `
        <h3 class = "country-name">${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="displayCountryDetail('${country.name}')">details</button>
        `;
    countryDiv.innerHTML = countryInfo;
    countriesDiv.appendChild(countryDiv);
  }
};

const displayCountryDetail = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderCountryInfo(data[0]));
};

const renderCountryInfo = country =>{
    console.log(country);
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML =`
    <h1>${country.name}</h1>
    <p>population:${country.population}</p>
    <p>area:${country.area}</p>
    <img src = "${country.flag}">
    `
}