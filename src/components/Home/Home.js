import React,{useContext, useState} from "react";
import "./Home.scss";
import { AiOutlineLeft } from "react-icons/ai";
import Globalcontext from "../Context/Createcontext"
import { useNavigate } from "react-router-dom";
import Viewbio from "../Viewbio/Viewbio";
import Editbio from "../Editbio/Editbio";

function Home() {
    const navigate = useNavigate();
    const [isEdit, setIsEdit] = useState(false);
    const { state } = useContext(Globalcontext);
    const bio = state.bio;
    const goHome = () => {
        setIsEdit(false);
        navigate("/");
    }
  return <div className="home_container">
    <div className="header">
        <AiOutlineLeft />
        <p className="text" onClick={()=> goHome() }>My Bio</p>
    </div>
    {isEdit ? (
        <Editbio bio={bio} setIsEdit={setIsEdit}/>
    ):(
        <Viewbio bio={bio} setIsEdit={setIsEdit} />
    )}
    
    
  </div>;
}

export default Home;
