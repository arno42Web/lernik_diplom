import React from 'react';
import { Select } from 'antd';
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
const SelectYear = () => (
  <Select
    showSearch
    placeholder="Select year"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: '2020',
        label: '2020',
      },
      {
        value: '2021',
        label: '2021',
      },
      {
        value: '2022',
        label: '2022',
      },
	  {
		value: '2023',
        label: '2023',
	  },
    ]}
  />
);
export default SelectYear;