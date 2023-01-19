import styled from "styled-components";

export const AboutStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
  }
  .container {
    background-color: #041b15;
    display: flex;
    justify-content: space-between;
  }
  a {
    color: #64ffda;
  }
  .aboutList {
    background-color: #041b15;
    color: #ccd6f6;
    padding-bottom: 3rem;
  }
  .aboutList::after {
    content: "------------------------";
    display: inline;
    position: relative;
    width: 18rem;
    height: 1px;
    margin-left: 1rem;
    color: #8892b0;
  }
  .about {
    color: #ccd6f6;
    padding-bottom: 3rem;
    font-size: 1rem;
  }
  .list li {
    padding-bottom: 0.5rem;
    list-style: none;
    position: relative;
    padding-left: 1rem;
    font-size: 0.9rem;
  }

  .list li::before {
    content: "▹";
    position: absolute;
    left: 0px;
    top: 0px;
    color: #64ffda;
  }
  .aboutWrapper {
    display: flex;
    flex-direction: column;
    color: #8892b0;
    font-size: 1.1rem;
    line-height: 1.5rem;
    max-width: 700px;
    margin-top: 1.5rem;
    font-weight: 400;
    padding-bottom: 1rem;
    text-decoration: none;
    list-style: inside;
  }
  /* .list::before {
    content: "▹";
    position: absolute;
    left: 0px;
    top: 0px;
    color: #64ffda;
  } */
  .section-title {
    background-color: #041b15;
    margin: auto 9rem;
  }
  .photo img {
    margin-right: 5rem;
    border-radius: 15px;
    border: 3px solid #64ffda;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 20, 0.35) 0px 5px 15px;
  }
  img:hover {
    transform: scale(1.1);

    box-shadow: rgba(0, 0, 20, 0.35) 0px 5px 15px;
  }
  /* .photo img::after{
      content: "";
      width: 100%;
      height: 100%;
      border: 10px solid #64ffda;
      border-radius: 0.3rem;
      position: absolute;
      top: 12px;
      left: 12px;
      z-index: -2;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
   */
  /*
  .section-title::after {
    content: "";
    display: block;
    position: relative;
    width: 18rem;
    height: 1px;
    margin-left: 1rem;
    background-color: #8892b0;
  } */
  span {
    color: #64ffda;
    padding-right: 5px;
    font-family: inherit;
  }
  .experience-wrapper {
  }
  .each-expwrapper {
    padding: 0.5rem 0rem;
    display: flex;
    /* justify-content: space-between; */
    gap: 3rem;
    margin-bottom: 1rem;
    height: auto;
    font-size: 1.1rem;
    line-height: 1.5rem;
    /* max-width: 700px; */
  }
  .exp-title {
    padding: 1rem;
    border-left: 3px solid #64ffda;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    color: #64ffda;
    font-size: 1.2rem;
    font-weight: 400;
    width: 8rem;
    font-family: "sfMono", "SpaceMono", "Lucida Sans", "Lucida Sans Regular",
      "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .exp-jobtitle {
    color: #ccd6f6;
    padding-top: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .exp-years {
    color: #8892b0;
    padding: 1rem 0rem;
    font-family: "sfMono", "SpaceMono", "Lucida Sans", "Lucida Sans Regular",
      "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 0.9rem;
  }
  .exp-brief {
    font-size: 0.9rem;
    position: relative;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    line-height: 1.2rem;
    max-width: 80%;
    color: #8892b0;
  }

  .exp-brief::before {
    content: "▹";
    position: absolute;
    left: 0px;
    top: 0px;
    color: #64ffda;
  }
  .Projects {
    display: flex;
    gap: 3rem;
    padding-bottom: 2.4rem;
    /* justify-content: space-between; */
  }
  .eachwork-image img {
    /* height: 50%;
    width: 70%; */
    border: 3px #112240 solid;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    opacity: 0.7;
  }
  .eachwork-brief {
    width: 450px;
    height: 90px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #112240;
    padding: 1rem;
  }
  .Pro-name {
    color: #8892b0;
    font-size: 1.2rem;
    font-weight: 900;
    background-color: #112240;
  }
  .Pro-name:hover {
    color: #64ffda;
  }
`;
