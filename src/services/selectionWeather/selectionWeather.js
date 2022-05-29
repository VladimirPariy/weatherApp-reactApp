export const selectionWeather = (obj) => {
    const dateToday = obj[0].dt_txt.slice(8, 10)

    return Object.values(obj).filter(item => {
        const date = item.dt_txt.slice(8, 10)
        return (date=== dateToday)
    })
}

export const selectionFourDaysWeather = (weather) => {
    const dateToday = weather[0].dt_txt.slice(8, 10),
        lastDate = weather[weather.length-1].dt_txt.slice(8, 10)

    return Object.values(weather).filter(item => {
        const date = item.dt_txt.slice(8, 10)
        return !(date === dateToday || date === lastDate);

    })
}