const cors = require("cors");
const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes")

app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes); // rutitas definidas en postRoutes

app.get("/", (req, res) => {
  res.send("Servidor esta súperDúper.");
});

app.listen(3000, () => {
  console.log("iniciando en el puerto http://localhost:3000");
});