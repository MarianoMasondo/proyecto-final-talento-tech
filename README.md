# Proyecto final – API REST Node.js (Talento Tech)

API REST para administrar un catálogo de productos, desarrollada como entrega final del curso de Node.js de Talento Tech.  
Usa **Express**, **Firestore** y **JWT** para proteger las rutas.

Deploy en Vercel:  
`https://proyecto-final-talento-tech-ten.vercel.app`

---

## 👤 Usuario de prueba

    email:    admin@admin.com
    password: 123456
    rol:      admin

Primero hacé `POST /auth/login` para obtener el token JWT y úsalo en las demás rutas con:

    Authorization: Bearer <token>

---

## 🛠 Tecnologías

- Node.js + Express  
- Firebase / Firestore  
- JSON Web Tokens (`jsonwebtoken`)  
- dotenv, cors, body-parser  

---

## ▶️ Correr el proyecto localmente

    git clone https://github.com/MarianoMasondo/proyecto-final-talento-tech.git
    cd proyecto-final-talento-tech
    npm install
    npm run dev

La API queda en: `http://localhost:3000`

---

## 📡 Endpoints principales

### Autenticación

**POST** `/auth/login`  
Body:

    {
      "email": "admin@admin.com",
      "password": "123456"
    }

Respuesta:

    { "token": "..." }

---

### Productos (requieren JWT)

- **GET** `/products` – Lista todos los productos.  
- **GET** `/products/:id` – Devuelve un producto por ID.  
- **POST** `/products/create` – Crea un producto.

Body de ejemplo:

    {
      "Nombre": "Coca Cola",
      "Precio": 3500,
      "Categoria": "Bebidas sin alcohol"
    }

- **PUT** `/products/:id` – Actualiza un producto (al menos un campo).  
- **DELETE** `/products/:id` – Elimina un producto (solo rol `admin`).  

---

La API devuelve códigos HTTP estándar:  
`200/201` (OK), `400` (petición inválida), `401/403` (auth), `404` (no encontrado), `500` (error interno).
