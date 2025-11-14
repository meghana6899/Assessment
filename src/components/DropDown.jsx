import React, { useState } from "react";
import { Select } from "antd";
const { Option } = Select;

const DropDown = ({getValue}) => {
  const [value, setValue] = useState("");

  const data = [
    { name: "United States", capital: "Washington, D.C." },
    { name: "United Kingdom", capital: "London" },
    { name: "Canada", capital: "Ottawa" },
    { name: "Germany", capital: "Berlin" },
    { name: "France", capital: "Paris" },
    { name: "Japan", capital: "Tokyo" },
    { name: "India", capital: "New Delhi" },
    { name: "Australia", capital: "Canberra" },
    { name: "Brazil", capital: "Brasília" },
    { name: "China", capital: "Beijing" },
  ];
  
  const renderedOption = data.map((ele) => {
    return <Option value={`${ele.capital}`}>{`${ele.name} - ${ele.capital}`}</Option>
  })

  const handleChange = (value) => {
    setValue(value);
    console.log(value)
    getValue(value)
  };
  return (
    <Select
      style={{ width: 300 }}
      placeholder="Filter by Capital"
      onChange={handleChange}
    >
      {renderedOption}
    </Select>
  );
};

export default DropDown;
