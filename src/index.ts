import app from './app';
import { AppDataSource } from './db/conexion';

async function main() {
    try {
        await AppDataSource.initialize().then(() => {
            console.log('Database');
        })
        app.listen(3500, () => {
            console.log("Servidor activo");
        })
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
}

main()
