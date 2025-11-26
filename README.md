# Proyecto final – API REST con Node.js, Firebase y JWT

Este repositorio contiene mi proyecto final del curso **Node.js de Talento Tech**.  
Desarrollé una **API REST** para administrar un catálogo de productos, con:

- Acceso a datos en la nube usando **Firestore (Firebase)**.
- **Autenticación y autorización con JWT** para proteger las rutas.
- Arquitectura por capas: **rutas, controladores, servicios, modelos y middlewares**.

El objetivo principal es poder **Crear, Leer, Actualizar y Eliminar (CRUD)** productos de manera segura.

---

## 🧱 Tecnologías usadas

- **Node.js**
- **Express**
- **Firebase / Firestore**
- **JWT (jsonwebtoken)**
- **dotenv**
- **cors**
- **body-parser**
- **nodemon** (para desarrollo)

---

## 🗂 Estructura del proyecto

```bash
Proyecto-Final/
├─ src/
│  ├─ config/
│  │  └─ firestore.js        # Configuración de Firebase / Firestore
│  ├─ controllers/
│  │  ├─ auth.controller.js  # Lógica de login y generación de JWT
│  │  └─ products.controller.js # Lógica principal de productos (validaciones, respuestas)
│  ├─ middlewares/
│  │  └─ auth.middleware.js  # Middleware que valida el JWT
│  ├─ models/
│  │  └─ products.model.js   # Acceso directo a Firestore
│  ├─ routes/
│  │  ├─ auth.routes.js      # Rutas de autenticación
│  │  └─ products.routes.js  # Rutas de productos (CRUD)
│  ├─ services/
│  │  ├─ auth.service.js     # Lógica de negocio para login
│  │  └─ products.service.js # Lógica de negocio para productos
│  └─ index.js               # Punto de entrada del servidor
├─ .env                      # Variables de entorno (NO se sube a GitHub)
├─ .gitignore
├─ package.json
└─ package-lock.json
