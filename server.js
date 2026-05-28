const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar la carpeta "public" para servir archivos estáticos (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal que cargará automáticamente tu index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor web corriendo en el puerto ${PORT}`);
});
