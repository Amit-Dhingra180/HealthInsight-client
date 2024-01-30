import React from 'react';

const InputDiabetes = ({ label, attribute, onChange }) => {
  return (
    <div className=''>
      <div className='font-semibold text-white mb-2'>{label}</div>
      <input
        type='text'
        onChange={(event) => onChange(attribute, event)}
        className=' rounded-md  w-full font-semibold focus:outline-none focus:border-blue-500 focus:ring-4 bg-gray-200 px-2 py-1 mb-2 sm_md:w-48'
      />
    </div>
  );
};

export default InputDiabetes;