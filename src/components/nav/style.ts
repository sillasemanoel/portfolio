import styled from "styled-components";

export const NavStyle = styled.nav`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px 40px 20px 50px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  z-index: 100;

  h3 {
    font-size: 20px;
    color: #2d2e32;
    cursor: pointer;
  }

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }

  ul li {
    display: flex;
    align-items: center;
  }

  ul li a {
    display: flex;
    font-size: 17px;
    font-weight: 600;
    color: #2d2e32;
    text-decoration: none;
  }

  ul li a:hover {
    color: #615cfb;
  }

  ul li svg {
    display: none;
    font-size: 28px;
    cursor: pointer;
  }

  ul li svg:hover {
    color: #615cfb;
  }

  @media (max-width: 900px) {
    ul li a {
      display: none !important;
    }

    ul li svg {
      display: flex !important;
    }
  }
`;

export const MobileNavStyle = styled.div`
  div {
    height: 100vh;
    background-color: #fff;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    transition: all 0.3s ease-in-out;
  }

  .open_menu {
    left: 0 !important;
    width: 100vw;
  }

  .closed_menu {
    left: -100% !important;
    width: 0px !important;
  }

  svg {
    position: absolute;
    top: 26px;
    right: 40px;
    font-size: 28px;
    cursor: pointer;
  }

  svg:hover {
    color: #615cfb;
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    list-style: none;
  }

  ul li a {
    font-size: 23px;
    font-weight: 500;
    color: #2d2e32;
    text-decoration: none;
  }

  ul li a:hover {
    color: #615cfb;
  }
`;
