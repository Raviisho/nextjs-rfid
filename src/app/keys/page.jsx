"use client";
import { exec } from 'child_process';
export default function KeysPage() {
  function pruebaSubmit() {

    // Comando para ejecutar un script de Python
    const comando = "python3 src/assets/python/prueba.py";

    exec(comando, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error}`);
        return;
      }
      console.log(`Resultado: ${stdout}`);
    });
  }

  return (
    <>
      <div>Keys Works</div>
      <button onClick={pruebaSubmit()}>TEST</button>
    </>
  );
}
