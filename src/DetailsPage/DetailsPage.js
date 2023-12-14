import React from "react";
import { Link } from "react-router-dom";
import "./DetailsPage.scss";

import church from "../assets/images/church.jpeg";
import house from "../assets/images/house.jpeg";
import dress_code from "../assets/images/ecuador_dress_code.jpeg";

const DetailsPage = () => {
  return (
    <div className="detailsPage">
      <div className="detailsPage__header">
        <h1 className="detailsPage__title">Details Party</h1>
        <div className="detailsPage__buttons">
          <Link to="/family-options" className="detailsPage__button">
            Back to Family Options
          </Link>
          <Link to="/" className="detailsPage__button">
            Home
          </Link>
        </div>
      </div>
      <div className="detailsPage__content">
        <div className="detailsPage__section">
          <h2 className="detailsPage__sectionTitle">Mass Information</h2>
          <p>Date: 24th December</p>
          <p>Time: 19:30 PM</p>
          <p>Location: St Bede's Church</p>
          <p>Address: 58 Thornton Rd, London SW12 0LF</p>
          <img src={church} alt="St Bede's Church" />
        </div>
        <div className="detailsPage__section">
          <h2 className="detailsPage__sectionTitle">Party Information</h2>
          <p>Date: 24th December</p>
          <p>Location: 73 Christian Fields, London SW16 3JU</p>
          <img src={house} alt="Party Venue" />
        </div>
        <div className="detailsPage__section">
          <h2 className="detailsPage__sectionTitle">Dress Code</h2>
          <p>Get ready to shine! Wear your most festive and funny attire.</p>
          <img src={dress_code} alt="Dress Code Inspiration" />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

