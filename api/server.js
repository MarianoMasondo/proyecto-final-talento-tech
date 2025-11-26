import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import productsRouter from "../src/routes/products.routes.js";
import authRouter from "../src/routes/auth.routes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("API REST Proyecto Final funcionando 🚀 (Vercel Serverless)");
});

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  console.error("Error interno:", err);
  res.status(500).json({ error: "Error interno del servidor" });
});

export default app;
