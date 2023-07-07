import styled from 'styled-components'

export const NavStyle = styled.nav`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 25px 40px 25px 50px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, .09);
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

  .translate_switch {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .translate_switch button {
    height: 19px;
    border: 0;
    border-radius: 10px;
  }

  .translate_switch input{
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
    background-color: #eee;
    width: 45px;
    height: 19px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(10, 10, 10, 0.09);
    cursor: pointer;
  }

  .translate_switch input:focus{
    outline: none;
  }

  .translate_switch input:before{
    content: '';
    margin-top: -2.5px;
    display: block;
    width: 20px;
    height: 20px;
    background-color: white;
    border: 2px solid #535458;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, .09);
    position: absolute;
    left: 0;
    transition: left .3s ease-out;
    -webkit-transition: left .3s ease-out;
    text-align: center;
    color: #535458;
  }

  .translate_switch input:after{
    display: block;
    margin-top: -2.5px;
    left: 20px;
    position: absolute;
    font-size: 14px;
    font-weight: bold;
    transition: left .3s ease-out;
    -webkit-transition: left .3s ease-out;
    color: #666;
  }

  .translate_switch input:checked{
    background-color: #535458;
  }

  .translate_switch input:checked:before{
    left: 22.5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .09);
  }

  .translate_switch input:checked:after{
    left: 43.5px;
    color: #535458;
  }

  .translate_switch p {
    font-size: 12px;
    user-select: none;
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
`

export const MobileNavStyle = styled.div`
  div {
    height: 100vh;
    background-color: #fff;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
    transition: all .3s ease-in-out;
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
`
