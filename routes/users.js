// 1. IMPORTACIONES
const express = require("express");
const router = express.Router();
const authorization = require("./../middleware/authorization");
const {
  postSignup,
  postLogin,
  getVerifyToken,
  postLogout,
} = require("./../controllers/userController");

// 2. ROUTER
//CREAR USUARIO
router.post("/signup", postSignup);

//INICIAR SESION DE USUARIO
router.post("/login", postLogin);

//VERIFICACON DE USUARIO
router.get("/verifytoken", authorization, getVerifyToken);

//LOGOUT
// router.post("/logout", postLogout);

// 3. EXPORTACIÓN
module.exports = router;
