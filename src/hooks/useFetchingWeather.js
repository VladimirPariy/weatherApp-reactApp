import axios from "axios";
import {useEffect, useState} from "react";

export function useFetchingWeather(city, type) {
    const [weather, setWeather] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(() => true)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(`https://api.openweathermap.org/data/2.5/${type}q=${city}&units=metric&appid=50cb39ad20e8cdadfa2c8ce62827d3fa`)
            .then(res => setWeather(res.data))
            .catch((e) => setError(e.message))
            .finally(() => {
                setIsLoading(false)
            })
    }, [city, type])

    return [weather, error, isLoading];
}


