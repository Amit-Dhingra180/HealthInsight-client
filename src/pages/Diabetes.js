import React, { useEffect } from 'react';

const SimpleComponent = () => {

  const someStuff = {
    a:70,
    b:50,
    c:50,
    d:50,
    e:50,
    f:50,
    g:50,
  }

  console.log(someStuff)

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
      console.log(result)
      
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
