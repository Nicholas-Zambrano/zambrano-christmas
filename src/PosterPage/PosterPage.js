// PosterPage.js
import React from "react";
import { Link } from "react-router-dom";
import "./PosterPage.scss";

function PosterPage() {
  return (
    <div className="posterPage">
      <div className="posterPage__card">
        <h1 className="posterPage__title">You're Invited!</h1>
        <p className="posterPage__text">
          Estás invitado a la fiesta de navidad de Zambrano's. Si es tu primera vez, existe una política de 2 tragos cada vez que alguien chupa.
        </p>
        <div className="posterPage__buttonContainer">
          <Link to="/" className="posterPage__button posterPage__backButton">
            Back
          </Link>
          <Link to="/family-options" className="posterPage__button">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PosterPage;
