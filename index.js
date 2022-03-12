const express = require('express');
const app = express();

const guitarras = require('./data/guitarras.js');

const HATEOAS = () =>
  guitarras.map((guitarra) => ({
    name: guitarra.name,
    url: `http://localhost:3000/guitarra/${guitarra.id}`,
  }));

const guitarra = (id) => guitarras.find((guitarra) => guitarra.id == id);

app.get('/guitarras', (req, res) => {
  res.send({ guitaras: HATEOAS() });
});

app.get('/guitarras/:id', (req, res) => {
  const { id } = req.params;
  res.send(guitarra(id));
});

app.listen(3000, () => console.log('Servidor encendido!'));
