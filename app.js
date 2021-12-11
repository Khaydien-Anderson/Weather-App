let weather = {
    "apikey": "fd61d12ef7dd1528e4153b24f7cc4e48",
    fetchWeather: function () {
        fetch("api.openweathermap.org/data/2.5/weather?q=London&appid=fd61d12ef7dd1528e4153b24f7cc4e48")
    }
}