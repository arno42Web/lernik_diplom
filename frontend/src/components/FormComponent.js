import React, { useState } from "react";
import { Button, Container, Form, Label, PaddingContainer} from "../styled/Global.styled";
import CountrySelect from "./CountrySelect";
import MonthSelect from "./MonthSelect";
import Section from "./Section";
import YearSelect from "./YearSelect";
import '../styled/form.css'




const FormComponent = () => {
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [data_map, setData_map] = useState([])

/*   const handleSubmit = (event) => {
    event.preventDefault();
    let end_ptr = country + "/"+ year +"/"+ month
    console.log(`Submitted form: ${country}, ${year}, ${month} ==>`,end_ptr);
  }; */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = `http://localhost:5000/country/${country}/${year}/${month}`;
    const response = await fetch(endpoint,{method:"GET"});

    if (response.ok) {
      const data = await response.json();
      console.log(`http://localhost:5000/country/${country}/${year}/${month}`);
    //   console.log(data);
      let arr = []
      for (const item of data) {
        arr.push(item)
      }
      setData_map(arr);
    
      
    } else {
      console.log(`Error fetching data from ${endpoint}`);
    }
  };

  return (
    <>
    <div className="aaa">
      <div>
    <Form onSubmit={(e)=>handleSubmit(e)}>
      <Label>
        Country:
        <CountrySelect value={country} onChange={(e) => setCountry(e.target.value)} />
      </Label>
      <Label>
        Year:
        <YearSelect value={year} onChange={(e) => setYear(e.target.value)} />
      </Label>
      <Label>
        Month:
        <MonthSelect value={month} onChange={(e) => setMonth(e.target.value)} />
      </Label>
      <Button type="submit">Submit</Button>
    </Form>
    <Container>
    <PaddingContainer>
      {<Section data={data_map}/>}
    </PaddingContainer>
   
    </Container>
    </div>
    </div>
    </>
  );
  
};

export default FormComponent;