import styled from "styled-components";

export const InfoStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
  }

  a {
    color: #64ffda;
  }
  .Hero-main {
    display: flex;
    flex-direction: column;
    padding-top: 20rem;
    padding-bottom: 10rem;
    justify-content: center;
    min-height: 100vh;
    background-color: #041b15;
    margin: auto 9rem;
  }
  .Intro {
    font-family: "sfMono", "SpaceMono", "Lucida Sans", "Lucida Sans Regular",
      "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    color: #64ffda;
    padding: 0 0 1.5rem 0;
  }
  .name {
    font-family: "inter", sans-serif;
    color: #ccd6f6;
    font-size: 4.5rem;
    padding-bottom: 1rem;
  }
  .build {
    font-family: "inter", sans-serif;
    color: #8892b0;
    font-size: 4.5rem;
  }
  .about {
    color: #8892b0;
    font-size: 1.1rem;
    line-height: 1.5rem;
    max-width: 700px;
    margin-top: 1.5rem;
    font-weight: 400;
    padding-bottom: 1rem;
    a {
      color: #64ffda;
    }
  }
  .hero-button {
    background-color: #041b15;
    border: 1px solid #64ffda;
    border-radius: 0.25rem;
    padding: 1.25rem 1.95rem;
    margin-left: 0.3rem;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-decoration: none;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin-top: 3rem;
  }
  .hero-button:hover {
    background-color: #64ffda;
    color: #041b15;

  }
`;