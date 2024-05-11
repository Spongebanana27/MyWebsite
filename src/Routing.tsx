import App from "./App.tsx";
import Hobbies from "./Hobbies.tsx";
import Resume from "./Resume.tsx.tsx";
import Projects from "./Projects.tsx";
import Photos from "./Photos.tsx";
import Experience from "./Experience.tsx";
import Favorites from "./Favorites.tsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Hobbies" element={<Hobbies />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default Routing;
