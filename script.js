if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js")
        .then((reg) => console.log("Registro del SW exitoso", reg))
        .catch((err) => console.error("Error al tratar de registrar el SW", err)
    );
}