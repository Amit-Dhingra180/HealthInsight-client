import React, { useState } from 'react';

const HelloWorld = () => {
  const [userInput, setUserInput] = useState('');
  const [output, setOutput] = useState('');

  const handleRequest = async () => {
    const response = await fetch('https://amitdhingra.pythonanywhere.com/api/say-hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: userInput }),
    });

    const data = await response.json();
    setOutput(data.output);
  };

  return (
    <div>
      <h1>Say Hello</h1>
      <label>
        Input:
        <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      </label>
      <br />
      <button onClick={handleRequest}>Say Hello</button>
      <br />
      {output && (
        <div>
          <h2>Output:</h2>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
};

export default HelloWorld;
