import React from "react";
import { BiSolidPencil } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import "./Viewbio.scss";

function Viewbio({ bio, setIsEdit }) {
  return (
    <div className="info_container">
      <div className="about">
        <div className="title">
          <p className="title_text">About Me</p>
          <BiSolidPencil onClick={() => setIsEdit(true)} />
        </div>
        <div className="text">
          {bio.aboutMe === "" ? (
            <p className="water_text">No about me added yet...</p>
          ) : (
            <p className="about_me">{bio.aboutMe}</p>
          )}
        </div>
      </div>
      <div className="blood_group">
        <p className="title_text">Blood Group</p>
        <p className="group_text">{bio.bloodGroup}</p>
      </div>
      <div className="resume">
        <p className="title_text">Resume</p>
        <BsChevronRight />
      </div>
    </div>
  );
}

export default Viewbio;
