"use server"
import { exec } from "child_process"

const runPythonScript = () => {
  return new Promise((resolve, reject) => {
    exec('python src/assets/python/prueba.py', (error, stdout, stderr) => {
      if (error) {
        reject(error.message);
      }
      if (stderr) {
        reject(stderr);
      }
      resolve(stdout);
    });
  });
};

module.exports = { runPythonScript };