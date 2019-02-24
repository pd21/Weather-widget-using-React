import React, { Component } from 'react';
import Titles from './components/Titles';
import Weather from './components/Weather';
import Form from './components/Form';
import './App.css';
const API_KEY = "2d46c2453f9b384c1f4584386b89d96b";

class App extends Component {
  state= {
    temp:undefined,
    humidity:undefined,
    description:undefined,
    city:undefined,
    country:undefined,
    error:undefined
  }
  getWeather = async(e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city && country){
      console.log(data);
      this.setState({
        temp: data.main.temp,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        city:data.name,
        country:data.sys.country,
        error:""
      })
    }
    else{
      this.setState({
        temp:undefined,
        humidity:undefined,
        description:undefined,
        city:undefined,
        country:undefined,
        error:"please enter both fields"
      })
    }
  }

  render() {
    return (
      <div>
        hello world haha huhu
        <Titles />
        <Weather
          temp={this.state.temp}
          humidity={this.state.humidity}
          description={this.state.description}
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
        />
        <Form getWeather={this.getWeather}/>
      </div>
    );
  }
}

export default App;
