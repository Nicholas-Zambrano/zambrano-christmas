// // FamilyOptionsPage.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "./FamilyOptionsPage.scss";
// import family_yanez from "../assets/images/yanez-family.jpg";
// import family_bustillos from "../assets/images/bustillos-family.jpg";
// import family_reascos from "../assets/images/reascos-family.jpg";
// import family_nacato from "../assets/images/nacato-family.jpg";
// import family_carolina from "../assets/images/carolina-family.jpg";

// const FamilyOptionsPage = () => {
//   return (
//     <div className="familyOptionsPage">
//       <div className="familyOptionsPage__header">
//         <h1 className="familyOptionsPage__title">The Family</h1>
//         <div className="familyOptionsPage__buttons">
//           <Link to="/poster" className="familyOptionsPage__button">
//             Back to Poster
//           </Link>
//           <Link to="/" className="familyOptionsPage__button">
//             Home
//           </Link>
//           <Link to="/details" className="familyOptionsPage__button">
//             Details Party
//           </Link>
//         </div>
//       </div>
//       <div className="familyOptionsPage__cards">
//         <div className="familyOptionsPage__card familyOptionsPage__card--yanez">
//           <h2 className="familyOptionsPage__familyTitle">Yanez</h2>
//           <div to="/family/yanez">
//             <img src={family_yanez} alt="Yanez Family" />
//           </div>
//         </div>

//         <div className="familyOptionsPage__card familyOptionsPage__card--bustillos">
//           <h2 className="familyOptionsPage__familyTitle">Bustillos</h2>
//           <div to="/family/bustillos">
//             <img src={family_bustillos} alt="Bustillos Family" />
//           </div>
//         </div>

//         <div className="familyOptionsPage__card familyOptionsPage__card--reascos">
//           <h2 className="familyOptionsPage__familyTitle">Reascos</h2>
//           <div to="/family/reascos">
//             <img src={family_reascos} alt="Reascos Family" />
//           </div>
//         </div>

//         <div className="familyOptionsPage__card familyOptionsPage__card--nacatos">
//           <h2 className="familyOptionsPage__familyTitle">Nacatos</h2>
//           <div to="/family/nacatos">
//             <img src={family_nacato} alt="Nacatos Family" />
//           </div>
//         </div>

//         <div className="familyOptionsPage__card familyOptionsPage__card--carolina">
//           <h2 className="familyOptionsPage__familyTitle">Fernandez</h2>
//           <div to="/family/carolina">
//             <img src={family_carolina} alt="Carolina Family" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FamilyOptionsPage;
// FamilyOptionsPage.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./FamilyOptionsPage.scss";
// import family_yanez from "../assets/images/yanez-family.jpg";
// import family_bustillos from "../assets/images/bustillos-family.jpg";
// import family_reascos from "../assets/images/reascos-family.jpg";
// import family_nacato from "../assets/images/nacato-family.jpg";
// import family_carolina from "../assets/images/carolina-family.jpg";

// const FamilyOptionsPage = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const handleCardHover = (family) => {
//     setHoveredCard(family);
//   };

//   const handleCardLeave = () => {
//     setHoveredCard(null);
//   };

//   const getCardDescription = () => {
//     switch (hoveredCard) {
//       case "yanez":
//         return "The Yanez family - always the life of the party!";
//       case "bustillos":
//         return "The Bustillos family - known for their dance moves!";
//       case "reascos":
//         return "The Reascos family - bringing the laughter to every gathering!";
//       case "nacatos":
//         return "The Nacatos family - masters of storytelling and jokes!";
//       case "fernandez":
//         return "The Fernandez family - adding elegance and style to every event!";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="familyOptionsPage">
//       <div className="familyOptionsPage__header">
//         <h1 className="familyOptionsPage__title">The Family</h1>
//         <div className="familyOptionsPage__buttons">
//           <Link to="/poster" className="familyOptionsPage__button">
//             Back to Poster
//           </Link>
//           <Link to="/" className="familyOptionsPage__button">
//             Home
//           </Link>
//           <Link to="/details" className="familyOptionsPage__button">
//             Details Party
//           </Link>
//         </div>
//       </div>
//       <div className="familyOptionsPage__cards">
//         <div
//           className={`familyOptionsPage__card familyOptionsPage__card--yanez`}
//           onMouseEnter={() => handleCardHover("yanez")}
//           onMouseLeave={handleCardLeave}
//         >
//           <h2 className="familyOptionsPage__familyTitle">Yanez</h2>
//           <div to="/family/yanez">
//             <img src={family_yanez} alt="Yanez Family" />
//             {hoveredCard === "yanez" && (
//               <p className="familyOptionsPage__cardDescription">
//                 {getCardDescription()}
//               </p>
//             )}
//           </div>
//         </div>

//         <div
//           className={`familyOptionsPage__card familyOptionsPage__card--bustillos`}
//           onMouseEnter={() => handleCardHover("bustillos")}
//           onMouseLeave={handleCardLeave}
//         >
//           <h2 className="familyOptionsPage__familyTitle">Bustillos</h2>
//           <div to="/family/bustillos">
//             <img src={family_bustillos} alt="Bustillos Family" />
//             {hoveredCard === "bustillos" && (
//               <p className="familyOptionsPage__cardDescription">
//                 {getCardDescription()}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Repeat the pattern for other cards */}
//         <div
//           className={`familyOptionsPage__card familyOptionsPage__card--reascos`}
//           onMouseEnter={() => handleCardHover("reascos")}
//           onMouseLeave={handleCardLeave}
//         >
//           <h2 className="familyOptionsPage__familyTitle">Reascos</h2>
//           <div to="/family/reascos">
//             <img src={family_reascos} alt="Reascos Family" />
//             {hoveredCard === "reascos" && (
//               <p className="familyOptionsPage__cardDescription">
//                 {getCardDescription()}
//               </p>
//             )}
//           </div>
//         </div>

