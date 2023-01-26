import React from "react";
import axios from 'axios';

export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°F`);
    }

    let apiKey = "5e473a47031564c5f9eebba301f1dd8c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
        <h2>Hello from Weather</h2>
    )
}