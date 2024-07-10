import React from 'react';

const RadioButton = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="inline-flex items-center w-1/2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio h-5 w-5 text-[#6A60E8]"
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default RadioButton;