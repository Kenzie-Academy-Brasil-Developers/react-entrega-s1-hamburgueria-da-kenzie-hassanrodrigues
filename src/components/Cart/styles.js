import styled from "styled-components";

export const Section = styled.section`
  width: 336px;
  height: 432px;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 48px;
  background-color: var(--gray-0);
  border-radius: 5px;
`;

export const HeaderCart = styled.div`
  width: inherit;
  height: 12%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #27ae60;
  border-radius: 3px 3px 0 0;

  h3 {
    margin-left: 24px;
    font-weight: bold;
    color: var(--white);
  }
`;

export const UlCart = styled.ul`
  height: 58%;
  width: 100%;
  overflow-y: auto;
`;

export const Li = styled.li`
  width: 89%;
  height: 96px;
  display: flex;
  margin: 8px auto;
  align-items: flex-start;

  img {
    width: 25%;
    height: 80%;
    background-color: var(--gray-20);
    border-radius: 13px;
    margin: auto 0;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 18px 0 0 80px;
    gap: 11px;
    justify-content: flex-start;
    h4 {
      font-weight: bold;
    }
    span {
      opacity: 0.5;
      font-size: 13px;
    }
  }

  button {
    margin-top: 12px;
    border: none;
    background-color: unset;
    cursor: pointer;
    opacity: 0.5;
    :hover {
      color: var(--Negative);
    }
  }
`;

export const Footer = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: 50%;
    border-top: 2px solid var(--gray-20);
    font-weight: bold;
    p {
      opacity: 0.5;
    }
  }
  button {
    height: 35%;
    width: 70%;
    border: none;
    background-color: var(--gray-20);
    border-radius: 8px;
    opacity: 0.8;
    cursor: pointer;
    &:active {
      transition: 0.1s;
      background-color: var(--gray);
      color: #fff;
    }
  }
`;
