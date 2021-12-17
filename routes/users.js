// 1. IMPORTACIONES
const express = require("express");
const router = express.Router();

const {
  postSignup,
  postLogin,
  postLogout,
} = require("./../controllers/userController");

// 2. ROUTER
//CREAR USUARIO
router.post("/signup", postSignup);

//INICIAR SESION DE USUARIO
//router.post("/login", postLogin);

//VERIFICACON DE USUARIO
//router.get("/verifytoken", getVerifyToken);

//LOGOUT
// router.post("/logout", isLoggedIn, postLogout);

// 3. EXPORTACIÓN
module.exports = router;
