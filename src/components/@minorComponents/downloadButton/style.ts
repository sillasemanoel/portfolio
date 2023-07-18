import styled from 'styled-components'

export const DownloadButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px 18px;
  border: 0;
  background: 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 5px !important;
  }

  span {
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
    align-items: start;
    gap: 8px;
  }

  .info h3 {
    color: #2d2e32;
    font-size: 17px;
    margin-bottom: 0;
    cursor: text;
  }

  .info button {
    padding: 0;
    margin: 0;
    margin: 0;
    color: #767676;
    cursor: pointer;
    font-size: 17px;
    font-weight: 400;
    cursor: pointer;
    background: transparent;
    border: 0;
  }
`
