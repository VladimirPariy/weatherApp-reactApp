export const sunTime = (sunTime) => {
    const sun = new Date(sunTime * 1000)
    const hour = sun.getHours(),
        minute = sun.getMinutes();
    return `${hour}:${minute}`;
}

export const roundNumber = (num) => {
    return Math.round(num)
}

export const roundWindSpeed = (num) => {
    return (Math.round(num * 10))/10
}

export const normalizationVisibility = (distance) => {
    if (distance > 1000) {
        distance = Math.round(distance / 1000)
        return `${distance} km`
    }
    return `${distance} m`
}

export const windDirection = (deg) => {
    if (deg >= 157.6 && deg <= 202.5) return 'S'
    else if (deg >= 202.6 && deg <= 247.5) return 'SW'
    else if (deg >= 247.6 && deg <= 292.5) return 'W'
    else if (deg >= 292.6 && deg <= 337.5) return 'NW'
    else if (deg >= 337.6 || deg <= 22.5) return 'N'
    else if (deg >= 22.6 && deg <= 67.5) return 'NE'
    else if (deg >= 67.6 && deg <= 112.5) return 'E'
    return 'SE'
}

export const getUrlIcon = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}

export const descriptionReplace = (description) => {
    if (!description) return description;

    return description[0].toUpperCase() + description.slice(1);
}

export const normalizationWeatherArr = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            visibility: normalizationVisibility(item.visibility),
            main: {
                ...item.main,
                temp: roundNumber(item.main.temp)
            },
            weather: [{
                ...item.weather[0],
                icon: getUrlIcon(item.weather[0].icon),
                description: descriptionReplace(item.weather[0].description)
            }],
            wind: {
                ...item.wind,
                deg: windDirection(item.wind.deg),
                speed: roundWindSpeed(item.wind.speed)
            }
        }
    })

}