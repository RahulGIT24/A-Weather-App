const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "25ab4d31b9msheee4e9bad0d4df4p1ecaf6jsn74db06801763",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.temp == undefined) {
        window.alert("Not Found");
        temp.innerHTML = "";
        temp2.innerHTML = "";
        feels_like.innerHTML = "";
        humidity.innerHTML = "";
        humidity2.innerHTML = "";
        min_temp.innerHTML = "";
        max_temp.innerHTML = "";
        wind_speed.innerHTML = "";
        wind_speed2.innerHTML = "";
        wind_degrees.innerHTML = "";
        sunrise.innerHTML = "";
        sunset.innerHTML = "";
      } else {
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
      }
    })
    .catch((err) => console.error(err));
};

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(cityInput.value);
});
getWeather("Mumbai");

console.log(cityInput.value);
