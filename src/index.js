import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import productsRouter from "./routes/products.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());               
app.use(bodyParser.json());    

app.use("/auth", authRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("API REST Proyecto Final funcionando 🚀");
});


app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  console.error("Error interno:", err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Error interno del servidor";

  res.status(statusCode).json({ error: message });
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
