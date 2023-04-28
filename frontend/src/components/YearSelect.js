import { Select } from "../styled/Global.styled";

const YearSelect = ({ value, onChange }) => {
    return (
      <Select value={value} onChange={onChange}>
        <option value="">none</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </Select>
    );
  };


export default YearSelect;