import React, { useContext } from "react";
import "./Skills.scss";
import { BiSolidPencil } from "react-icons/bi";
import Globalcontext from "../Context/Createcontext";
import { useNavigate } from "react-router-dom";

function Skills() {
  const navigate = useNavigate();
  const { state } = useContext(Globalcontext);
  const skills = state.bio.skills;
  const hobbies = state.bio.hobbies;
  const subjects = state.bio.subjects;
  return (
    <div className="skills_container">
      <div className="title">
        <h3 className="title_text">Skills</h3>
        <BiSolidPencil onClick={() => navigate("/edit_skills")} />
      </div>
      <p className="label">
        I am incredible at these skills/professionally great at
      </p>
      <div className="skills">
        {skills.map((skill, index) => (
          <span className="skill" key={index}>
            {skill.value}
          </span>
        ))}
      </div>
      <p className="label">Hobies I am passionate about</p>
      <div className="skills">
        {hobbies.map((hobby, index) => (
          <span className="skill" key={index}>
            {hobby.value}
          </span>
        ))}
      </div>
      <p className="label">My favourite subjects are</p>
      <div className="skills">
        {subjects.map((subject, index) => (
          <span className="skill" key={index}>
            {subject.value}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
