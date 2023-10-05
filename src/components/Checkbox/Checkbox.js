import React, { useState } from 'react';


const Checkbox = ({ defaultChecked = false,  label }) => {
  
  const [checked, setChecked] = useState(defaultChecked);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };


  return (
    <label className="styled-checkbox-label">
      <input 
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
    {label}
    </label>
  );
};

export default Checkbox;