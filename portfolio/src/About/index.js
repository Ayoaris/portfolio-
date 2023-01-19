import React from "react";
import { AboutStyle } from "./aboutStyles";
import photo from "../assets/photo/image.jpeg";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

function About() {
  return (
    <div>
      <AboutStyle>
        {/* About Me */}
        <div className="section-title">
          <h2 className="aboutList">
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
              <div className="list">
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
            </div>

            <div className="photo">
              {" "}
              <img
                src={photo}
                alt="Hero"
                width={"250px"}
                height={"250px"}
                border-radius={"15px"}
              />
            </div>
          </div>
        </div>
        {/* Work Experience */}
        <div className="section-title">
          <h2 className="aboutList">
            <span>02.</span>Where I've Worked
          </h2>

          <div class="experience-wrapper">
            {/* UBA Group */}
            <div class="each-expwrapper">
              <div>
                <h4 class="exp-title">UBA Group</h4>
              </div>
              <div>
                <p class="exp-jobtitle">
                  Frontend Developer{" "}
                  <a href="https://www.ubagroup.com/" rel="noopener noreferrar">
                    <span class="hover-underline-animation">@UBA Group</span>
                  </a>
                </p>
                <p class="exp-years">Jan. 2023 - Present</p>
                <p class="exp-brief">Developing the Wall of Fame</p>
              </div>
            </div>
            {/* VeeNode */}
            <div class="each-expwrapper">
              <div>
                <h4 class="exp-title">VeeNode</h4>
              </div>
              <div>
                <p class="exp-jobtitle">
                  Frontend Developer{" "}
                  <a href="https://veenodetech.com/" rel="noopener noreferrar">
                    <span class="hover-underline-animation">@VeeNode</span>
                  </a>
                </p>
                <p class="exp-years">Oct. 2022 - Dec. 2022</p>
                <p class="exp-brief">
                  Wrote supporting code for web applications and websites.
                </p>

                <p class="exp-brief">
                  Built applications using HTML5, CSS3, JavaScript, Axios,
                  Redux, and React.
                </p>
                <p class="exp-brief">
                  Discussed business requirements with clients to produce
                  actionable development plans and budgets.
                </p>
              </div>
            </div>
            {/* Decagon */}
            <div class="each-expwrapper">
              <div>
                <h4 class="exp-title">Decagon</h4>
              </div>
              <div>
                <p class="exp-jobtitle">
                  Frontend Developer{" "}
                  <a href="https://decagonhq.com/" rel="noopener noreferrar">
                    <span class="hover-underline-animation">@Decagon</span>
                  </a>
                </p>
                <p class="exp-years">May. 2022 - Dec. 2022</p>
                <p class="exp-brief">
                  Application development in Node.js, Express and React.js.
                </p>
                <p class="exp-brief">
                  Participated in design, development and maintenance of
                  streamlined, reusable and reliable code for use within
                  distributed environments
                </p>
                <p class="exp-brief">
                  Applied agile methodologies and effective development best
                  practices to enhance product development.
                </p>
                <p class="exp-brief">
                  Implemented Unit Tests and Integration Tests to ensure 100%
                  coverage using jest.
                </p>
              </div>
            </div>
            {/* Paritie Dynamic Enterprise Limited */}
            <div class="each-expwrapper">
              <div>
                <h4 class="exp-title">Paritie</h4>
              </div>
              <div>
                <p class="exp-jobtitle">
                  FrontendEnd Intern{" "}
                  <a href="https://paritie.com/" rel="noopener noreferrar">
                    <span class="hover-underline-animation">@Paritie </span>
                  </a>
                </p>
                <p class="exp-years">Feb. 2021 - Apr. 2022</p>
                <p class="exp-brief">
                  Maintained understanding of current web technologies and
                  programming practices through continuing education and
                  participation in professional conferences and workshops.
                </p>
                <p class="exp-brief">
                  Analyzed user needs to determine technical requirements to
                  determine and recommend plan for new system and modification
                  of existing system for clients.
                </p>
              </div>
            </div>
          </div>
          {/* Things I've Built */}
          <div className="section-title">
            <h2 className="aboutList">
              <span>03.</span>Things I've Built
            </h2>

            <div className="Projects">
              <div className="each-work">
                <div class="eachwork-image">
                  <img
                    src={photo}
                    alt="feedback"
                    width={"450px"}
                    height={"350px"}
                  />
                </div>

                <div class="eachwork-brief">
                  <h3 className="Pro-name">
                    Project Name <FiGithub /> <FiExternalLink />
                  </h3>
                </div>
              </div>
              <div className="each-work">
                <div class="eachwork-image">
                  <img
                    src={photo}
                    alt="feedback"
                    width={"450px"}
                    height={"350px"}
                  />
                </div>
                <div class="eachwork-brief">
                  <h3 className="Pro-name">
                    Project Name <FiGithub /> <FiExternalLink />
                  </h3>
                </div>
              </div>
            </div>
            <div className="Projects">
              <div className="each-work">
                <div class="eachwork-image">
                  <img
                    src={photo}
                    alt="feedback"
                    width={"450px"}
                    height={"350px"}
                  />
                </div>

                <div class="eachwork-brief">
                  <h3 className="Pro-name">
                    Project Name <FiGithub /> <FiExternalLink />
                  </h3>
                </div>
              </div>
              <div className="each-work">
                <div class="eachwork-image">
                  <img
                    src={photo}
                    alt="feedback"
                    width={"450px"}
                    height={"350px"}
                  />
                  <div class="eachwork-brief">
                    <h3 className="Pro-name">
                      Project Name <FiGithub />
                      <FiExternalLink />
                    </h3>
                    <p className="Pro-icons">

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutStyle>
    </div>
  );
}

export default About;
