import React, { useState } from 'react';

const SimpleComponent = () => {

  const [diabetes_data, setDiabetes_data] = useState({
    a:NaN,
    b:NaN,
    c:NaN,
    d:NaN,
    e:NaN,
    f:NaN,
    g:NaN,
  })

  const [prediction, setPrediction] = useState(0)

  const handleChange = (attribute, event) => {
    const inputValue = event.target.value;
  
    setDiabetes_data((prevData) => ({
      ...prevData,
      [attribute]: inputValue === '' ? (typeof prevData[attribute] === 'number' ? NaN : '') : inputValue,
    }))
  }

  const handleSubmit = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/diabetes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.values(diabetes_data)),
    });

    const result = await response.json();
    
    setPrediction(result.data)
  };

  

  return (
    <div className=' flex flex-col w-1/4'>
      <span>a</span>
      <input type='text' onChange={(event) => handleChange('a',event)} className=' border-2 border-black'/>
      <span>b</span>
      <input type='text' onChange={(event) => handleChange('b',event)} className=' border-2 border-black'/>
      <span>c</span>
      <input type='text' onChange={(event) => handleChange('c',event)} className=' border-2 border-black'/>
      <span>d</span>
      <input type='text' onChange={(event) => handleChange('d',event)} className=' border-2 border-black'/>
      <span>e</span>
      <input type='text' onChange={(event) => handleChange('e',event)} className=' border-2 border-black'/>
      <span>f</span>
      <input type='text' onChange={(event) => handleChange('f',event)} className=' border-2 border-black'/>
      <span>g</span>
      <input type='text' onChange={(event) => handleChange('g',event)} className=' border-2 border-black'/>

      <button onClick={handleSubmit}>Submit</button>
      <span>{prediction}</span>
    </div>
  );
};

export default SimpleComponent;
