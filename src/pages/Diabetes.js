import React, { useState } from 'react';
import InputDiabetes from '../components/InputDiabetes';


const SimpleComponent = () => {

  const [diabetes_data, setDiabetes_data] = useState({
    Pregnancies:NaN,
    Glucose:NaN,
    BloodPressure:NaN,
    SkinThickness:NaN,
    Insulin:NaN,
    BMI:NaN,
    Age:NaN,
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
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(/diabetes.jpg)' }}>

    <div className="absolute inset-0 bg-black opacity-50"></div>

    <div className='w-full min-h-screen relative'>
      <div className='absolute left-1/2 top-1/2  bg-white px-8 py-4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-md' >

        <div className=' text-4xl text-center pb-2 sm_md:text-left'>
          Diabetes Prediction
        </div>

        <div className='sm_md:flex sm_md:space-x-4'>
          <InputDiabetes label='Pregnancies' attribute='Pregnancies' onChange={handleChange} />
          <InputDiabetes label='Glucose' attribute='Glucose' onChange={handleChange} />
          <InputDiabetes label='BloodPressure' attribute='BloodPressure' onChange={handleChange} />
        </div>

        <div className='sm_md:flex sm_md:space-x-4'>
          <InputDiabetes label='SkinThickness' attribute='SkinThickness' onChange={handleChange} />
          <InputDiabetes label='Insulin' attribute='Insulin' onChange={handleChange} />
          <InputDiabetes label='BMI' attribute='BMI' onChange={handleChange} />
        </div>

        <div className='sm_md:flex sm_md:space-x-4'>
          <InputDiabetes label='Age' attribute='Age' onChange={handleChange} />
        </div>

        <div className='text-left sm_md:text-left'>
          <button onClick={handleSubmit} className='text-lg my-6 w-48 border-2 border-black rounded-md font-semibold hover:border-blue-400'>Diabetes Test Results</button>
          
          {isNaN(prediction) ? (
            <p></p>
            ) : (
              <span className='text-center ml-4'>{prediction}</span>
            )}
        </div>


      </div>
    </div>



    </div>
  );
};

export default SimpleComponent;
