import React from 'react'
import './mainList.css';

const MailList = () => {
  return (
    <div className='mail'>
      <div className="mailTitle">Save time, save money!</div>
      <span className="mainDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Enter your email"/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList