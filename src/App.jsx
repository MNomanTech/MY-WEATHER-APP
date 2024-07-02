import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import WeatherBox from './WeatherBox.jsx';
import './default.css';
import axios from "axios";

function App() {

  let [coordinates, setCoordinates] = useState([17.3753, 78.4744]); // Initial coordinates

  let [weatherData , setWeatherData] = useState({
      temp: 32.23,
      feels_like: 34.3,
      temp_min: 32.23,
      temp_max: 35.73,
      pressure: 1007,
      humidity: 48,
      visibility: 6000,
      windSpeed: 1.54,
      description: "scattered clouds",
      name: "Hyderabad",
      coord: {
        lat: 17.3753,
        lon: 78.4744,
      }
  });

  useEffect(()=>{

    let use = async ()=>{
      await setWeatherData(await getWeatherByCity('Hyderabad'));
    };

    use();

  },[]);

  let getCoordinates = async function(city = 'hyderabad'){
    let result = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=65cdfabcc87c54d801e0bed7da7d5bdb`);
    let {lat, lon} = result.data[0];
    return {lat,lon};
  }

  // let getWeatherByCoordinates = async function(lat =17.360589, lon =78.4740613){
  //   let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=65cdfabcc87c54d801e0bed7da7d5bdb&units=metric`);

  //     return {
  //       temp: result.data.main.temp,
  //       feels_like: result.data.main.feels_like,
  //       temp_min: result.data.main.temp_min,
  //       temp_max: result.data.main.temp_max,
  //       pressure: result.data.main.pressure,
  //       humidity: result.data.main.humidity,
  //       visibility: result.data.visibility,
  //       windSpeed: result.data.wind.speed,
  //       description: result.data.weather[0].description,
  //       name: result.data.name,
  //   };

  // };

  let getWeatherByCity = async (city="Hyderabad")=>{
    let result  = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65cdfabcc87c54d801e0bed7da7d5bdb&units=metric`);

      // console.log(result.data);
      return {
        temp: result.data.main.temp,
        feels_like: result.data.main.feels_like,
        temp_min: result.data.main.temp_min,
        temp_max: result.data.main.temp_max,
        pressure: result.data.main.pressure,
        humidity: result.data.main.humidity,
        visibility: result.data.visibility,
        windSpeed: result.data.wind.speed,
        description: result.data.weather[0].description,
        name: result.data.name,
        coord: result.data.coord,
    };

  }


  return (
    <>
        <Navbar  setWeatherData={setWeatherData} getWeatherByCity={getWeatherByCity} setCoordinates={setCoordinates}/>

        <WeatherBox weatherData={weatherData} coordinates={coordinates}/>
          
    </> 
  )
};

export default App;
