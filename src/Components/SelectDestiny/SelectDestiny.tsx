import React, { FunctionComponent, useState } from "react";
import { Select } from "antd";

import { IataCode } from "Services";

const { Option } = Select;

interface Props {
  options: IataCode[];
  placeholder?: string;
  origin?: string;
  setDestiny: (destiny: string[]) => void;
}

export const SelectDestiny: FunctionComponent<Props> = ({
  options,
  placeholder,
  origin,
  setDestiny,
}) => {

  const [value, setValue] = useState<string[]>();
  const handleChange = (valueSelect:string[]) => {
    setDestiny(valueSelect);
    setValue(valueSelect);
  };

  const optionsForSelection = options.map(
    (option, key) =>
      option.id !== origin && (
        <Option key={key} value={option.id}>
          {option.city}
        </Option>
      )
  );
  return (
    <Select
      mode="multiple"
      value={value}
      placeholder={!!placeholder ? placeholder : ""}
      style={{ width: 200 }}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      // onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
    >
      {optionsForSelection}
    </Select>
  );
};
