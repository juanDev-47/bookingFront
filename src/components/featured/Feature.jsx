import React from 'react'
import './featured.css';

const Feature = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="img" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>      
      <div className="featuredItem">
        <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="img" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>123 properties</h2>
        </div>
      </div>      
      <div className="featuredItem">
        <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="img" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>123 properties</h2>
        </div>
      </div>      
    </div>
  )
}

export default Feature