// FamilyOptionsPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./FamilyOptionsPage.scss";
import family_yanez from "../assets/images/yanez-family.jpg";
import family_bustillos from "../assets/images/bustillos-family.jpg";
import family_reascos from "../assets/images/reascos-family.jpg";
import family_nacato from "../assets/images/nacato-family.jpg";
import family_carolina from "../assets/images/carolina-family.jpg";

const FamilyOptionsPage = () => {
  return (
    <div className="familyOptionsPage">
      <div className="familyOptionsPage__header">
        <h1 className="familyOptionsPage__title">Choose a Family</h1>
        <div className="familyOptionsPage__buttons">
          <Link to="/poster" className="familyOptionsPage__button">
            Back to Poster
          </Link>
          <Link to="/" className="familyOptionsPage__button">
            Home
          </Link>
          <Link to="/details" className="familyOptionsPage__button">
            Details Party
          </Link>
        </div>
      </div>
      <div className="familyOptionsPage__cards">
        <div className="familyOptionsPage__card familyOptionsPage__card--yanez">
          <h2 className="familyOptionsPage__familyTitle">Yanez</h2>
          <div to="/family/yanez">
            <img src={family_yanez} alt="Yanez Family" />
          </div>
        </div>

        <div className="familyOptionsPage__card familyOptionsPage__card--bustillos">
          <h2 className="familyOptionsPage__familyTitle">Bustillos</h2>
          <div to="/family/bustillos">
            <img src={family_bustillos} alt="Bustillos Family" />
          </div>
        </div>

        <div className="familyOptionsPage__card familyOptionsPage__card--reascos">
          <h2 className="familyOptionsPage__familyTitle">Reascos</h2>
          <div to="/family/reascos">
            <img src={family_reascos} alt="Reascos Family" />
          </div>
        </div>

        <div className="familyOptionsPage__card familyOptionsPage__card--nacatos">
          <h2 className="familyOptionsPage__familyTitle">Nacatos</h2>
          <div to="/family/nacatos">
            <img src={family_nacato} alt="Nacatos Family" />
          </div>
        </div>

        <div className="familyOptionsPage__card familyOptionsPage__card--carolina">
          <h2 className="familyOptionsPage__familyTitle">Fernandez</h2>
          <div to="/family/carolina">
            <img src={family_carolina} alt="Carolina Family" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyOptionsPage;
