import React, { useContext } from 'react'
import Globalcontext from '../Context/Createcontext'
import "./Viewresume.scss";
import {AiFillFilePdf} from "react-icons/ai";
import{GrFormClose} from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

function Viewresume() {
    const { state } = useContext(Globalcontext);
    const bio = state.bio
    const navigate = useNavigate();
  return (
    <div className='view_resume'>
      {Object.keys(bio.resume).length > 0 ? (
        <>
         <div className="title_container">
          <div className="title">
          <AiFillFilePdf />
          <p className="title_text">{bio.resume.name}</p>
          </div>
          <GrFormClose className='close' onClick={()=> navigate('/')} />
        </div>
        <object className='pdf_viewer' data={bio?.resume?.link} type="">
            <p>No Resume Yet</p>
        </object>
        </>
      ): <div>
        <h1 className='water_text'>No Resume Uploaded yet</h1>
        </div>}
       
    </div>
  )
}

export default Viewresume