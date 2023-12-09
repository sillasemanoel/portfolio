import styled from "styled-components";

export const TranslateSwitchStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  button {
    height: 19px;
    border: 0;
    border-radius: 10px;
  }

  input {
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

  input:focus {
    outline: none;
  }

  input:before {
    content: "";
    margin-top: -2.5px;
    display: block;
    width: 20px;
    height: 20px;
    background-color: white;
    border: 2px solid #535458;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
    position: absolute;
    left: 0;
    transition: left 0.3s ease-out;
    -webkit-transition: left 0.3s ease-out;
    text-align: center;
    color: #535458;
  }

  input:after {
    display: block;
    margin-top: -2.5px;
    left: 20px;
    position: absolute;
    font-size: 14px;
    font-weight: bold;
    transition: left 0.3s ease-out;
    -webkit-transition: left 0.3s ease-out;
    color: #666;
  }

  input:checked {
    background-color: #535458;
  }

  input:checked:before {
    left: 22.5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  }

  input:checked:after {
    left: 43.5px;
    color: #535458;
  }

  p {
    font-size: 12px;
    user-select: none;
  }
`;
