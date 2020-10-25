import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import "./style.css";


const FilterInput = ({ onSubmit, onClear }) => {
  const [value, setValue] = useState("");
  const _onSubmit = () => {
    onSubmit(value);
  };
  const _onClear = () => {
    setValue("");
    onClear();
  };
  return (
    <div className="filter-input d-flex align-items-stretch justify-content-end">
      <input
        type="text"
        value={value}
        placeholder="Enter name"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant="outline-dark" onClick={_onSubmit} className="ml-2">
        Search
      </Button>
      <Button variant="outline-dark" onClick={_onClear} className="ml-2">
        Clear
      </Button>
    </div>
  );
};

export default FilterInput;
