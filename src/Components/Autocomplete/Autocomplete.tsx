import React, { FunctionComponent } from "react";
import { Select } from "antd";

import { IataCode} from "Services";

const { Option } = Select;

interface Props {
  options: IataCode[];
  placeholder?: string;
}

export const Autocomplete: FunctionComponent<Props> = ({
  options,
  placeholder,
}) => {
  // Caso fosse um componente não estatico essas funções estariam sendo utilizadas
  
  // const [value, setValue] = useState("");

  // const handleChange = (valueSelect: string) => {
  //   setValue(valueSelect);
  // };

  const optionsForSelection = options.map((option, key) => (
    <Option key={key} value={option.id}>
      {option.city}
    </Option>
  ));
  return (
    <Select
      value={options[0].id}
      placeholder={!!placeholder ? placeholder : ""}
      style={{ width: 200 }}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      // onSearch={handleSearch}
      // onChange={handleChange}
      notFoundContent={null}
    >
      {optionsForSelection}
    </Select>
  );
};
