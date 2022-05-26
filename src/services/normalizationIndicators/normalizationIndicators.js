export const sunTime = (sunTime) => {
    const sun = new Date(sunTime * 1000)
    const hour = sun.getHours(),
        minute = sun.getMinutes();
    return `${hour}:${minute}`;
}

export const normalizationTemp = (temp) => {
    return Math.round(temp)
}

export const normalizationVisibility = (distance) => {
    return distance > 1000 ? `${distance / 1000} km` : `${distance} m`
}

export const windDirection = (deg) => {
    if (deg >= 157.6 && deg <= 202.5) return 'S'
    else if (deg >= 202.6 && deg <= 247.5) return 'SW'
    else if (deg >= 247.6 && deg <= 292.5) return 'W'
    else if (deg >= 292.6 && deg <= 337.5) return 'NW'
    else if (deg >= 337.6 || deg <= 22.5) return 'N'
    else if (deg >= 22.6 && deg <= 67.5) return 'NE'
    else if (deg >= 67.6 && deg <= 112.5) return 'E'
    else return 'SE'
}

export const getUrlIcon = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}

export const normalizationWeatherArr = (arr) => {
    return arr.map((item, ind) => {
        return {
            ...item,
            visibility: normalizationVisibility(item.visibility),
            main: {
                ...item.main,
                temp: normalizationTemp(item.main.temp)
            },
            weather: [{
                ...item.weather[0],
                icon: getUrlIcon(item.weather[0].icon)
            }],
            wind:{
                ...item.wind,
                deg: windDirection(item.wind.deg)
            }
        }
    })

}