import React from 'react';

const CurrentWeatherList = (props) => {

    const {
        name,
        visibility,
        sys: {country, sunrise, sunset},
        main: {humidity, pressure, temp},
        wind: {speed, deg},
        weather: [{icon, main}]
    } = props
    const weatherIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`

    return (
        <div>
            <div>{name}, {country}</div>
            <div><img src={weatherIcon} alt="icon"/></div>
            <div>{temp} &deg; C</div>
            <div>{main}</div>
            <div>{sunrise}</div>
            <div>{sunset}</div>
            <ul>
                <li>Wind speed: {speed} m/s</li>
                <li>Wind direction: {deg}</li>
                <li>Humidity: {humidity}%</li>
                <li>Pressure: {pressure} hPa</li>
                <li>Visibility: {visibility} m</li>
            </ul>
        </div>
    );
};

export default CurrentWeatherList;