import React from 'react';
import { DatePicker, Space } from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const SelectMonth = () => (
  <Space direction="horizontal">
    {/* <DatePicker onChange={onChange} /> */}
    {/* <DatePicker onChange={onChange} picker="week" /> */}
    {/* <DatePicker onChange={onChange} picker="year" /> */}
    <DatePicker onChange={onChange} picker="month" />
    {/* <DatePicker onChange={onChange} picker="quarter" /> */}
  </Space>
);
export default SelectMonth;