export function initialTime() {
    return new Date().toLocaleTimeString().slice(0, 5);
}

export function initialDate(index) {
    let data = new Date().toLocaleDateString().split('.')
    return data[index]
}

export function initialDay() {
    let date = new Date().getDay()
    return date
}

export function getDayOfTheWeek(num) {
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return day[num]
}

export function getMonth(num) {
    const month = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
    return month[num - 1]
}

