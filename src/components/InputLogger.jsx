import React, { useState } from 'react';

const InputLogger = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue); // this updates the state
    console.log(newValue);   // this logs the new value in the console
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default InputLogger;