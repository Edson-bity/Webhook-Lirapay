import express from "express";
const app = express();
app.use(express.json());

app.post("/webhook/lirapay", (req, res) => {
  console.log("=== WEBHOOK RECEBIDO ===");
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).send("OK");
});

app.get("/", (req, res) => res.send("Servidor ativo! Webhook pronto 🚀"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));