import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 288px;
  height: 352px;
  border: 2px solid var(--gray-20);
  border-radius: 3px;

  :hover {
    box-shadow: 3px 3px 10px -5px;
  }
  :hover div > img {
    filter: brightness(105%);
    transform: scale(1.15);
    transition: 0.5s;
  }
`;
export const H1 = styled.h1`
  margin: "0 auto";
  font-size: "20px";
`;

export const DivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55%;
  border-radius: 3px;
  background-color: var(--gray-20);
  img {
    width: 192px;
    height: 100%;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45%;
  padding-top: 8px;
  padding-left: 16px;
  gap: 16px;
  h3 {
    font-weight: bolder;
    font-size: 24px;
  }
  p {
    font-size: 16px;
    color: var(--gray-50);
    opacity: 0.8;
    font-weight: bold;
  }
  button {
    width: 80px;
    height: 32px;
    background-color: var(--Color-primary);
    color: #fff;
    border: unset;
    border-radius: 8px;
    cursor: pointer;
  }
`;
