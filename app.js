let weather = {
    //API KEY FROM OPENWEATHERMAP 
    apikey: "&APPID=fd61d12ef7dd1528e4153b24f7cc4e48",
    fetchWeather: function (city) {
        //FETCHES API KEY AND LOCATION GRABBED VIA JSON
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric"
        + this.apikey )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    //DATA FROM API KEY JSON
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

       
        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed is " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document
.querySelector(".search button")
.addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("London, UK")