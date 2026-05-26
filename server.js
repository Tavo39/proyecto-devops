const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "¡Infraestructura y Contenedor funcionando perfectamente!",
        timestamp: new Date(),
        environment: "Local (Simulación Cloud)"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});