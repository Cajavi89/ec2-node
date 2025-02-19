require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/prueba", (req, res) => {
  res.send({ data: "hola mundo" });
});

app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));
