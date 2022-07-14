import React from 'react'
import Feature from '../../components/featured/Feature';
import { Header } from '../../components/header/Header';
import { Navbar } from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import "../home/home.css";

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Feature />
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList /> 
      </div>
    </div>
  )
}
