const fs = require('fs');
const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
const privateKey = fs.readFileSync('private_key.pem', 'utf8');
const cors = require('cors'); // Importar cors
app.use(cors());
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  // Obtener la dirección IP del cliente
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // Enviar la respuesta
  res.send(`Hola, mundo! Tu IP es: ${clientIp}`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});