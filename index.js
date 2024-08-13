const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const privateKey = fs.readFileSync('private_key.pem', 'utf8');
const cors = require('cors'); // Importar cors
app.use(cors());
// app.use(bodyParser.json());

app.use((req, res, next) => {
  // Obtener la dirección IP del cliente
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('Dirección IP del cliente:', clientIp);

  // Continuar con el siguiente middleware o ruta
  next();
});

app.get('/', (req, res) => {
  res.send('Hola, mundo!', clientIp);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});