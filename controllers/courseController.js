//IMPORTACIONES
const Course = require("./../models/Course");
const User = require("./../models/User");
//CREAR CURSO
exports.createCourse = async (req, res) => {
  //Obtener los datos del formulario
  const {
    level,
    inscriptionDate,
    startDate,
    duration,
    mode,
    schedule,
    days,
    subject,
    link,
    owner,
  } = req.body;

  try {
    const newCourse = await Course.create({
      level,
      inscriptionDate,
      startDate,
      duration,
      mode,
      schedule,
      days,
      subject,
      link,
      owner,
    });
    // const currentUser = req.user;
    // const findUser = await User.findOne({ user: currentUser.id });

    // const courseFind = await User.findOne({ user: currentUser.id }).populate(
    //   "owner"
    // );
    //Devolver una respuesta en un formato JSON
    res.json({
      msg: "Curso creado con éxito",
      data: newCourse,
    });
  } catch (error) {
    //error en server
    console.log(error);
    res.status(500).json({
      msg: "Hubo un error creando el curso",
      error: error,
    });
  }
};

//lEER CURSOS
exports.readAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json({
      msg: "Cursos obtenidos con éxito",
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos",
      error: error,
    });
  }
};

//LEER UN CURSO
exports.readOneCourse = async (req, res) => {
  //obtener los parametros
  //de la url vamos a obtener datos
  const { id } = req.params;

  try {
    const course = await Course.findById(id);
    res.json({
      msg: "Curso obtenido con éxito",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos.",
      error: error,
    });
  }
};

//EDITAR UN CURSO
exports.editCourse = async (req, res) => {
  //obtiene el dato de la url
  const { id } = req.params;

  //obtiene datos del body
  const {
    level,
    inscriptionDate,
    startDate,
    duration,
    mode,
    schedule,
    days,
    subject,
    link,
    owner,
  } = req.body;
  try {
    const updateCourse = await Course.findByIdAndUpdate(
      id,
      {
        level,
        inscriptionDate,
        startDate,
        duration,
        mode,
        schedule,
        days,
        subject,
        link,
        owner, //Propiedades a cambiar
      },
      { new: true }
    );
    res.json({
      msg: "Curso actualizada con éxito",
      data: updateCourse,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error actualizando los datos.",
      error: error,
    });
  }
};

//BORRAR UN CURSO
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCourse = await Course.findByIdAndRemove({ _id: id });
    res.json({
      msg: "Curso borrado con éxito",
      data: deletedCourse,
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: "Hubo un error borrando el curso.",
      error: error,
    });
  }
};
