// HomePage.js
import { Link } from "react-router-dom";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <header className="homePage__header">
        <h1 className="homePage__title">ZAMBRANO CHRISTMAS PARTY</h1>

      </header>
      <Link to="/poster" className="homePage__button">
          Welcome
        </Link>
    </div>
  );
}

export default HomePage;
