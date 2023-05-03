import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components';
import { FlexContainer, StyledTable} from '../styled/Global.styled'
import { Theme } from '../utils/Theme';

function Section({data}) {
  useEffect(() => {
    function setBodyHeight() {
      document.body.style.height = window.innerHeight + 'px';
    }
  
    setBodyHeight();
    window.addEventListener('resize', setBodyHeight);
  
    return () => {
      window.removeEventListener('resize', setBodyHeight);
    };
  
  }, []);
    console.log("hello");
    console.log(data);
    const headers = ["Name", "date","import","export"];
    const total = ["Name","Total_Export","Total_Import"];
    let res_imp = 0;
    let res_exp = 0;
     let name = "none";
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
      <StyledTable>
        <thead>
        <tr>
          {total.map((total) => (
            <th key={total}>{total}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        <tr>
          {data.map((elem)=>{
            res_imp +=parseInt(elem.import_value);
            res_exp +=parseInt(elem.export_value);
            name = elem.name
          })}
          <td>{name}</td>
          <td>{res_imp}</td>
          <td>{res_exp}</td>
        </tr>

        </tbody>
      </StyledTable>
    </div>
    </FlexContainer>
    </ThemeProvider>
  )
}

export default Section