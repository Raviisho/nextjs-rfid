import React, { useState, useEffect } from 'react';
import pythonScript from './components/pythonRunner';

const Page = () => {
  const [pythonOutput, setPythonOutput] = useState('');

  useEffect(() => {
    runPython();
  }, []);

  const runPython = async () => {
    try {
      const output = await pythonScript();
      setPythonOutput(output);
    } catch (error) {
      console.error('Error executing the Python script:', error);
    }
  };

  return (
    <div>
      <h1>Python Output:</h1>
      <p>{pythonOutput}</p>
    </div>
  );
};

export default Page;
