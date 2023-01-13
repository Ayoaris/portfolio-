import styled from "styled-components";

export const GetintouchContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
  }
  .main-body {
    margin: 0rem 9rem;
    padding: 9rem 0rem;
    text-align: center;
    min-height: 100vh;
    background-color: #041b15;
    margin: auto 9rem;
  }
  .title {
    font-size: 1rem;
    color: #64ffda;
    padding-bottom: 1.5rem;
    font-family: "sfMono", "SpaceMono", "Lucida Sans", "Lucida Sans Regular",
      "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .header {
    font-size: 3.5rem;
    color: #ccd6f6;
    font-family: "inter", sans-serif;
  }
  p {
    color: #8892b0;
    font-size: 1.1rem;
    line-height: 1.5rem;
    margin-top: 1.5rem;
    font-weight: 400;
    padding-bottom: 1rem;
  }
  input {
    width: 50%;
    margin: 1rem 0rem;
    border: 1px solid #64ffda;
    border-radius: 5px;
    padding: 1rem;
    background: transparent;
    outline: none;
    color: white;
    font-size: 0.9rem;
  }
  textarea {
    width: 50%;
    margin: 1rem 0rem;
    border: 1px solid #64ffda;
    border-radius: 5px;
    padding: 1rem;
    background: transparent;
    outline: none;
    color: white;
    font-size: 0.9rem;
    height: 19vh;
  }
  .Btn {
    background-color: #041b15;
    border: 1px solid #64ffda;
    border-radius: 0.25rem;
    padding: 1.25rem 1.95rem;
    color: #64ffda;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    margin: 1rem 0rem;
  }
  .footer{
    margin-top: 5rem;
    color: #8892b0;
    font-size: 0.9rem;
    font-weight: 400;

  }
`;
