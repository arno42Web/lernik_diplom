// import React, { useState } from "react";
// import styled from "styled-components";

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Label = styled.label`
//   margin: 0.5rem;
// `;

// const Select = styled.select`
//   margin: 0.5rem;
//   padding: 0.25rem;
// `;

// const Button = styled.button`
//   margin: 0.5rem;
//   padding: 0.5rem 1rem;
//   background-color: #6a0dad;
//   color: white;
//   border: none;
//   border-radius: 0.25rem;
// `;

// const CountrySelect = ({ value, onChange }) => {
//   return (
//     <Select value={value} onChange={onChange}>
//       <option value="">none</option>
//       <option value="Iran">Iran</option>
//       <option value="Canada">Canada</option>
//       <option value="Armenia">Armenia</option>
//     </Select>
//   );
// };

// const YearSelect = ({ value, onChange }) => {
//   return (
//     <Select value={value} onChange={onChange}>
//       <option value="">none</option>
//       <option value="2023">2023</option>
//       <option value="2022">2022</option>
//       <option value="2021">2021</option>
//       <option value="2020">2020</option>
//     </Select>
//   );
// };

// const MonthSelect = ({ value, onChange }) => {
//   return (
//     <Select value={value} onChange={onChange}>
//       <option value="">none</option>
//       <option value="01">January</option>
//       <option value="02">February</option>
//       <option value="03">March</option>
//       <option value="04">April</option>
//       <option value="05">May</option>
//       <option value="06">June</option>
//       <option value="07">July</option>
//       <option value="08">August</option>
//       <option value="09">September</option>
//       <option value="10">October</option>
//       <option value="11">November</option>
//       <option value="12">December</option>
//     </Select>
//   );
// };

// const FormComponent = () => {
//   const [country, setCountry] = useState("");
//   const [year, setYear] = useState("");
//   const [month, setMonth] = useState("");

// /*   const handleSubmit = (event) => {
//     event.preventDefault();
//     let end_ptr = country + "/"+ year +"/"+ month
//     console.log(`Submitted form: ${country}, ${year}, ${month} ==>`,end_ptr);
//   }; */
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const endpoint = `http://localhost:5000/country/${country}/${year}/${month}`;
//     const response = await fetch(endpoint,{method:"GET"});

//     if (response.ok) {
//       const data = await response.json();
//       console.log(`http://localhost:5000/country/${country}/${year}/${month}`);
//       console.log(data);
//     } else {
//       console.log(`Error fetching data from ${endpoint}`);
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Label>
//         Country:
//         <CountrySelect value={country} onChange={(e) => setCountry(e.target.value)} />
//       </Label>
//       <Label>
//         Year:
//         <YearSelect value={year} onChange={(e) => setYear(e.target.value)} />
//       </Label>
//       <Label>
//         Month:
//         <MonthSelect value={month} onChange={(e) => setMonth(e.target.value)} />
//       </Label>
//       <Button type="submit">Submit</Button>
//     </Form>
//   );
// };

// export default FormComponent;