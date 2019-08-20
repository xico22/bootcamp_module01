const express = require("express");

const server = express();

// Query params = ?teste=1
// Routes params = /users/1
// Request body = { "name": "Chicao", "email": "fasj86@gmail.com"}

server.get("/teste", (req, res) => {
  const nome = req.query.nome;
  return res.json({ message: `Hello ${nome}` });
});

server.listen(3000);
