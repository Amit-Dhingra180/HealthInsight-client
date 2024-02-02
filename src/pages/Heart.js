import React, { useState } from 'react';
import InputField from '../components/InputField';

const Heart = () => {
  const [heart_data, setHeart_data] = useState({
    age: NaN,
    sex: NaN,
    cp: NaN,
    trestbps: NaN,
    chol: NaN,
    fbs: NaN,
    restecg: NaN,
    thalach: NaN,
    exang: NaN,
    oldpeak: NaN,
    slope: NaN,
    ca: NaN,
    thal: NaN,
  });
  

  const [prediction, setPrediction] = useState(NaN);
  const [loading, setLoading] = useState(false);

  const handleChange = (attribute, event) => {
    const InputFieldValue = event.target.value;

    setHeart_data((prevData) => ({
      ...prevData,
      [attribute]: InputFieldValue === '' ? (typeof prevData[attribute] === 'number' ? NaN : '') : InputFieldValue,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://amitdhingra.pythonanywhere.com/api/heart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.values(heart_data)),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setPrediction(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  console.log(prediction)

  return (
    <div>
      <div className="bg-cover bg-center min-h-screen flex justify-center sm_md:items-center" style={{ backgroundImage: 'url(/heart3.jpg)' }}>
        <div className='w-full sm_md:w-auto px-4 py-4'>

        <div className='text-4xl text-white pb-4'>
  Heart
</div>

<div className='sm_md:flex sm_md:space-x-4'>
  <InputField label='Age' attribute='age' onChange={handleChange} />
  <InputField label='Sex' attribute='sex' onChange={handleChange} />
  <InputField label='Cp' attribute='cp' onChange={handleChange} />
</div>

<div className='sm_md:flex sm_md:space-x-4'>
  <InputField label='Trestbps' attribute='trestbps' onChange={handleChange} />
  <InputField label='Chol' attribute='chol' onChange={handleChange} />
  <InputField label='Fbs' attribute='fbs' onChange={handleChange} />
</div>

<div className='sm_md:flex sm_md:space-x-4'>
  <InputField label='Restecg' attribute='restecg' onChange={handleChange} />
  <InputField label='Thalach' attribute='thalach' onChange={handleChange} />
  <InputField label='Exang' attribute='exang' onChange={handleChange} />
</div>

<div className='sm_md:flex sm_md:space-x-4'>
  <InputField label='Oldpeak' attribute='oldpeak' onChange={handleChange} />
  <InputField label='Slope' attribute='slope' onChange={handleChange} />
  <InputField label='Ca' attribute='ca' onChange={handleChange} />
</div>

<div className='sm_md:flex sm_md:space-x-4'>
  <InputField label='Thal' attribute='thal' onChange={handleChange} />
</div>


          

          <div>
            <button onClick={handleSubmit} className='text-white text-lg sm_md:text-2xl font-semibold mt-4 mb-4'>Get Prediction</button>
          </div>

          <div>
            {loading && <div className='text-white'>Loading...</div>}
          </div>

          <div>
            {!isNaN(prediction) && <span className='text-white'>{prediction}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heart;
