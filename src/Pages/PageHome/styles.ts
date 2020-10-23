import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const BoxFilter = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-template-rows: 70px;
  // justify-items: space-between;
`;

export const BoxPromotions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

export const BoxSelects = styled.div`
  display: grid;
  grid-template-columns: 20% 30% 20% 30%;
  justify-content:space-between;
  align-items:baseline;
  margin:10px;
`;

export const BoxButton = styled.div`
  display: grid;
`;

