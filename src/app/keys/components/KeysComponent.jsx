"use client"
import React, { useState, useEffect } from 'react';
import pruebaSubmit from './execpy.jsx';

const KeysComponent = () => {
  const [output, setOutput] = useState(null);

  useEffect(() => {
    pruebaSubmit((result, error) => {
      if (error) {
        console.error(error);
      } else {
        setOutput(result);
      }
    });
  }, []);

  return <p>{output}</p>;
};

export default KeysComponent;
