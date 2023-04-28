import React from 'react';
import { Select, Space } from 'antd';
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const CountrySelect = () => (
  <Select
    mode="multiple"
    style={{
      width: '30%',
    }}
    placeholder="select one country"
    defaultValue={['china']}
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="china" label="China">
      <Space>
        <span role="img" aria-label="China">
          🇨🇳
        </span>
        China (中国)
      </Space>
    </Option>
    <Option value="usa" label="USA">
      <Space>
        <span role="img" aria-label="USA">
          🇺🇸
        </span>
        USA (US)
      </Space>
    </Option>
    <Option value="japan" label="Japan">
      <Space>
        <span role="img" aria-label="Japan">
          🇯🇵
        </span>
        Japan (日本)
      </Space>
    </Option>
    <Option value="korea" label="Korea">
      <Space>
        <span role="img" aria-label="Korea">
          🇰🇷
        </span>
        Korea (韩国)
      </Space>
    </Option>
	<Option value="armenia" label="Armenia">
      <Space>
        <span role="img" aria-label="Armenia">
		🇦🇲
        </span>
        Armenia (AM)
      </Space>
    </Option>
	<Option value="germany" label="Germany">
      <Space>
        <span role="img" aria-label="Germany">
		🇩🇪
        </span>
        Germany (GM)
      </Space>
    </Option>
  </Select>
);
export default CountrySelect;