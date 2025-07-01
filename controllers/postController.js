const postModel = require("../models/postModel");

//Lógica de cada ruta.
//petición HTTP, llamada al modelo, maneja errores y envía la respuesta.


const getAllPosts = async (req, res) => {
  const { rows } = await postModel.getPosts();
  res.send(rows);
};

const createNewPost = async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  const result = await postModel.createPost(titulo, img, descripcion);
  res.status(201).json({
    mensaje: "Post creado con éxito",
    post: result.rows[0],
  });
  console.log(`Post de ${titulo} creado con éxito`);
};

const likePostById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await postModel.likePost(id);
    if (result.rowCount === 0) return res.status(404).send("Post no encontrado");
    res.status(200).json({
      mensaje: `Likes del post ${id} incrementados con éxito`,
      post: result.rows[0],
    });
    console.log(`Likes del post ${id} incrementados con éxito`);
  } catch (error) {
    console.error("Error al modificar likes:", error);
    res.status(500).send("Error interno al actualizar likes");
  }
};

const deletePostById = async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).send("ID inválido");

  try {
    const result = await postModel.deletePost(id);
    if (result.rowCount === 0) return res.status(404).send("Post no encontrado");
    res.status(200).json({
      mensaje: `Post ${id} eliminado con éxito`,
      post: result.rows[0],
    });
    console.log(`Post ${id} eliminado con éxito`);
  } catch (error) {
    console.error("Error al eliminar:", error);
    res.status(500).send("Error interno al eliminar");
  }
};

module.exports = {
  getAllPosts,
  createNewPost,
  likePostById,
  deletePostById,
};
