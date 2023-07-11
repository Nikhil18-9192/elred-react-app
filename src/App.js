import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Viewresume from "./components/Viewresume/Viewresume";
import Editbio from "./components/Editbio/Editbio";
import Editskills from "./components/Editskills/Editskills";

function App() {
  return (
    <div className="app_container">
      <div className="page_container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/edit_bio" element={<Editbio />}/>
        <Route path="/edit_skills" element={<Editskills />} />
        <Route path="/view_resume" element={<Viewresume />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
