import axios from "axios";
import {useEffect, useState} from "react";

export function useFetchingWeather(city, type) {
    const [weather, setWeather] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/${type}q=${city}&units=metric&appid=50cb39ad20e8cdadfa2c8ce62827d3fa`)
            .then(res => setWeather(res.data))
            .catch((e) => setError(e.message))
    }, [city, type])

    return [weather, error];
}