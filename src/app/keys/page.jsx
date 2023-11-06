"use client";
export default function KeysPage() {
  function pruebaSubmit() {
    const { exec } = require("child_process");

    // Comando para ejecutar un script de Python
    const comando = "python3 prueba.py";

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