//         <div
//           className={`familyOptionsPage__card familyOptionsPage__card--yanez`}
//           onMouseEnter={() => handleCardHover("nacatos")}
//           onMouseLeave={handleCardLeave}
//         >
//           <h2 className="familyOptionsPage__familyTitle">Nacatos</h2>
//           <div to="/family/yanez">
//             <img src={family_nacato} alt="Nacato Family" />
//             {hoveredCard === "nacatos" && (
//               <p className="familyOptionsPage__cardDescription">
//                 {getCardDescription()}
//               </p>
//             )}
//           </div>
//         </div>
//         <div
//           className={`familyOptionsPage__card familyOptionsPage__card--fernandez`}
//           onMouseEnter={() => handleCardHover("fernandez")}
//           onMouseLeave={handleCardLeave}
//         >
//           <h2 className="familyOptionsPage__familyTitle">Fernandez</h2>
//           <div to="/family/fernandez">
//             <img src={family_carolina} alt="Fernandez Family" />
//             {hoveredCard === "fernandez" && (
//               <p className="familyOptionsPage__cardDescription">
//                 {getCardDescription()}
//               </p>
//             )}
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default FamilyOptionsPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FamilyOptionsPage.scss";
import family_yanez from "../assets/images/yanez-family.jpg";
import family_bustillos from "../assets/images/bustillos-family.jpg";
import family_reascos from "../assets/images/reascos-family.jpg";
import family_nacato from "../assets/images/nacato-family.jpg";
import family_carolina from "../assets/images/carolina-family.jpg";

const FamilyOptionsPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (family) => {
    setHoveredCard(family);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const getCardDescription = (family) => {
    switch (family) {
      case "yanez":
        return "";
      case "bustillos":
        return "";
      case "reascos":
        return "";
      case "nacato":
        return "";
      case "fernandez":
        return "";
      default:
        return "";
    }
  };

  return (
    <div className="familyOptionsPage">
      <div className="familyOptionsPage__header">
        <h1 className="familyOptionsPage__title">The Family</h1>
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
        <div
          className={`familyOptionsPage__card familyOptionsPage__card--yanez`}
          onMouseEnter={() => handleCardHover("yanez")}
          onMouseLeave={handleCardLeave}
        >
          <h2 className="familyOptionsPage__familyTitle">Yanez</h2>
          <div to="/family/yanez">
            <img src={family_yanez} alt="Yanez Family" />
            {hoveredCard === "yanez" && (
              <p className="familyOptionsPage__cardDescription">
                {getCardDescription("yanez")}
              </p>
            )}
          </div>
        </div>

        <div
          className={`familyOptionsPage__card familyOptionsPage__card--bustillos`}
          onMouseEnter={() => handleCardHover("bustillos")}
          onMouseLeave={handleCardLeave}
        >
          <h2 className="familyOptionsPage__familyTitle">Bustillos</h2>
          <div to="/family/bustillos">
            <img src={family_bustillos} alt="Bustillos Family" />
            {hoveredCard === "bustillos" && (
              <p className="familyOptionsPage__cardDescription">
                {getCardDescription("bustillos")}
              </p>
            )}
          </div>
        </div>

        {/* Repeat the pattern for other cards */}
        <div
          className={`familyOptionsPage__card familyOptionsPage__card--reascos`}
          onMouseEnter={() => handleCardHover("reascos")}
          onMouseLeave={handleCardLeave}
        >
          <h2 className="familyOptionsPage__familyTitle">Reascos</h2>
          <div to="/family/reascos">
            <img src={family_reascos} alt="Reascos Family" />
            {hoveredCard === "reascos" && (
              <p className="familyOptionsPage__cardDescription">
                {getCardDescription("reascos")}
              </p>
            )}
          </div>
        </div>

        <div
          className={`familyOptionsPage__card familyOptionsPage__card--nacato`}
          onMouseEnter={() => handleCardHover("nacato")}
          onMouseLeave={handleCardLeave}
        >
          <h2 className="familyOptionsPage__familyTitle">Nacato</h2>
          <div to="/family/nacato">
            <img src={family_nacato} alt="Nacato Family" />
            {hoveredCard === "nacato" && (
              <p className="familyOptionsPage__cardDescription">
                {getCardDescription("nacato")}
              </p>
            )}
          </div>
        </div>

        <div
          className={`familyOptionsPage__card familyOptionsPage__card--fernandez`}
          onMouseEnter={() => handleCardHover("fernandez")}
          onMouseLeave={handleCardLeave}
        >
          <h2 className="familyOptionsPage__familyTitle">Fernandez</h2>
          <div to="/family/fernandez">
            <img src={family_carolina} alt="Fernandez Family" />
            {hoveredCard === "fernandez" && (
              <p className="familyOptionsPage__cardDescription">
                {getCardDescription("fernandez")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyOptionsPage;
