import styled from "styled-components";
// import theme from "../utils/Theme"
// import {Theme} from "../utils/Theme";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top:30px;
  padding:40px;
  box-sizing:border-box;
  width: 100%;
  background-color: #e1e1e1;
  border-radius:20px;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-left:10px;
`;

export const Select = styled.select`
  appearance: none;
  background-color: #f7f7f7;
  border: 2px solid #d1d1d1;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  width: 100%;


  &:hover {
    background-color: #e1e1e1;
  }

  &:focus {
    box-shadow: 0 0 0 2px #6a0dad;
    outline: none;
  }

  & option {
    background-color: #f7f7f7;
    color: #333;
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #6a0dad;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #4e0982;
  }
`;

export const MainBody = styled.div`
	/*background-color:${({theme})=> theme.colors.primary};  */
	width: 100%; 
`
export const Container = styled.div`

    width:90%;
    max-width: 1280px;
    margin: auto;

`


export const PaddingContainer = styled.div`

    padding-top: ${({ top })=> top};
    padding-bottom: ${({ bottom }) => bottom };
    padding-left: ${({ left }) => left };
    padding-right: ${({ right }) => right };


`

export const FlexContainer = styled.div`

    display:flex;
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    gap: ${({gap}) => gap};
    flex-direction: ${({direction}) => direction};

    & > div {
        flex: ${({fullWithChild}) => fullWithChild && 1};

    }

`

export const Heading = styled(PaddingContainer)`

    color: ${({theme}) => theme.colors.white};
    text-align: ${({align}) => align};
    font-size: ${({size}) => 
    {
        switch(size)
        {
            case 'h1':
                return '4.5rem';
            case 'h2':
                return '3rem';
            case 'h3':
                return '2rem';
            case 'h4':
                return '1.2rem';
            default:
                return;
        }
    }};
`
export const BlueText = styled.span`
    color: ${({theme}) => theme.colors.secondary};
`

export const ParaText = styled(PaddingContainer)`
    color: ${({theme}) => theme.colors.para_text_color};
`

export const IconContainer = styled.div`

    font-size: ${({size}) => size};
    cursor : pointer;
    color : ${({color,theme}) => {

        switch(color)
        {
            case 'white':
                return theme.colors.white;
            case 'blue':
                return theme.colors.secondary;
            default:
                return;
        }

    }}
`;
export const TechStackCard = styled.div`
    display:inline-block;
    background-color:${({theme}) => theme.colors.secondary};
    color:#131c31;
    padding:0.3rem 1rem;
    border-radius:5px;
`

export const StyledTable = styled.table`
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  
  th, td {
    padding: 12px 15px;
    border-radius:10px;
  }
  thead tr {
    background-color: white;
    color: black;
    text-align: center;
  }

  tbody tr {
    &:nth-of-type(even) {
      background-color: white!important;
    }
  }
  tbody tr {
    &:nth-of-type(odd) {
      background-color: ${({theme}) => theme.colors.secondary};
    }
  }
`;