import { useState } from "react";
import Button from "components/Button/Button";

const RadioButtons = ({ options, defaultSelected, onChange }) => {
  const [selected, setSelected] = useState(defaultSelected);

  const handleClick = (value) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div>
      {options.map(option => (
        <Button
          key={option.value}
          active={selected === option.value}
          text={option.label}
          onClick={() => handleClick(option.value)}
        />
      ))}
    </div>
  );
};

export default RadioButtons;