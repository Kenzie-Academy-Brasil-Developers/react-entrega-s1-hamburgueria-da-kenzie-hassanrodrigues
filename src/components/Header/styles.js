import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 126px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--gray-0);
  gap: 16px;
  font-family: var(--font);

  nav {
    display: flex;
    justify-content: center;
    input {
      width: 320px;
      height: 45px;
      border: 1.5px solid var(--gray-20);
      border-radius: 8px;
      padding-left: 17px;
      font-weight: 500;
      opacity: 0.7;

      @media screen and (min-width: 1400px) {
        margin-left: 252px;
      }

      :hover {
        border: 1.5px solid var(--Color-primary);
      }
    }
    button {
      position: absolute;
      transform: translate(7.4rem, 8px);
      height: 36px;
      border: unset;
      background-color: var(--Color-primary);
      font-weight: 600;
      color: #fff;
      border-radius: 8px;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 650px) {
    flex-direction: row;
    justify-content: space-around;
    height: 80px;
  }
`;
