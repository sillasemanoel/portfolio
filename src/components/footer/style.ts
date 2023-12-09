import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 40px;
  box-sizing: border-box;
  background-color: #2d2e32;

  .limit {
    width: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .limit h3 {
    color: #fff;
    font-size: 17px;
  }

  .socials {
    display: flex;
    gap: 20px;
  }

  .socials a {
    display: flex;
    color: #fff;
    margin: 0;
  }

  @media (max-width: 530px) {
    .limit {
      flex-direction: column;
      text-align: center;
      gap: 16px;
    }
  }
`;
