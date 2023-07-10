import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app_container">
      <div className="page_container">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
