import React, { FunctionComponent, useState } from "react";
import { Select } from "antd";

import { Month} from "Services";

const { Option } = Select;

interface Props {
  options: Month[];
  placeholder?: string;
  multiple?: boolean;
  setMonth:(month:number)=>void;
}

export const SelectMonth: FunctionComponent<Props> = ({
  options,
  placeholder,
  multiple,
  setMonth
}) => {
  const [value, setValue] = useState("");

  const handleChange = (value: string) => {
    setValue(value);
    setMonth(parseInt(value));
  };

  const optionsForSelection = options.map((option: Month) => (
    <Option key={option.id} value={option.id}>
      {option.name}
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
