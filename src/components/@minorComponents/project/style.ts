import styled from "styled-components";

export const ProjectsOnTheGridStyle = styled.div`
  padding: 19px;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1080px) {
    max-width: 420px;
    height: auto;
    flex-direction: column !important;
  }

  .img {
    width: 100%;
    height: auto;
    background-color: hsla(0, 0%, 46%, 0.2);
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 1080px) {
    .img {
      height: 250px;
    }
  }

  .text {
    width: 100%;
    max-width: 455px;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
  }

  .text h3 {
    color: #2d2e32;
    font-size: 17px;
    margin-bottom: 8px;
    position: relative;
    text-transform: uppercase;
  }

  .text p {
    color: #767676;
    font-size: 17px;
    font-weight: 500;
    text-align: center;
    text-transform: none;
    margin-bottom: 8px;
  }

  .stack {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-top: 10px;
  }

  .stack p {
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #000 !important;
    font-family: "Mulish", sans-serif !important;
    font-weight: 800 !important;
    padding: 10px 12px;
    cursor: pointer;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 8px;
  }

  .links a {
    display: flex;
    align-items: center;
    color: #2d2e32;
    font-size: 17px;
    font-weight: 500;
    color: #2d2e32;
    gap: 6px;
    text-decoration: none;
  }

  .links a:hover {
    color: #615cfb;
  }
`;
