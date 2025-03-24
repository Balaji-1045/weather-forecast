const button = document.getElementById("button");
const city = document.getElementById("city");
const country = document.getElementById("country");
const weather = document.getElementById("weather");
let c=0;

button.onclick = () => {
    axios.get('https://www.freetestapi.com/api/v1/weathers')
    .then(function(response){
        console.log(response);
        button.textContent = "Next";
        city.textContent ="";
        country.textContent ="";
        weather.textContent ="";
        city.textContent = response.data[c].city;
        country.textContent = response.data[c].country;
        weather.textContent=response.data[c].weather_description;
        c++;
    })
    .catch(function(error){
        console.log(error);
    });
};