import React, { useState, useEffect } from 'react';

const Risk = ({ result }) => {
  const [output, setOutput] = useState('');

  useEffect(() => {
    // Use useEffect to handle state updates based on props
    if (!isNaN(result)) {
      if (result < 0.2) {
        setOutput('Very low');
      } else if (result >= 0.2 && result < 0.4) {
        setOutput('Low');
      } else if (result >= 0.4 && result < 0.6) {
        setOutput('Moderate');
      } else if (result >= 0.6 && result < 0.8) {
        setOutput('High');
      } else {
        setOutput('Very high');
      }
    }
  }, [result]);

  return <div>Risk: {output}</div>;
};

export default Risk;
