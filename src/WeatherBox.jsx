
import { useState } from 'react';
import Map from './Map';
import './WeatherBox.css';

export default function WeatherBox({weatherData , coordinates}){

    return (
        <>
        
            <div className="row p-5">
                
                <div className="col-6">

                    <div className='row p-3 box rounded'>

                        <div className="col-6 ">
                            <h6>Current Weather</h6>
                            <p>{new Date().toLocaleTimeString()}</p>
                        </div>

                        <div className="col-6 ">
                            <h6>{weatherData.name}</h6>                    
                        </div>

                        <div className="col-6 text-center">
                            <h1 style={{fontSize: "5rem"}} >{weatherData.temp}<span>&#x2103;</span></h1>
                        </div>

                        <div className="col-6 text-center">
                            <h3>{weatherData.description}</h3>
                            <p>Feels like {weatherData.feels_like}°</p>
                        </div>
                    </div>
                    <div className='row row-cols-2 p-3 text-center column-gap-5 row-gap-3'>

                        <div className="col-2 box rounded p-3">
                            <p>Min Temp</p>
                            <h5>{weatherData.temp_min}°</h5>
                        </div>

                        <div className="col-2 box rounded p-3">
                            <p>Wind</p>
                            <h5>{weatherData.windSpeed} km/h</h5>
                        </div>

                        <div className="col-2 box rounded p-3">
                            <p>Pressure</p>
                            <h5>{weatherData.pressure} mb</h5>
                        </div>

                        <div className="col-2 box rounded p-3">
                            <p>Max Temp</p>
                            <h5>{weatherData.temp_max}°</h5>
                        </div>

                        <div className="col-2 box rounded p-3">
                            <p>Humidity</p>
                            <h5>{weatherData.humidity}</h5>
                        </div>

                        <div className="col-2 box rounded p-3">
                            <p>Visibility</p>
                            <h5>{weatherData.visibility}</h5>
                        </div>

                    </div>
                </div>
                <div className='col-6 w-50 position-relative'>
                    
                    <Map initialCoords={coordinates}/>
                </div>
                
            </div>

        </>
    )
}