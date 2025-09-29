'use strict';
const express = require('express');
const os = require('os');

const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send(`Salut din ${os.hostname()} pe portul ${PORT}!\n Acesta este EXEMPLU 2`);
});

app.get('/status', (req, res) => res.status(200).json({ status: 'active' }));

app.listen(PORT, HOST, () => {
  console.log(`Aplicatia ruleaza pe http://${HOST}:${PORT}`);
});
