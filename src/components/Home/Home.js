import React, { useContext } from "react";
import "./Home.scss";
import { AiOutlineLeft } from "react-icons/ai";
import Globalcontext from "../Context/Createcontext";
import { useNavigate } from "react-router-dom";
import Viewbio from "../Viewbio/Viewbio";
import Skills from "../Skills/Skills";
import Ratings from "../Ratings/Ratings";

function Home() {
  const navigate = useNavigate();
  const { state } = useContext(Globalcontext);
  const bio = state.bio;
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="home_container">
      <div className="header" onClick={() => goHome()}>
        <AiOutlineLeft />
        <p className="text">My Bio</p>
      </div>
      <Viewbio bio={bio} />
      <Skills />
      <Ratings />
    </div>
  );
}

export default Home;
