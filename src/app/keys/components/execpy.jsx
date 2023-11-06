import { exec } from 'child_process';

export default function pruebaSubmit(callback) {
  const comando = "python3 src/assets/python/prueba.py";

  exec(comando, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`);
      callback(null, error); // Pass error to callback
    } else {
      callback(stdout.toString(), null); // Pass output to callback
    }
  });
}