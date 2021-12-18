//1.IMPORTACIONES
const { Schema, model } = require("mongoose");

//2.SCHEMA
const courseSchema = Schema({
  level: {
    type: String,
    required: true,
  },
  inscriptionDate: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  days: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: "",
  },
  owner: String,
});

//3.MODELO
const Course = model("Course", courseSchema);

//4.EXPORTACION
module.exports = Course;
