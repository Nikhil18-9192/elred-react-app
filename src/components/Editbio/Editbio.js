import React, { useRef, useState,useContext } from "react";
import "./Editbio.scss";

import Globalcontext from "../Context/Createcontext";

function Editbio({ bio, setIsEdit }) {
    const { dispatch } = useContext(Globalcontext);
    const fileInput = useRef(null)
    const [info, setInfo] = useState(bio)
    const handleform = (values) => {
        dispatch({type:"SET_BIO",payload:values})
        setIsEdit(false)
    }
    const fileHandle = () => {
        fileInput.current.click();
    }
    
  return <div className="edit_container">
    
    <div className="about">
        <p className="label">write something about yourself.</p>
     <textarea className="about_text" name="about" id="" cols="30" rows="10" placeholder="Write something here..." onChange={(e)=>setInfo({...info,aboutMe:e.target.value})} value={info.aboutMe}></textarea>
    </div>
    <div className="resume" onClick={()=>fileHandle()}>
        <input ref={fileInput} type="file" name="resume" className="file_input" id="file_input" onChange={(e)=>setInfo({...info,resume: URL.createObjectURL(e.target.files[0])})}/>
        <p className="text">Upload Resume</p>
    </div>
    <div className="bloodgroup">
        <p className="label">Blood Group</p>
        <select name="bloodgroup" className="select_box" id="" value={info.bloodGroup} onChange={(e)=>setInfo({...info,bloodGroup:e.target.value})}>
            <option value="Select a blood Group" disabled>Select a blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
        </select>
    </div>
    <button className="save_btn" onClick={()=>handleform(info)}>Save</button>
  </div>;
}

export default Editbio;
