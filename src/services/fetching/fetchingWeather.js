import axios from "axios";

export async function fetchingWeather(city, type) {
    let weatherData;
    await axios
        .get(`https://api.openweathermap.org/data/2.5/${type}q=${city}&units=metric&appid=50cb39ad20e8cdadfa2c8ce62827d3fa`)
        .then(res => weatherData = res.data)
    return weatherData;
}
