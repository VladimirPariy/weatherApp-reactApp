import { getDayInString} from "./normalizationIndicators";


export const selectionWeather = (weatherArr, timezone) => {
    const dateToday = getDayInString(weatherArr[0].dt, timezone)

    return weatherArr.filter(item => {
        const date = getDayInString(item.dt, timezone)
        return (date === dateToday)
    })
}

export const selectionFourDaysWeather = (weather, timezone) => {

    const dateToday = getDayInString(weather[0].dt, timezone),
        lastDate = getDayInString(weather[weather.length - 1].dt, timezone);
    const fullWeather = weather.filter(item => {
        const date = getDayInString(item.dt, timezone)
        return !(date === dateToday);
    });

    if (fullWeather.length > 32) {
        return fullWeather.filter(item => {
            const date = getDayInString(item.dt, timezone)
            return !(date === dateToday || date === lastDate);
        });
    }
    return fullWeather;
}







