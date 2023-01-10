import React from "react";
import { AboutStyle } from "./aboutStyles";
import photo from '../assets/photo/image.jpeg';

function About() {
  return (
    <div>
      <AboutStyle>
        <div className="section-title">
          <h2 className="about">
            <span>01.</span>About Me
          </h2>
          <div className="container">
            <div className="aboutWrapper">
              <p className="about">
                Hello! My name is Samuel Ayodeji Soyebo. I'm a Software Engineer
                at <a href="https://www.ubagroup.com/">UBA Group,</a> and a
                member of the{" "}
                <a href="https://bpmalearning.org/">
                  British Project Management Academy,
                </a>{" "}
                I enjoy building scalable applications while learning new
                technologies.
              </p>
              <p className="about">
                I'm a graduate of Project Management Technology from the Federal
                University of Technology, Minna. also a graduate member of the
                Nigerian Institue of Management Chartered(NIMC). During my
                leisure I make research on Artificial Intelligience (AI) and
                Virtual Reality (VR), enjoy music and playing football games.
              </p>
              <p className="about">
                Here are a few technologies I've been working with recently:
              </p>
              <ul>
                <li> HTML5</li>
                <li>CSS3</li>
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>JavaScript (ES6+)</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL</li>
              </ul>
            </div>

            <div className="photo">
              {" "}
              <img
                src={photo}
                alt="Hero photo"
                width={"250px"}
                height={"250px"}
                border-radius={"15px"}
              />
            </div>
          </div>
        </div>
        <div className="section-title">
          <h2 className="about">
            <span>01.</span>Where I've Worked
          </h2>
          
        </div>
      </AboutStyle>
    </div>
  );
}

export default About;
