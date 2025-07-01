const pool = require("../db/connection");

//Contiene las consultas SQL a PostgreSQL.
//Solo se comunica con la base de datos.
//No maneja peticiones ni respuestas.

const getPosts = () => pool.query("SELECT id, titulo, img, descripcion, likes FROM posts");
const createPost = (titulo, img, descripcion) => {
  return pool.query(
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *",
    [titulo, img, descripcion]
  );
};

const likePost = (id) =>
  pool.query("UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *", [id]);

const deletePost = (id) =>
  pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);

module.exports = { getPosts, createPost, likePost, deletePost };
 