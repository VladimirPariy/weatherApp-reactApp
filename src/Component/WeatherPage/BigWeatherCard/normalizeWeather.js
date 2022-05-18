export function getVisibilityKm(num) {
    if (+num > 1000) {
        return `${num / 1000} km`
    }
    return `${num} m`
}

export function getDirOfTheWind(num) {
    const deg = +num
    const dir = ['Ю', 'Ю-З', 'З', 'С-З', 'С', 'С-В', 'В', 'Ю-В'],
          dir1 = ['S', 'SW', 'W', 'NW', 'N', 'NE', 'E', 'SE',];
    if (deg > 157.6 && deg < 202.5) return dir1[0]
    else if (deg > 202.6 && deg < 247.5) return dir1[1]
    else if (deg > 247.6 && deg < 292.5) return dir1[2]
    else if (deg > 292.6 && deg < 337.5) return dir1[3]
    else if ((deg > 337.6 && deg < 360) || (deg < 22.5)) return dir1[4]
    else if (deg > 22.6 && deg < 67.5) return dir1[5]
    else if (deg > 67.6 && deg < 112.5) return dir1[6]
    else if (deg > 112.6 && deg < 157.5) return dir1[7]


}