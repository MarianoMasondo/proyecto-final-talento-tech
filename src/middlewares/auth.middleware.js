import jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET || "supersecreto";

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Falta header Authorization" });
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ error: "Formato de token inválido" });
  }

  try {
    const payload = jwt.verify(token, SECRET);

    if (req.method === "DELETE" && payload.role !== "admin") {
      return res
        .status(403)
        .json({ error: "No tienes permisos para realizar esta acción" });
    }

    req.user = payload; 
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
}
