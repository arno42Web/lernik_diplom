import React from 'react';
import CountrySelect from './CountrySelect';
import SelectYear from './SelectYear';
import SelectMonth from './MonthSelect';
import { Layout, Space } from 'antd';
import SearchButton from './SearchButton';
const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: 'black',
//   height: 120,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
//   minHeight: 600,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const footerStyle = {
  textAlign: 'center',
//   height: 120,
  color: '#fff',
  backgroundColor: '#7dbcea',
};
const MyLayout = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}>
	  External trade database
	  </Header>
      <Content style={contentStyle}>
		<CountrySelect/>
		{'\t'}
		<SelectYear/>
		{'\t'}
		<SelectMonth/>
		<br/>
		<SearchButton/>
	  </Content>
      <Footer style={footerStyle}>	</Footer>
    </Layout> 
  </Space>
);
export default MyLayout;