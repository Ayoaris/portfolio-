import styled from "styled-components";

export const AboutStyle = styled.div`
  * {
    background-color: #041b15;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  a {
    color: #64ffda;
  }
  .about,
  ul {
    color: #ccd6f6;
    padding-bottom: 3rem;
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
  .section-title {
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
`;