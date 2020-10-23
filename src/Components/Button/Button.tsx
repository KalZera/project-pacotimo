import React, { FunctionComponent } from "react";
import {Button as ButtonComponent} from 'antd';

interface Props {
  text: string;
  onClick: () => void;
}

export const Button: FunctionComponent<Props> = ({ text, onClick }) => {
  return <ButtonComponent onClick={onClick}>{text}</ButtonComponent>;
};
