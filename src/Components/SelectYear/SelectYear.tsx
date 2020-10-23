import React, { FunctionComponent, useState } from "react";
import { Select } from "antd";

import { Year} from "Services";

const { Option } = Select;

interface Props {
  options: Year[];
  placeholder?: string;
  multiple?: boolean;
  setYear:(year:number)=>void;
}

export const SelectYear: FunctionComponent<Props> = ({
  options,
  placeholder,
  multiple,
  setYear
}) => {
  const [value, setValue] = useState("");

  const handleChange = (value: string) => {
    setValue(value); 
    setYear(parseInt(value));
  };

  const optionsForSelection = options.map((option: Year) => (
    <Option key={option.id} value={option.id}>
      {option.year}
    </Option>
  ));

  return (
    <Select
      showSearch
      mode={!!multiple ? "multiple" : undefined}
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
