import {useEffect, useState} from "react";

export const useLocalStorage = (key, initialValue) => {

    const getValueStorage = () => {
        const storageValue = localStorage.getItem(key)

        if (storageValue) {
            return JSON.parse(storageValue)
        }
        return initialValue
    }

    const [value, setValue] = useState(getValueStorage)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}