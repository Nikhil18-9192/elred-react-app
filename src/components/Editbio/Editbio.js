import React, { useRef, useState, useContext } from "react";
import "./Editbio.scss";
import { AiFillDelete } from "react-icons/ai";
import Globalcontext from "../Context/Createcontext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

function Editbio() {
  const { state, dispatch } = useContext(Globalcontext);
  const bio = state.bio;
  const fileInput = useRef(null);
  const [info, setInfo] = useState(bio);
  const navigate = useNavigate();
  const handleform = (values) => {
    dispatch({ type: "SET_BIO", payload: values });
    navigate("/");
  };
  const fileHandle = () => {
    fileInput.current.click();
  };

  const validationSchema = Yup.object().shape({
    aboutMe: Yup.string()
      .min(1, "Too Short!")
      .max(500, "Character Limit exceeded!")
      .required("Required"),
    bloodGroup: Yup.string().required("Required"),
    resume: Yup.mixed().test(
      "fileSize",
      "File size should be less than 5MB",
      (value) => {
        if (Object.keys(value).length === 0) return true;
        return value.size < 5;
      }
    ),
  });

  const formik = useFormik({
    initialValues: info,
    validationSchema: validationSchema,
    onSubmit: handleform,
  });

  const selectHandle = (e) => {
    setInfo({ ...info, bloodGroup: e.target.value });
    formik.setValues({ ...formik.values, bloodGroup: e.target.value });
  };

  const fileHandlechange = (e) => {
    const file = e.target.files[0];
    const fileSize = file.size / 1024 / 1024;

    setInfo({
      ...info,
      resume: {
        link: URL.createObjectURL(e.target.files[0]),
        name: e.target.files[0].name,
        size: fileSize,
      },
    });
    formik.setValues({
      ...formik.values,
      resume: {
        link: URL.createObjectURL(e.target.files[0]),
        name: e.target.files[0].name,
        size: fileSize,
      },
    });
  };

  const deleteFile = () => {
    setInfo({ ...info, resume: {} });
    formik.setValues({ ...formik.values, resume: {} });
  };

  return (
    <div className="edit_container">
      <div className="header" onClick={() => navigate("/")}>
        <AiOutlineLeft />
        <p className="text">My Bio</p>
      </div>
      <div className="about">
        <p className="label">write something about yourself.</p>
        <textarea
          className="about_text"
          name="aboutMe"
          id=""
          rows="10"
          placeholder="Write something here..."
          disabled={formik.values.aboutMe.length > 500}
          onChange={formik.handleChange}
          value={formik.values.aboutMe}
        ></textarea>
        <p className="small_text">{info.aboutMe.length}/500</p>
        <span style={{ fontSize: "12px", color: "red", float: "right" }}>
          {" "}
          {formik.errors.aboutMe}
        </span>
      </div>

      {Object.keys(info.resume).length !== 0 ? (
        <div className="uploaded_view">
          <object data={info.resume.link} width="100%" height="100%" type="">
            <p>No File yet</p>
          </object>
          <div className="resume_name">
            <p className="label">{info.resume.name}</p>
            <AiFillDelete onClick={() => deleteFile()} />
          </div>
          <span style={{ fontSize: "12px", color: "red", float: "right" }}>
            {" "}
            {formik.errors.resume}
          </span>
        </div>
      ) : (
        <div className="resume" onClick={() => fileHandle()}>
          <input
            ref={fileInput}
            type="file"
            name="resume"
            accept="application/pdf"
            className="file_input"
            id="file_input"
            onChange={(e) => fileHandlechange(e)}
          />
          <p className="text">Upload Resume</p>
        </div>
      )}

      <div className="bloodgroup">
        <p className="label">Blood Group</p>
        <select
          name="bloodgroup"
          className="select_box"
          value={info.bloodGroup}
          onChange={(e) => selectHandle(e)}
        >
          <option value="" disabled>
            Select a blood Group
          </option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <span style={{ fontSize: "12px", color: "red", float: "right" }}>
          {" "}
          {formik.errors.bloodGroup}
        </span>
      </div>
      <button className="save_btn" type="submit" onClick={formik.handleSubmit}>
        Save
      </button>
    </div>
  );
}

export default Editbio;
