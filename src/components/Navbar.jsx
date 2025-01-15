// import { useSelector } from "react-redux";
import "../styles/Navbar.css";
import { Link }  from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";

export default function Navbar() {

    return(
    <div className="Navbar">
    {/* <Row> */}
            {/* <Row> */}
    <p className="headIn" ><Header></Header></ p>
               {/* <Row> */}
            <div className="row3" >
                <Link className="HomeLink" to="/">
                    <p className="homePage">
                    HOME
                    </p>
                </Link>
                <Link className="HomeLink" to="/about">
                    <p className="aboutPage">
                    ABOUT
                    </p>
                </Link>

                <Link className="HomeLink" to="/contact">
                    <p className="contactPage">
                    CONTACT
                    </p>
                </Link>

                <Link className="HomeLink" to="/resume">
                    <p className="resumePage">
                    RESUME
                    </p>
                </Link>

                <Link className="HomeLink" to="/projects">
                    <p className="projectsPage">
                    PROJECTS
                </p>
            </Link>

                <Link className="HomeLink" to = "/gallery">
                    <p className="galleryPage">
                    GALLERY
                    </p>

                </Link>
            </div>
        {/* </Row> */}
    </div>
    )

}
