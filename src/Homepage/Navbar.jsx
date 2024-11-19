import "../assets/index.css"
import hamburger from "../images/hamburger.png"



const Navbar = ()=>{

  
  
    return(
        <div>
              <nav id="desktop-nav">
      <div className="logo">Tijani Ramon Olamilekan</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <nav id="hamburger-nav">
      <div className="logo">Tijani Ramon Olamilekan</div>
      <div className="hamburger-menu">
        <div className="hamburger-icon">
          <img src={hamburger} alt="Menu" className="hamburger-icon" onclick="toggleMenu('menu-links')" />
        </div>
        <div className="menu-links">
          <li><a href="#about" onclick="toggleMenu()">About</a></li>
          <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
          <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
          <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
        </div>
      </div>
    </nav>
        </div>
    )
}

export default Navbar