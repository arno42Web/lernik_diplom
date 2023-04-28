import React from 'react'
import { ThemeProvider } from 'styled-components';
import { FlexContainer, Heading, PaddingContainer, ParaText, StyledTable, TechStackCard } from '../styled/Global.styled'
import { Theme } from '../utils/Theme';
import { Button, Input, Space, Table } from 'antd';

function Section({data}) {
    console.log("hello");
    console.log(data);
    const headers = ["Name", "Date", "ipmort","export"];
  return (
    <ThemeProvider theme={Theme}>
    <FlexContainer fullWithChild>
    <div>
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
              <td key={index}>{item.name}</td>
              <td key={index}>{item.full_date}</td>
              <td key={index}>{item.import_value}</td>
              <td key={index}>{item.export_value}</td>
          </tr>
        ))}
      </tbody>
      </StyledTable>
    </div>
    </FlexContainer>
    </ThemeProvider>
  )
}

export default Section