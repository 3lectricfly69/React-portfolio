import React from "react";
import "../styles/Footer.css";
import footerIcon from "../images/Untitled_file.gif";
import Blips from "../images/Instagram-Animation.gif";
import LinkUp from "../images/LinkedInAnimation.gif";
import CompressRefract from "../images/SpotifyAnimation.gif";

const Footer = () => {
    return (
        <div className="Footer">
            <p id="X">&copy; {new Date().getFullYear()}</p>
            <p className="React">Generated using React via Marlie</p>
            <a href="https://react.dev/"><img id="FooterIcon" src={footerIcon} alt="FooterIcon" /></a>
            {/* <p className="FooterMsg">Get connected 4 free</p> */}
            <a href="https://www.instagram.com/marlieford/"><img id="Blips" src={Blips} className="igAnimation" alt="Instagram" /></a>
            <a href="http://www.linkedin.com/in/marlie-ford/"><img id="LinkUp" src={LinkUp} className="linkedinAnimation" alt="LinkedIn" /></a>
            <a href="http://open.spotify.com/user/marlieford?si=S1fXcuhDQN2f45LRfnI2Eg"><img id="CompressRefract" src={CompressRefract} className="spotifyAnimation" alt="Spotify" /></a>
        </div>
    );
};

export default Footer;
