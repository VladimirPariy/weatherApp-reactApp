import {useEffect, useState} from "react";

export const useLocalStorage = (initialValue, key) => {

    const getValueStorage = () => {
        const storageValue = localStorage.getItem(key)

        if (storageValue) {
            return JSON.parse(storageValue)
        }
        return initialValue
    }

    const [city, setCity] = useState(getValueStorage)

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(city))
    }, [city])

    return [city, setCity]
}