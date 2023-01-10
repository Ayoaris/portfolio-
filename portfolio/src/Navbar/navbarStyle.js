import styled from "styled-components";

export const NavbarStyle = styled.div`
*{
    margin: 0;
    padding: 0;
    position: relative;

}
  .nav-main {
    background-color: #041b15;
    height: 70px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    font-size: 0.75rem;
    font-weight: 500;
    box-shadow: 0 10px 30px -10px rgb(2 12 27 / 70%);
    z-index: 30;
  }

  .logo {
    /* align-items: center;
    font-size: 2rem;
    font-weight: 900;
    color: #64ffda;
    margin-left: 0.9rem; */
    /* position: absolute; */
    height: 80px;
    width: 100px;
    top: 0px;
    left: 3px;
    
  }
  .menu {
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      list-style: none;
    }
    li {
      text-decoration: none;
      font-size: 0.8rem;
      font-weight: 900;
      color: #ccd6f6;
      margin: 0.7rem 1.6rem;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      font-family: "sfMono", "SpaceMono", "Lucida Sans", "Lucida Sans Regular",
        "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
    span {
      color: #64ffda;
      padding-right: 5px;
      font-family: inherit;
    }
    button {
      background-color: #041b15;
      color: #64ffda;
      border: 1px solid #64ffda;
      border-radius: 0rem;
      padding: 0.75rem 1rem;
      margin-right: 6rem;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      font-family: "sfMono", "SpaceMono", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      align-items: center;
      border-radius: 0.2rem;
    }
  }
`;
