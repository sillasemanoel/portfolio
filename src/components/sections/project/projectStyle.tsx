import styled from 'styled-components'

// import photograp from '../../../assets/images/'

export const ProjectStyle = styled.section`
  display: flex;
  background-color: #f9f9f9;
  padding: 120px 0;

  @media (max-width: 1080px) {
    padding: 70px 0 !important;
  }

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
    display: grid;
    gap: 5rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    width: 100%;
  }

  .grid div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid div h1 {
    font-family: 'Mulish', sans-serif;
  }

  .project {
    display: flex;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    flex-direction: row;
    gap: 54px;
    height: auto;
    padding: 19px;
  }

  @media (max-width: 1080px) {
    .project {
      flex-direction: column !important;
      gap: 32px;
      margin: 0 auto;
      width: -moz-fit-content;
      width: -webkit-fit-content;
      width: fit-content;
      align-items: center;
    }
  }

  @media (max-width: 699px) {
    .project {
      width: 90% !important;
    }
  }

  .img {
    width: 460px;
    height: auto;
    background-color: hsla(0, 0%, 46%, .2);
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    overflow: hidden;
    background-image: url();
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 1080px) {
    .img {
      width: 100% !important;
      height: 260px;
    }
  }

  .text {
    max-width: 420px;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

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
    gap: 1rem;
    justify-content: center;
    margin-top: 10px;
  }

  .stack p {
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
