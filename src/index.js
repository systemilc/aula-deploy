require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({ mensagem: "Tudo certo por aqui" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rotando na porta ${process.env.PORT}`);
});
