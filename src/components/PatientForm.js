import React, { useState } from 'react';

const PatientForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    pregnancies: 0,
    glucose: 0,
    bloodPressure: 0,
    skinThickness: 0,
    insulin: 0,
    bmi: 0,
    diabetes: 0,
    age: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: Number(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pregnancies:
        <input type="number" name="pregnancies" value={formData.pregnancies} onChange={handleChange} />
      </label>
      {/* Repeat the above pattern for other input fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientForm;