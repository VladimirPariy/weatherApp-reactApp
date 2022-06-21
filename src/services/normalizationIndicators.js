export const normalizeTimeToTimezone = (dateStamp, timezone) => {
     return +(new Date( (dateStamp*1000)+(1000 * timezone)+(new Date().getTimezoneOffset() * 60000)))
};


export const getTimeInString = (dateStamp, timezone) => {
    const normalizeDateStampToTimezone = new Date(normalizeTimeToTimezone(dateStamp, timezone))

    let hours = normalizeDateStampToTimezone.getHours().toString(),
        minutes = normalizeDateStampToTimezone.getMinutes().toString();

    if(hours.length<2){
        hours = `0${hours}`
    }
    if(minutes.length<2){
        minutes = `0${minutes}`
    }

    return `${hours}:${minutes}`
}


export const getDayInString = (dateStamp, timezone) => {
    const normalizeDateStampToTimezone = new Date(normalizeTimeToTimezone(dateStamp, timezone))

    const year = +normalizeDateStampToTimezone.getFullYear();

    let month = (normalizeDateStampToTimezone.getMonth() + 1).toString(),
        date = +normalizeDateStampToTimezone.getDate().toString();

    if(date.length<2){
        date = `0${date}`
    }
    if(month.length<2){
        month = `0${month}`
    }

    return `${year}-${month}-${date}`
}


export const getDateTxt = (item, timezone)=> {
    const day = getDayInString(item.dt, timezone),
        time = getTimeInString(item.dt, timezone);
    return `${day} ${time}`
}


export const getRoundingNumberToInt = (num) => {
    return Math.round(num)
}


export const getRoundingNumToFloat = (num) => {
    return (Math.round(num * 10)) / 10
}


export const getNormalizationVisibility = (distance) => {
    if (distance > 1000) {
        distance = Math.round(distance / 1000)
        return `${distance} km`
    }
    return `${distance} m`
}


export const getWindDirection = (deg) => {
    if (deg >= 348.76 && deg <= 11.25) return 'N'
    else if (deg >= 11.26 && deg <= 33.75) return 'NNE'
    else if (deg >= 33.76 && deg <= 56.25) return 'NE'
    else if (deg >= 56.26 && deg <= 78.75) return 'ENE'
    else if (deg >= 78.76 && deg <= 101.25) return 'E'
    else if (deg >= 101.26 && deg <= 123.75) return 'ESE'
    else if (deg >= 123.76 && deg <= 146.25) return 'SE'
    else if (deg >= 146.26 && deg <= 168.75) return 'SSE'
    else if (deg >= 168.76 && deg <= 191.25) return 'S'
    else if (deg >= 191.26 && deg <= 213.75) return 'SSW'
    else if (deg >= 213.76 && deg <= 236.25) return 'SW'
    else if (deg >= 236.26 && deg <= 258.75) return 'WSW'
    else if (deg >= 258.76 && deg <= 281.25) return 'W'
    else if (deg >= 281.26 && deg <= 303.75) return 'WNW'
    else if (deg >= 303.76 && deg <= 326.25) return 'NW'
    return 'NNW'
}


export const getUrlIcon = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
}


export const replacingFirstLetterDescription = (description) => {
    return description[0].toUpperCase() + description.slice(1);
}


export const normalizationWeatherArrIndic = (arr, timezone) => {
    return arr.map((item) => {
        return {
            ...item,
            visibility: getNormalizationVisibility(item.visibility),
            dt_txt: getDateTxt(item, timezone),
            main: {
                ...item.main,
                temp: getRoundingNumberToInt(item.main.temp),
                temp_min: getRoundingNumberToInt(item.main.temp_min),
                temp_max: getRoundingNumberToInt(item.main.temp_max)
            },
            weather: [{
                ...item.weather[0],
                icon: getUrlIcon(item.weather[0].icon),
                description: replacingFirstLetterDescription(item.weather[0].description)
            }],
            wind: {
                ...item.wind,
                deg: getWindDirection(item.wind.deg),
                speed: getRoundingNumToFloat(item.wind.speed)
            }
        }
    })
}


export const getDayOfTheWeek = (num) => {
    const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return dayArr[num]
}


export const getMinMaxDayTemp = (dayWeatherArr) => {
    let maxTemp,
        minTemp;
    dayWeatherArr.forEach(item => {
        if (typeof (maxTemp) === 'undefined' || maxTemp < item.main.temp_max) {
            maxTemp = item.main.temp_max
        }

        if (typeof (minTemp) === 'undefined' || minTemp > item.main.temp_min) {
            minTemp = item.main.temp_min
        }
    })
    return [maxTemp, minTemp]
}


export const determinationRepeatedWeather = (weatherArr) => {
    const weatherDes = weatherArr.reduce((acc, rec) => {
        const weather = rec.weather[0].icon
        if (Object.keys(acc).length !== 0) {
            return (Object.keys(acc).indexOf(weather) !== -1) ?
                {...acc, [weather]: acc[weather] + 1} :
                {...acc, [weather]: 1}
        }
        return {[weather]: 1}
    }, {})

    let weather,
        count;
    Object.entries(weatherDes).forEach(item => {
        if (typeof (count) === 'undefined' || item[1] >= count) {
            count = item[1]
            weather = item[0]
        }
    })

    return weather;
}


export const sortedFiveDaysWeather = (weatherArr) => {
    return weatherArr.reduce((acc, rec) => {
        const date = rec.dt_txt.slice(0, 10)
        if (Object.keys(acc).length !== 0) {
            return (Object.keys(acc).indexOf(date) !== -1) ?
                {...acc, [date]: [...acc[date], rec]} :
                {...acc, [date]: [rec]}
        }
        return {[date]: [rec]}
    }, {})
}