//1.IMPORTACIONES
const express = require("express");
const router = express.Router();
const {
  createCourse,
  readAllCourses,
  readOneCourse,
  editCourse,
  deleteCourse,
} = require("./../controllers/courseController");
//2.RUTEO

//CREAR CURSO
router.post("/create", createCourse);

//lEER CURSOS
router.get("/readall", readAllCourses);

//LEER UNA CURSO
router.get("/readone/:id", readOneCourse);

//EDITAR UN CURSO
router.put("/edit/:id", editCourse);

//BORRAR UN CURSO
router.delete("/delete/:id", deleteCourse);

//3.EXPORTACION
module.exports = router;
