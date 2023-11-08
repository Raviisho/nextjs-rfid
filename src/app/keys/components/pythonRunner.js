import { exec } from 'child_process';

export default function pythonScript() {
  return new Promise((resolve, reject) => {
    exec('python3 src/assets/python/prueba.py', (error, stdout, stderr) => {
      if (error) {
        reject(error.message);
      }
      if (stderr) {
        reject(stderr);
      }
      resolve(stdout);
    });
  });
}
