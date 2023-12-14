import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import PosterPage from "./PosterPage/PosterPage";
import FamilyOptionsPage from "./FamilyOptionsPage/FamilyOptionsPage";
import DetailsPage from "./DetailsPage/DetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<HomePage/>}/>
          <Route path="/poster" element={<PosterPage/>}/>
          <Route path="/family-options" element={<FamilyOptionsPage/>}/>
          <Route path="/details" element={<DetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
