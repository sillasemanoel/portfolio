import styled from 'styled-components'

export const AboutStyle = styled.section`
  background-color: #fff;
  padding: 120px 0;
  box-sizing: border-box;

  @media (max-width: 1080px) {
    padding: 70px 0 !important;
  }

  .container {
    margin: 0 auto;
    padding: 0 32px;
    max-width: 1000px;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1080px) {
    .container {
      grid-template-columns: 1fr !important;
      text-align: center !important;
    }
  }

  .img {
    position: relative;
  }

  .work {
    border-radius: 18px;
    width: 412px;
    height: 280px;
  }

  @media (max-width: 1080px) {
    .work {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 460px) {
    .work {
      height: auto !important;
      width: 94% !important;
    }
  }

  .emojiWork {
    position: absolute;
    bottom: 45px;
    right: 105px;
    width: 63px !important;
    z-index: 10;
  }

  @media (max-width: 1080px) {
    .emojiWork {
      display: none !important;
    }
  }

  .img span {
    width: 180px;
    height: 180px;
    position: absolute;
    bottom: -20px;
    right: 45px;
    border-radius: 50%;
    background-color: #fff;
  }

  @media (max-width: 1080px) {
    .img span {
      display: none;
    }
  }

  .img span img {
    width: 180px;
    animation: rotate 9s linear infinite;
  }

  @keyframes rotate {
    100% {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }

  @media (max-width: 1080px) {
    .text {
      margin: 0 auto;
      max-width: 510px;
      padding-right: 0;
    }
  }

  .text h3 {
    color: #615cfb;
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .text h4 {
    color: #2d2e32;
    font-family: Poppins, sans-serif;
    font-size: 25px;
    line-height: 1.4;
    margin-bottom: 18px;
  }

  .text p {
    color: #767676;
    font-family: Mulish, sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.5;
  }
`
