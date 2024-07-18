const API_key = "cc795d85d1d370f2409e4b26a2b2bb41";

let txt = "";
let h2 = document.querySelector(".temperature");
let humid = document.querySelector(".humidity p ");
let air = document.querySelector(".air p ");
let wind = document.querySelector(".wind p");
let cities = document.querySelector(".city");
let country = document.querySelector(".country");
let cloud = document.querySelector(".cloud");
let weatherIcon = document.querySelector(".weather-icon"); // Updated line
document.weather.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = this.city.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
  fetch(url)
    .then((i) => i.json())
    .then((i) => {
      const icons = i.weather[0].icon;
      const url1 = `https://openweathermap.org/img/wn/${icons}@2x.png`;
      console.log(i);
      const name = i.name;

      const weather = i.weather[0].description;

      const temp = i.main.temp;
      const humidity = i.main.humidity;
      const airpres = i.main.pressure;

      h2.innerHTML = `${temp}&deg;C`;
      humid.innerHTML = `${humidity}%`;
      air.innerHTML = airpres;
      cities.innerHTML = name;

      for (let y in i.wind) {
        const windspd = i.wind.speed;
        wind.innerHTML = windspd;
      }

      // const count = i.sys.country;
      // country.innerHTML = count;
      weatherIcon.src = url1; // Updated line
      cloud.innerHTML = weather;
    });
});