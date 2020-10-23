import React, {FunctionComponent} from "react";
import { DatePicker as DateComponent, Space } from "antd";

interface Props {}

export const DatePicker: FunctionComponent<Props> = () => {
  const onChange = (date:any, dateString:any) =>{
    console.log(date, dateString);
  }
  return (
    <Space direction="vertical">
      <DateComponent onChange={onChange} picker="week" />
      <DateComponent onChange={onChange} picker="month" />
      <DateComponent onChange={onChange} picker="year" />
    </Space>
  );
};
