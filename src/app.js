require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/prueba", (req, res) => {
  res.send({ data: "hola prueba" });
});

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
