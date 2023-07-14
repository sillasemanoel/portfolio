import styled from 'styled-components'

import photograp from '../../../../public/images/projects/technicalAssistance.png'

export const ProjectStyle = styled.section`
  display: flex;
  background-color: #f9f9f9;
  padding: 120px 0;

  .container {
    width: 1000px;
    margin: 0 auto;
    padding: 0 32px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 699px) {
    .container {
      align-items: center;
      text-align: center;
      max-width: 510px;
    }
  }

  .container p {
    font-size: 17px;
    font-weight: 700;
    color: #615cfb;
    margin-bottom: 11px;
    text-transform: uppercase;
  }

  .container h3 {
    color: #2d2e32;
    font-size: 25px;
    line-height: 1.4;
    margin-bottom: 60px;
  }

  .grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;
  }

  .project {
    padding: 19px;
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: row;
    gap: 40px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  }

  @media (max-width: 1080px) {
    .project {
      max-width: 420px;
      height: auto;
      flex-direction: column !important;
    }
  }

  .img {
    width: 100%;
    height: auto;
    background-color: hsla(0, 0%, 46%, .2);
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    overflow: hidden;
    background-image: url(${photograp});
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
    margin-bottom: 22px;
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
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    color: #000 !important;
    font-family: 'Mulish', sans-serif !important;
    font-weight: 800 !important;
    padding: 10px 12px;
    cursor: pointer;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-top: 30px;
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
`
