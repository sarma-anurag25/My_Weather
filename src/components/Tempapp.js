import React, {useEffect, useState} from 'react';

import "./css/style.css";
const Tempapp = ()=>{
    // constructor() {
    //     var today = new Date(),
    
    //     time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    //     this.state = {
    
    //       currentTime: time
    
    //     }
    
    //   }

    const [city, setcity] = useState("null");
    const [search, setsearch] = useState("Mumbai");
    useEffect( ()=>{
        const fetchMe= async()=>{
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0b808be0c1aa6738ba4b14d98be7bf3a`
            const response= await fetch(url);
            const resJson=  await response.json();
            setcity(resJson.main);
        }


        fetchMe();
    }

    )

    
    return(
        <>
            <div className= "box">
            <div>
                    <div className="bird-container">
                    <div className="bird"></div>
                    <div className="bird--one"></div>
                    <div className="bird--two"></div>
                    </div>
            {/* <div className = "wave -onetop"></div>
            <div className = "wave -twotop"></div>
            <div className = "wave -threetop"></div> */}
            </div>
            
            <div className= "inputData">
                <input type="search" defaultValue="Enter your location" className="inputfield" onChange= {(event)=>{ setsearch( event.target.value ) }} />
            </div>
            <div className= "Date">
                <h1 className="time">{new Date().toLocaleString() + ""}</h1>

            </div>

            {!city ? (
                <p className="noData"> City doesn't exist!</p>
            ) :(
                <div>
                <div className = "info">
                
                <h2 className= "location"><i className="fa-solid fa-street-view"> {search} </i> </h2>
                <h2 className="temp"> {city.temp}° celcius </h2>
                <h3 className="tempmin_max"> {city.temp_min} °celcius | {city.temp_max} *cel</h3>
                <h3 className="feels"> Feels like {city.feels_like}°celcius</h3>

                </div>
                <div className = "wave -one"></div>
                <div className = "wave -two"></div>
                <div className = "wave -three"></div>
                </div>

            )
            }

            
                </div>

        </>
    )
}
export default Tempapp;