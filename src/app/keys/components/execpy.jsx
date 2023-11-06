import { exec } from 'child_process';

export default function pruebaSubmit() {
    return new Promise((resolve, reject) => {
        const comando = "python3 src/assets/python/prueba.py";

        exec(comando, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error}`);
                reject(error);
                return;
            }
            resolve(stdout.toString());
        });
    });
}
