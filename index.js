const express = require("express");

const server = express();

// Query params = ?teste=1
// Routes params = /users/1
// Request body = { "name": "Chicao", "email": "fasj86@gmail.com"}

server.get("/users/:id", (req, res) => {
  const { id } = req.params;
  return res.json({ message: `Buscando o usuario ${id}` });
});

server.listen(3000);
