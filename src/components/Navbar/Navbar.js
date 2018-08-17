import React from "react";
import "./Navbar.css"
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"
import nav from "../../images/nav.png"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faDown from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown'

const Navbar = () =>
<div>
 <div className="navbar-container">
     <ul className= "navbar" role="navigation">
         <li className="title"><h2>Joseph Marlitt</h2></li>
         <li className="description"><h3>Full Stack Developer</h3></li>
         <a href="/portfolio"><li ><button className="navButton">Portfolio</button></li></a>
         <a href="/Contact"><li><button className="navButton">Contact</button></li></a>
         <a href="/"><li><button className="navButton">About Me</button></li></a>
         <ul className="icon-container">
            <li className="copyright"><h2>Copywrite &copy; Joseph Marlitt</h2></li>
            <a href="https://www.linkedin.com/in/josephmarlitt/"><img className="iconImage" src={linkedin} alt="linkedin"></img></a>
            <a href="https://github.com/joseph-marlitt"><img className="iconImage" src={github} alt="github"></img></a>
         </ul> 
    </ul> 
    </div>
    <div className= "m-navbar">
        <ul className="m-header">
            <ul>
                <li className="m-title">Joseph Marlitt</li>
                <li className="m-description">Full Stack Developer</li>
            </ul>
            <li className="m-search"> <FontAwesomeIcon icon={faDown} />
                <ul className="dropdown" role="navigation" src={nav} alt="navigation">
                    <li className="m-button"><a href="/portfolio">Portfolio</a></li>
                    <li className="m-button"><a href="/Contact">Contact</a></li>
                    <li className="m-button"><a href="/">About Me</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
export default Navbar;
