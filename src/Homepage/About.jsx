import lookback from "../images/lookback.jpg"
import expimg from "../images/experience.png";
import eduimg from "../images/education.png";
import "../assets/index.css";

const About = () => {
  return (
    <div>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              style={{ width:"350px", filter: "graysca%)" }}
              src={lookback}
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={expimg} alt="Experience icon" class="icon" />
                <h3>Experience</h3>
                <p>
                  6+ months <br />
                  Software Development
                </p>
              </div>
              <div className="details-container">
                <img src={eduimg} alt="Education icon" class="icon" />
                <h3>Education</h3>
                <p>Higher National Diploma</p>
              </div>
            </div>
            <div className="text-container">
              <p>
              I am a Highly-motivated software developer based in Lagos,Nigeria. Curious and Excited to solve problems always. In my free time, I enjoy playing/watching football, hanging out with friends and reading. Learning more to improve skill.
              </p> 
            </div>
          </div>
        </div>
        {/* <img
          src={arrowimg}
          alt="Arrow icon"
          className="icon arrow"
        /> */}
      </section>
    </div>
  );
};

export default About;
