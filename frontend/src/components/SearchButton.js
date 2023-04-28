import React from 'react';
import { Button, Space } from 'antd';
const SearchButton = () => (
  <Space wrap>
    {/* <Button type="primary">Primary Button</Button> */}
	
	<Button style={{backgroundColor: 'teal'}}>Submit</Button>
	{/* <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button> */}
  </Space>
);
export default SearchButton;