import React from "react";

// styles
import "../styles/InputWithLabel.scss";

const InputWithLabel = ({
  labelFor,
  labelTitle,
  inputType,
  inputName,
  placeholder,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={labelFor}>{labelTitle}</label>
      <input type={inputType} name={inputName} placeholder={placeholder} />
    </div>
  );
};

export default InputWithLabel;
