import { exec } from 'child_process';

export default function pruebaSubmit() {

    // Comando para ejecutar un script de Python
    const comando = "python3 src/assets/python/prueba.py";

    exec(comando, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error}`);
        return;
      }
      return console.log(`Resultado: ${stdout}`);
    });
}