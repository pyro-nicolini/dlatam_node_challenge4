const { Pool } = require("pg");
const cors = require("cors");
const express = require("express");
const app = express();

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "likeme",
  port: 5432,
  allowExitOnIdle: true,
});

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log("iniciando en el puerto http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("Servidor esta súperDúper.");
});

app.get("/posts", async (req, res) => {
  const { rows } = await pool.query(
    "SELECT titulo, img, descripcion, likes FROM posts"
  );
  res.send(rows);
});

app.post("/posts", async (req, res) => {
  const { titulo, url: imgSrc, descripcion } = req.body;
  let likes = 0;
  const consulta =
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ( $1, $2, $3, $4)";
  const values = [titulo, imgSrc, descripcion, likes];
  await pool.query(consulta, values);
  res.send("posteado con exito");
});

// app.put("/posts/like/:id", async (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   console.log(`likes de ${id} modificados con exito`);
// });

// app.delete("/posts/:id", async (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   console.log(`Post ${id} Deleteado`);
// });
