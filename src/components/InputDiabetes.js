import React from 'react';

const InputDiabetes = ({ label, attribute, onChange }) => {
  return (
    <div className='py-1'>
      <div className=' font-semibold py-1'>{label}</div>
      <input
        type='text'
        onChange={(event) => onChange(attribute, event)}
        className=' rounded-md w-96 sm_md:w-44 px-2 py-1 font-semibold focus:outline-none focus:border-blue-500 focus:ring-1 bg-gray-100'
      />
    </div>
  );
};

export default InputDiabetes;