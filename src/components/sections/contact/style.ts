import styled from 'styled-components'

export const ContactStyle = styled.section`
  background-color: #fff;
  padding: 120px 0;

  .container {
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 32px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    .container {
      text-align: center;
    }
  }

  .container p {
    color: #615cfb;
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .container h3 {
    color: #2d2e32;
    font-size: 25px;
    margin-bottom: 60px;
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    gap: 80px;
  }

  @media (max-width: 1050px) {
    .icons {
      align-items: start;
      flex-direction: column;
    }
  }

  @media (max-width: 600px) {
    .icons {
      align-items: center;
      flex-direction: column;
      gap: 60px !important;
    }
  }

  .icons div {
    display: flex;
    justify-content: center;
    gap: 5px 18px;
  }

  @media (max-width: 600px) {
    .icons div {
      flex-direction: column;
      align-items: center;
      gap: 5px !important;
    }
  }

  .icons div span {
    width: 74px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #615cfb;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .info h3 {
    color: #2d2e32;
    font-size: 17px;
    margin-bottom: 0;
  }

  .info a {
    color: #767676;
    cursor: pointer;
    font-size: 17px;
    text-decoration: none;
  }
`
