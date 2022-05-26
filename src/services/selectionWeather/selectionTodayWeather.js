export const selectionTodayWeather = (obj) => {
    const dateToday = obj[0].dt_txt.slice(8, 10)

    return Object.values(obj).filter(item => {
        const date = item.dt_txt.slice(8, 10)
        if (date === dateToday) {
            return true
        }
    })
}

