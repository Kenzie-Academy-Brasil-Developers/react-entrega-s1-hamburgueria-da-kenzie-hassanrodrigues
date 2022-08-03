import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  overflow-x: auto;
  width: inherit;
  height: max-content;
  align-items: center;
  gap: 32px;
  padding: 32px;
  @media screen and (min-width: 1100px) {
    flex-wrap: wrap;
    width: 1010px;
    margin: 0 auto;
    overflow: unset;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1400px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 48px;
    div {
      margin: 0;
      ul {
        padding: 0;
      }
    }
  }
`;
