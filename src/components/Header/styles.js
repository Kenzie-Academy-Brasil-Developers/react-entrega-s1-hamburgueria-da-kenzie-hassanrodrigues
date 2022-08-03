import styled from "styled-components";

export const HeaderStyled = styled.header`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 126px;
  background-color: var(--gray-0);
  font-family: var(--font);
  gap: 16px;

  nav {
    display: flex;
    justify-content: center;
    line-height: 1;
    gap: 50%;
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
      justify-content: space-between;
      transform: translate(120px, 8px);
      position: absolute;
      height: 36px;
      border: unset;
      border-radius: 8px;
      font-weight: 600;
      background-color: var(--Color-primary);
      color: #fff;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 650px) {
    flex-direction: row;
    justify-content: space-around;
    height: 80px;
  }
`;
