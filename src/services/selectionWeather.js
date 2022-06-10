import { getDayInString} from "./normalizationIndicators";


export const selectionWeather = (weatherArr, timezone) => {
    const dateToday = getDayInString(weatherArr[0].dt, timezone)
    console.log(weatherArr[0].dt)

    return weatherArr.filter(item => {
        const date = getDayInString(item.dt, timezone)
        return (date === dateToday)
    })
}

export const selectionFourDaysWeather = (weather, timezone) => {
return weather
    // const dateToday = getDayInString(weather[0].dt, timezone),
        const lastDate = getDayInString(weather[weather.length - 1].dt, timezone);
    return weather.filter(item => {
        const date = getDayInString(item.dt, timezone)
        return !(date === lastDate);
    });

    // if (fullWeather.length > 32) {
    //     return fullWeather.filter(item => {
    //         const date = getDayInString(item.dt, timezone)
    //         return !(date === dateToday || date === lastDate);
    //     });
    // }
    // return fullWeather;
}







