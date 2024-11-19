import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";
import meInSuit from "../images/meINsuit.jpg";

import "../assets/index.css";

const Profile = () => {
  return (
    <div>
      <section id="profile">
        <div className="section__pic-container">
          <img
            style={{ width: "350px", borderRadius: "20%", border: "none" }}
            src={meInSuit}
            alt=""
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Tijani Ramon Olamilekan</h1>
          <p className="section__text__p2">Software Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              // onclick="window.open('./assets/resume-example.pdf')"
            >
              Download CV
            </button>
            
            
              <button className="btn btn-color-1"><a href="#contact">Contact Info</a></button>
            
          </div>
          <div id="socials-container">
            <a href="https://www.linkedin.com/in/tijani-ramon/" target="_blank">
              <img
                src={Linkedin}
                alt="My LinkedIn profile"
                className="icon"
              />
            </a>
            <a href="https://github.com/7eejay" target="_blank">
            <img
              src={Github}
              alt="My Github profile"
              className="icon"
            />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
