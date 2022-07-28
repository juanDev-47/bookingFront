import React from 'react'
import Feature from '../../components/featured/Feature';
import { Header } from '../../components/header/Header';
import { Navbar } from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import "../home/home.css";
import MailList from '../../components/mailList/MailList';

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Feature />
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList /> 
        <h1 className='homeTittle'>Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </div>
  )
}
