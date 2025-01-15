// header, link React/dom/css/footer/
import React from "react";
// import { postDb, getDb, deleteDb } from './database';
import "../styles/Resume.css";
// import "../Resume";

const ResumePage = () => {
    return (
        <div id="resume">
        <a className="resumeContent" href="../images/Document9.pdf">Click Here - - View Resume</a>
        <a href="../images/Document9.pdf"><img className="resumeLinkImg" src="../images/Resume.png" alt="resumeImg"/></a></div>
    );
}
export default ResumePage