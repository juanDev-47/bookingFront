import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faCar, faPlane, faTaxi, faPerson } from '@fortawesome/free-solid-svg-icons';
// import { DateRange } from 'react-date-range';

export const Header = () => {
  return (
    <div className='header'>
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stay</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>attraction</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? it's Genius.</h1>
        <p className="hederDes">Get rewarded front your travel - unlock instant savings of 10%</p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text"
            placeholder='Where are you going' className="headerSearchInput" />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span className='headerSearchText'>date to date</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className='headerSearchText'>2 adults, 2 children 1 room</span>
          </div>
          <div className="headerSearchItem">
            <button className='headerBtn'>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}
