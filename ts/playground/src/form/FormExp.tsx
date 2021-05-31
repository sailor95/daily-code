import React, { ChangeEvent, FormEvent, useState } from 'react';

const FormExp = () => {
  const [inputVal, setInputVal] = useState('');

  // NOTE: Form onSubmit event
  const handleSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();
  };

  // NOTE: Input onChange event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputVal} onChange={handleChange} />
    </form>
  );
};

export default FormExp;
