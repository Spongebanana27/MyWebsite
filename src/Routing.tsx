import Home from "./Home.tsx";
import Hobbies from "./Pages/Hobbies.tsx";
import Resume from "./Pages/Resume.tsx";
import Projects from "./Pages/Projects.tsx";
import Random from "./Pages/Random.tsx";
import Experience from "./Pages/Experience.tsx";
import Favorites from "./Pages/Favorites.tsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdatedHome from "./UpdatedHome.tsx";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UpdatedHome />} />
        <Route path="/Hobbies" element={<Hobbies />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Random" element={<Random />} />
      </Routes>
    </Router>
  );
}

export default Routing;
