# Proyecto final – API REST Node.js (Talento Tech)

Este proyecto es mi entrega final del curso de Node.js de Talento Tech.  
Desarrollé una **API REST** para administrar un catálogo de productos, usando Firestore como base de datos y JWT para proteger las rutas.

---

## 🚀 Tecnologías

- Node.js + Express  
- Firebase / Firestore  
- jsonwebtoken (JWT)  
- dotenv, cors, body-parser  
- nodemon (para desarrollo)

---

## 🗂 Estructura del proyecto

```bash
src/
  config/         # firestore.js (configuración de Firebase)
  controllers/    # auth.controller.js, products.controller.js
  middlewares/    # auth.middleware.js (valida el JWT)
  models/         # products.model.js (acceso a Firestore)
  routes/         # auth.routes.js, products.routes.js
  services/       # auth.service.js, products.service.js
  index.js        # servidor Express
🔐 Variables de entorno
En la raíz del proyecto hay que crear un archivo .env con:

env
Copiar código
PORT=3000

FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_APP_ID=...

JWT_SECRET=algo-super-secreto
Los datos de Firebase salen del firebaseConfig de la consola de Firebase al crear una app Web.

▶️ Cómo correr el proyecto
bash
Copiar código
git clone https://github.com/MarianoMasondo/proyecto-final-talento-tech.git
cd proyecto-final-talento-tech
npm install
npm run dev
La API queda escuchando en: http://localhost:3000.

📡 Endpoints principales
1. Autenticación
POST /auth/login

Body de ejemplo:

json
Copiar código
{
  "email": "admin@admin.com",
  "password": "123456"
}
Respuesta (200):

json
Copiar código
{
  "token": "eyJhbGciOi..."
}
Ese token se usa en las rutas protegidas agregando el header:

http
Copiar código
Authorization: Bearer <token>
2. Productos (todas las rutas requieren JWT válido)
Modelo de producto en Firestore:

json
Copiar código
{
  "Nombre": "Sprite",
  "Precio": 3200,
  "Categoria": "Bebidas sin alcohol"
}
GET /products
Lista todos los productos.

GET /products/:id
Devuelve un producto por ID.
Si no existe → 404 Producto no encontrado.

POST /products/create
Crea un producto nuevo.
Body esperado:

json
Copiar código
{
  "Nombre": "Coca Cola",
  "Precio": 3500,
  "Categoria": "Bebidas sin alcohol"
}
Si faltan campos obligatorios o vienen campos desconocidos → 400 Bad Request.

PUT /products/:id
Actualiza un producto existente (al menos un campo).
Si el producto no existe → 404.

DELETE /products/:id
Elimina un producto por ID.
Si no existe → 404 Producto no encontrado.

🧯 Manejo de errores
La API maneja distintos códigos HTTP:

200 – Operación exitosa

201 – Recurso creado

400 – Error en la petición (body inválido, campos faltantes)

401 – Falta token o token inválido (auth)

404 – Ruta no encontrada o producto inexistente

500 – Error interno del servidor

✏️ Nota final
El objetivo de este proyecto es practicar:

Cómo estructurar una API en capas (rutas, controladores, servicios, modelos, middlewares).

Cómo usar Firestore como base de datos en la nube.

Cómo proteger rutas con JWT desde Node.js.
