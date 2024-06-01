import { useState } from 'react';
import './Navbar.css';


export default function Navbar({setWeatherData , getWeatherByCity}){

  let [inp , setInp] = useState('hyderabad');

  let formSubmit = async (event) =>{
      event.preventDefault();
      
      if(inp!=""){
        let data = await getWeatherByCity(inp);
        setWeatherData(data);
        console.log(data);
      }
  };
      

  let inpSearch = (event)=>{
    setInp(event.target.value);
    // console.log(inp);
  };

  return (
      

      <div className="navbar container-fluid navBarContainer ps-5 pe-5 shadow-lg mt-1" >
        
        <h1 className="navbar-brand text-white" style={{fontSize: "2rem"}}>Weather App</h1>

        <form onSubmit={formSubmit}>

            <div className="input-group ">

                
                 
               
                <input type="search" name="search" id="search" className="form-control text-bg-dark  text-white"  style={{width: "20rem"}} onChange={inpSearch}/>
                
                <button type="submit" className="btn btn-outline-primary">Search</button>

            </div>
        </form>
        
      </div>
      
    
  )
};