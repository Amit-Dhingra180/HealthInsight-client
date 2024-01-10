import React, { useEffect } from 'react';

const SimpleComponent = () => {

  const someStuff = {
    a:2,
    b:90,
    c:50,
    d:78,
    e:23,
    f:51,
    g:45,
  }

  

  useEffect(() => {
    const sendData = async () => {
      const response = await fetch('http://127.0.0.1:5000/api/diabetes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.values(someStuff)),
      });

      const result = await response.json();
      console.log(result.data)
      
    };

    sendData();
  }, []);

  

  return (
    <div>
      <h1>Simple React Component</h1>
      <p>This component sends an array of two integers to the Flask backend.</p>
    </div>
  );
};

export default SimpleComponent;
