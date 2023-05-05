import { Select } from "../styled/Global.styled";

const Ru = ["Иран","Китай","Япония","Германия"]
const En = ["Iran","China","Japan","Germany"]
const Hy = ["Իրան","Չինաստան","Ճապոնիա","Գերմանիա"]
const Fa = ["ایران","چین","ژاپن","آلمان"]

const LanguageSelect = ({ value, onChange}) => {
    return (
      <Select value={value} onChange={onChange}>
        <option value={En}>English</option>
        <option value={Fa}>فارسی </option>
        <option value={Ru}>Русский</option>
        <option value={Hy}>հայերեն</option>
      </Select>
    );
  };

export default LanguageSelect;