//1.IMPORTACIONES
const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");

//2.MIDDLEWARES
//Base de Datos
connectDB();
// //Todas las peticioes y respuesta se manejan en protocolo JSON
// //permite flexibilizar el servidor para que acceda un server externo
app.use(cors());
app.use(express.json());

// //3.RUTAS
app.use("/courses", require("./routes/courses"));

// //users
app.use("/users", require("./routes/users"));

//4.SERVER
app.listen(process.env.PORT, () => {
  console.log(`Servidor trabajando en http://localhost:${process.env.PORT}`);
});
