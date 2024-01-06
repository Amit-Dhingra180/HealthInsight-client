import React from 'react';
import PatientForm from '../components/PatientForm';

const Diabetes = () => {
    const handleFormSubmit = async (formData) => {
        try {
          const response = await fetch('http://127.0.0.1:5000/api/diabetes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const result = await response.json();
            console.log(result);
          } else {
            console.error('Failed to send patient information');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      return (
        <div>
          <h1>Patient Information Form</h1>
          <PatientForm onSubmit={handleFormSubmit} />
        </div>
      );
}

export default Diabetes