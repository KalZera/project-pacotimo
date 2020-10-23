import React, { FunctionComponent } from "react";

import { Promotion } from "Services";

import {
  CardComponent,
  Content,
  LabelCity,
  LabelPrice,
  LabelDate,
  LabelDateTitle,
  BoxInfo,
} from "./styles";

interface Props {
  promo: Promotion;
}

export const Card: FunctionComponent<Props> = ({ promo }) => {
  return (
    <CardComponent img={promo.imageCity}>
      <Content>
        <BoxInfo>
          <LabelCity>{promo.city}</LabelCity>
          <LabelPrice>R$ {promo.totalPrice},00</LabelPrice>
        </BoxInfo>
        <BoxInfo>
          <LabelDateTitle>ida</LabelDateTitle>
          <LabelDate>{promo.goDate}</LabelDate>
        </BoxInfo>
        <BoxInfo>
          <LabelDateTitle>volta</LabelDateTitle>
          <LabelDate>{promo.backDate}</LabelDate>
        </BoxInfo>
      </Content>
    </CardComponent>
  );
};
