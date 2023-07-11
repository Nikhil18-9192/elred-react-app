import React, { useContext, useEffect, useState } from "react";
import "./Editskills.scss";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Globalcontext from "../Context/Createcontext";
import { IoIosClose } from "react-icons/io";
import axios from "axios";

function Editskills() {
  const navigate = useNavigate();
  const { dispatch } = useContext(Globalcontext);
  
  const [visibleSkill, setVisibleSkill] = useState(false);
  const [visibleHobby, setVisibleHobby] = useState(false);
  const [visibleSubject, setVisibleSubject] = useState(false);
  const [skillList, setSkillList] = useState([]);
  const [hobbyList, setHobbyList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [selectedHobby, setSelectedHobby] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState([]);
  const fetchData = async () => {
    const skills_data = await axios.get(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json"
    );
    const hobbies_data = await axios.get(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json"
    );
    const subjects_data = await axios.get(
      "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json"
    );

    setSkillList(skills_data.data.result[0].skills);
    setHobbyList(hobbies_data.data.result[0].hobbies);
    setSubjectList(subjects_data.data.result[0].subjects);
  };
  const handleSave = () => {
    dispatch({ type: "ADD_SKILL", payload: selectedSkill });
    dispatch({ type: "ADD_HOBBY", payload: selectedHobby });
    dispatch({ type: "ADD_SUBJECT", payload: selectedSubject });
    navigate("/")
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="edit_skills">
      <div className="header" onClick={() => navigate("/")}>
        <AiOutlineLeft />
        <p className="text">Skills</p>
      </div>
      <p className="label">
        I am incredible at these skills/professionally great at
      </p>
      <div className="wrapper">
      <div className="skills" onClick={() => setVisibleSkill(!visibleSkill)}>
        {selectedSkill.map((skill, index) => (
          <div className="skill" key={index}>
            <span>{skill.value}</span> <IoIosClose onClick={() => setSelectedSkill(selectedSkill.filter(item=>item.id!==skill.id))} />
          </div>
        ))}
      </div>
      <div className="skills_list" style={{ display: visibleSkill ? "block" : "none" }}>
            {Object.values(skillList).map((skill, index) => (
              <p className="skill" key={index} onClick={()=> setSelectedSkill(item=> [...item, skill]) }>{skill.value}</p>
            ))}
        </div>
      </div>
      <p className="label">Hobies I am passionate about</p>
      <div className="wrapper">
      <div className="skills" onClick={() => setVisibleHobby(!visibleHobby)}>
        {selectedHobby.map((hobby, index) => (
          <span className="skill" key={index}>
            <span>{hobby.value}</span><IoIosClose onClick={() => setSelectedHobby(selectedHobby.filter(item=>item.id!==hobby.id))} />
          </span>
        ))}
      </div>
      <div className="skills_list" style={{ display: visibleHobby ? "block" : "none" }}>
            {Object.values(hobbyList).map((hobby, index) => (
              <p className="skill" key={index} onClick={()=> setSelectedHobby(item=> [...item, hobby]) }>{hobby.value}</p>
            ))}
        </div>
      </div>
      <p className="label">My favourite subjects are</p>
      <div className="wrapper">
      <div className="skills" onClick={() => setVisibleSubject(!visibleSubject)}>
        {selectedSubject.map((subject, index) => (
          <span className="skill" key={index}>
           <span>{subject.value}</span><IoIosClose onClick={() => setSelectedSubject(selectedSubject.filter(item=>item.id!==subject.id))} />
          </span>
        ))}
      </div>
      <div className="skills_list" style={{ display: visibleSubject ? "block" : "none" }}>
            {Object.values(subjectList).map((subject, index) => (
              <p className="skill" key={index} onClick={()=> setSelectedSubject(item=> [...item, subject]) }>{subject.value}</p>
            ))}
        </div>
      </div>
      <button className="save_btn" onClick={() => handleSave()}>Save</button>
    </div>
  );
}

export default Editskills;
