import { Select } from "../styled/Global.styled";

const CountrySelect = ({ value, onChange }) => {
    return (
      <Select value={value} onChange={onChange}>
        <option value="">none</option>
        <option value="Iran">Iran</option>
        <option value="Canada">Canada</option>
        <option value="Armenia">Armenia</option>
      </Select>
    );
  };

export default CountrySelect;