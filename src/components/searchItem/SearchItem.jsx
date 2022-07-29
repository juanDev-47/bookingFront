import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="siContainer">
      <div className="siInfo">
        <div className="siImg">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="img"
          />
        </div>
        <div className="siInfoText">
          <h1 className="siTitle">Tower Street Apartments</h1>
          <h5 className="distance">500m from center</h5>
          <h5>
            <span className="siBadge">Free airport taxi</span>
          </h5>
          <h5 className="benefits">Studio Apartment wiht Air conditioning</h5>
          <h5 className="distance">
            Entire studio - 1 bathroom - 21m 1 full bed
          </h5>
          <h5 className="state">Free Cancellation</h5>
          <h5 className="extraInfo">
            You can cancel later, so lock in this great price today!
          </h5>
        </div>
        <div className="siInfoPlan">
          <div className="siRating">
            <h5 className="siRatingTitle">Excelente</h5>
            <span className="siRatingValue">8.9</span>
          </div>
          <div className="spacing"></div>
          <div className="siPrice">
            <div className="priceSpace"></div>
            <h5 className="price">$112</h5>
          </div>
            <p>Includes taxes and fees</p>
            <button>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
