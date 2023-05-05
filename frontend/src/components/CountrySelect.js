import { Select } from "../styled/Global.styled";

const CountrySelect = ({ value, onChange ,arr}) => {
  console.log("arr => ",arr.split(','));
  String.toString(arr).split(',');
  let res =arr.split(',');
   //res = new arr.split(',');
    return (
      <Select value={value} onChange={onChange}>
        <option value="">none</option>
        <option value="Iran">{res[0]} 🇮🇷</option>
        <option value="China">{res[1]} 🇨🇳</option>
        <option value="Japan">{res[2]} 🇯🇵</option>
        <option value="Germany">{res[3]} 🇩🇪</option>
      </Select>
    );
  };

export default CountrySelect;