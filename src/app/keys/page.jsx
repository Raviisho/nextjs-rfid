import React, { useState, useEffect } from 'react';
import pruebaSubmit from "@/app/keys/components/execpy.jsx";

export default function KeysPage() {
  const [output, setOutput] = useState(null);
  
  useEffect(() => {
    // Trigger the Python script execution on component mount
    pruebaSubmit((result, error) => {
      if (error) {
        console.error(error);
      } else {
        setOutput(result);
      }
    });
  }, []);

  return (
    <>
      <div>Keys Works</div>
      <p>{output}</p>
    </>
  );
}