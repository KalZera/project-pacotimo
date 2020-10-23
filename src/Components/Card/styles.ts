import styled from "styled-components";

export const CardComponent = styled.div<{ img: string }>`
  width: 320px;
  height: 187px;
  background-image: url("${(props) => props.img}");
  border-radius:10px;
  margin:10px;
`;

export const Content = styled.div`
  width: 320px;
  left: 0px;
  top: 123px;
  border-radius: 10px;
  position: relative;
  background-color: #4f4f4f;
  color: #fff;
  display: flex;
  height: 64px;
`;

export const BoxInfo = styled.div`
  color: #fff;
`;

export const LabelCity = styled.div`
  font-size: 15px;
  color: #fff;
  weight: 700;
  height: 18px;
  width: 74px;
  left: 10px;
  top: 133px;
  border-radius: nullpx;
`;

export const LabelPrice = styled.div`
  font-size: 19px;
  color: #fff;
  weight: 700;
  height: 26px;
  width: 108px;
  left: 10px;
  top: 151px;
  border-radius: nullpx;
`;

export const LabelDateTitle = styled.div`
  font-size: 11px;
  color: #fff;
  weight: 400;
  height: 15px;
  width: 15px;
  left: 207px;
  top: 142px;
  border-radius: nullpx;
`;

export const LabelDate = styled.div`
  font-size: 13px;
  color: #fff;
  weight: 400;
  height: 18px;
  width: 68px;
  left: 242px;
  top: 157px;
  border-radius: nullpx;
`;
