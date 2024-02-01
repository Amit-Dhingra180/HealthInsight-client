import React, { useState } from 'react';
import InputDiabetes from '../components/InputDiabetes';


const Diabetes = () => {

  const [diabetes_data, setDiabetes_data] = useState({
    Pregnancies:NaN,
    Glucose:NaN,
    BloodPressure:NaN,
    SkinThickness:NaN,
    Insulin:NaN,
    BMI:NaN,
    Age:NaN,
  })

  const [prediction, setPrediction] = useState(NaN)
  const [loading, setLoading] = useState(false);


  const handleChange = (attribute, event) => {
    const inputValue = event.target.value;
  
    setDiabetes_data((prevData) => ({
      ...prevData,
      [attribute]: inputValue === '' ? (typeof prevData[attribute] === 'number' ? NaN : '') : inputValue,
    }))
  }

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch('https://amitdhingra.pythonanywhere.com/api/diabetes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.values(diabetes_data)),
    });

    const result = await response.json();
    
    setPrediction(result.data)
    setLoading(false);

  };

  

  return (
    <div>
   
    <div className="bg-cover bg-center min-h-screen " style={{ backgroundImage: 'url(/diabetes_bg2.png)' }}>

   <div className='w-full h-full px-4 pr-8 pt-4 sm_md:w-[650px] sm_md:h-[390px] sm_md:absolute sm_md:left-1/2 sm_md:top-1/2 sm_md:transform sm_md:-translate-x-1/2 sm_md:-translate-y-1/2'>

    <div className='text-4xl text-white pb-4'>
      Diabetes
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

    <div> 
      <InputDiabetes label='Age' attribute='Age' onChange={handleChange} />
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

export default Diabetes;
