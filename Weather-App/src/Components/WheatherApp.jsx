import React, { useState } from 'react';
import axios from 'axios';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
// import { TbTemperatureSun } from "react-icons/tb";
import clear2 from '../assets/images/clear2.jpg';
import cloud2 from '../assets/images/cloud2.jpg';
import rain from '../assets/images/rain.jpg';
import mist from '../assets/images/mist.jpg';


function WeatherApp() {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState(null);
    const apikey = '13aaa1abd3bc56d3987afdeaf4ea86df';

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const dataFetch = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`);
            setWeather(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const searchData = () => {
        if (input === '') {
            alert('Please Enter the City!');
        } else {
            dataFetch();
            setInput('');
        }
    }

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);

        // Convert to IST (UTC+5:30)
        const ISTOffset = 5.5 * 60 * 60 * 1000;
        const istDate = new Date(date.getTime() + ISTOffset);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = days[istDate.getDay()];
        const formattedDate = `${istDate.getDate()}/${istDate.getMonth() + 1}/${istDate.getFullYear()}`;

        return { day, formattedDate };
    }

    return (
        <div className="main-container">
            <h2>Weather-App</h2>
            <div className="weather">
                <div className="searchbox">
                    <input type="text" value={input} onChange={handleInput} placeholder='Search City' />
                    <button onClick={searchData}><FaMagnifyingGlass /></button>
                </div>
                <div className="responseResult">
                    {weather && (
                        <div className="weather-info">
                            <h3><FaMapLocationDot /> {weather.name}</h3>

                          <p>{weather.weather[0].main === "Clouds" && <img src={cloud2} alt="Cloudy" />}</p>
                            <p>{weather.weather[0].main === "Clear" && <img src={clear2} alt="Clear" />}</p>
                            <p>{weather.weather[0].main === "Rain" && <img src={rain} alt="Rainy" />}</p>
                            <p>{weather.weather[0].main === "Mist" && <img src={mist} alt="Rainy" />}</p>
                            <p>{weather.weather[0].main === "Haze" && <img src={mist} alt="Rainy" />}</p>

                            <h4>{weather.weather[0].description}</h4>
                            <h4>Temperature: {Math.round(weather.main.temp)}°C</h4>
                            <h4>Day: {formatDate(weather.dt).day}</h4>
                            <h4>Date: {formatDate(weather.dt).formattedDate}</h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WeatherApp;
