import React, { Component } from "react"; 
import {Route, Routes } from 'react-router-dom'//Para uso de todas las rutas
import Home from '../Home';
import ItemList from '../Itemlist';
import Weatherlist from '../Weatherlist'


class Main extends Component {
  render() {
    return  (
    <main>
      <Routes>
          <Route path="/" element ={<Home/>} exact />
          <Route path="/itemList" element ={<ItemList/>} />
          <Route path="/weatherlist" element ={<Weatherlist/>} />
       
      </Routes>  
  </main>
      )
  }
}

export default Main;
