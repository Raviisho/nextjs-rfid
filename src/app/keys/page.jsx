"use client"
import { useState, useEffect } from 'react';
import { runPythonScript } from './components/pythonRunner';

const Page = () => {
  const [pythonOutput, setPythonOutput] = useState('');

  useEffect(() => {
    // Ejecutar el script de Python cuando se monta el componente
    runPython();
  }, []);

  const runPython = async () => {
    try {
      const output = await runPythonScript();
      setPythonOutput(output);
    } catch (error) {
      console.error('Error al ejecutar el script de Python:', error);
    }
  };

  return (
    <div>
      <h1>Resultado de Python:</h1>
      <p>{pythonOutput}</p>
    </div>
  );
};

export default Page;