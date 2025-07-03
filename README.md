# CHALLENGE 5 - Backend con Node.js + Express + PostgreSQL

Aplicación backend que permite listar, crear, eliminar joyas.  
Se conecta a una base de datos PostgreSQL y expone rutas `GET`, `POST`, `PUT` y `DELETE` según los requerimientos del desafío.

---

## ⚙️ Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL (`pg`)
- CORS

---

## 🛠️ Instrucciones Previas

1. tener creada una DATABASE en SQL llamada "joyas" con una TABLA llamada "inventario".

2. Recuerda configurar los datos del objeto Pool de pg. en archivo .env

```file
.env
```

## 🛠️ Instrucciones

1. Instalar dependencias:

   ```bash
   npm install

   ```

2. Ejecutar Servidor de backend:

   ```bash
   node o nodemon server.js

   ```

3. Descargar, Instalar y Levantar Frontend:
   ```bash
   npm i
   npm run dev
   ```
