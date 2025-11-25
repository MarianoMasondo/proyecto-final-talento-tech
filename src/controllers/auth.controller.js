import jwt from "jsonwebtoken";
import { validateUserCredentials } from "../services/auth.service.js";

const SECRET = process.env.JWT_SECRET || "supersecreto";

export function login(req, res) {
  const { email, password } = req.body;

  const user = validateUserCredentials(email, password);

  if (!user) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  const token = jwt.sign(
    { email: user.email, role: user.role },
    SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
}
