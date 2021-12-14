import React, { Component } from "react";
import Wheathercard from "./Weathercard";
require('dotenv').config()

const axios = require('axios');


class Weatherlist extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       cityWeather: []
    }
  }
  

  async componentDidMount(){
    // const apiKey = process.env.WEATHER_API 
    const keyword = "Madrid"
    const weatherAxios = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${keyword}&units=metric&appid=0b3cd5494d54dc46d622ccfc9f8045a6`);
    console.log(weatherAxios);  
    const data = weatherAxios.data.list[0].main.temp;
          this.setState({
            cityWeather: data
        })
        console.log('componentDidMount');
    }

//Funcion para pintar la temperatura de Madrid
  paintWeather = () =>{return this.state.cityWeather} // con el i le pasamos un indice al .map para asignarsela luego como clave unica a cada producto

//Funcion para actualizar
componentDidUpdate(prevProps, prevState) {
  const dataInput = prevState.target.name.value
  console.log(prevProps)
  console.log(prevState)
  console.log(dataInput)
}
handleSubmit = (event) => {
  event.preventDefault();
  const name = event.target.name.value
 console.log(name)
}

  render() {
    return <div>
      <h1>Weather</h1>
      <p>Pronóstico de Madrid</p>
      {this.paintWeather()} ºC
      {/* pintaremos el clima de Madrid */}
      
      <p>Busca el clima de tu ciudad</p>
      <form>
        <label htmlFor="name">Ciudad:</label><br />
        <input type="text" id="name" name="name" ref={this.name} /><br />
        <input type="submit" />
      </form>
      <br />
      <h2>Wheatherlist</h2>
      <p>Lista de items con la información del pronóstico extendido de los próximos días/día actual "componentDidUpdate"</p>
      <br />
      <h2>Wheathercard</h2>
      <p> Información meteorológica de las primeras 5 actualizaciones (horario, temperatura, estado del tiempo) "componentDidUpdate"</p>
      <Wheathercard />

    </div>;
  }
}

export default Weatherlist;

