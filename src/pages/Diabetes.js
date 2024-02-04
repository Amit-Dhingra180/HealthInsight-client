import React, { useState } from 'react';
import InputField from '../components/InputField';
import Hamburger from '../components/Hamburger';
import { Link } from 'react-router-dom';
import Risk from '../utils/Risk';


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
   
    <div className="bg-cover bg-center min-h-screen flex justify-center sm_md:items-center" style={{ backgroundImage: 'url(/diabetes_bg2.png)' }}>

    <div className='flex justify-between fixed top-0 w-full p-4'>
          <Link to='/' className='bg-gray-200 rounded-md w-8 h-8 sm_md:w-10 sm_md:h-10 flex justify-center items-center font-semibold text-xl text-red-700'>
            <span className=''>H</span>
          </Link>
          <div>
          <Hamburger/>
          </div>
        </div>

   <div className='w-full sm_md:w-auto px-4 py-4 mt-14'>


    <div className='text-4xl text-white pb-4'>
      Diabetes
    </div>

    <div className='sm_md:flex sm_md:space-x-4'>
      <InputField label='Pregnancies' attribute='Pregnancies' onChange={handleChange} />
      <InputField label='Glucose' attribute='Glucose' onChange={handleChange} />
      <InputField label='BloodPressure' attribute='BloodPressure' onChange={handleChange} />
    </div>

    <div className='sm_md:flex sm_md:space-x-4'>
      <InputField label='SkinThickness' attribute='SkinThickness' onChange={handleChange} />
      <InputField label='Insulin' attribute='Insulin' onChange={handleChange} />
      <InputField label='BMI' attribute='BMI' onChange={handleChange} />
    </div>

    <div> 
      <InputField label='Age' attribute='Age' onChange={handleChange} />
    </div>

    <div className='flex justify-around'>

    <div>
      <button onClick={handleSubmit} className='text-white text-lg sm_md:text-2xl font-semibold mt-4 mb-4'>Get Prediction</button>
    </div>

    <div>
      {loading && <div className='text-white'>Loading...</div>}
    </div>

    <div className='text-white text-lg sm_md:text-2xl font-semibold mt-4 mb-4'>
      {!isNaN(prediction) && <Risk result={prediction}/>}
    </div>

    </div>


   </div>


    
    </div>

    </div>
  );
};

export default Diabetes;
