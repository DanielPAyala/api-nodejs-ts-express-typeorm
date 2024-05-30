import app from './app';

function main() {
    app.listen(3500, () => {
        console.log("Servidor activo");
    })
}

main()
