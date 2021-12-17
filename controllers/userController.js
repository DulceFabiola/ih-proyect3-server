const bcryptjs = require("bcryptjs");
const User = require("./../models/User");
const jwt = require("jsonwebtoken");

exports.postSignup = async (req, res) => {
  //Creacion de usuarios
  //1.OBTENER USUARIO, EMAIL Y PASSWORD DEL FORMULARIO (REQ)
  const {
    name,
    lastname,
    country,
    description,
    email,
    password,
    image,
    experience,
    rol,
  } = req.body;

  //2.VALIDACIONES
  //a) Datos vacios
  if ((!name, !email, !password)) {
    return res.status(500).json({
      msg: "Todos los campos son obligatorios",
      error: error,
    });
  }

  try {
    //3.GENERAR PASSWORD PARA BASE DE DATOS
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //4.CREAR USUARIO EN BASE DE DATOS
    const newUser = await User.create({
      name,
      lastname,
      country,
      description,
      email,
      image,
      experience,
      rol,
      //nombre de la prop del modelo:password
      password: hashedPassword,
    });

    //5.AUTENTICACION CON TOKENS
    //A.CREAR UN PAYLOAD (INFORMACION DEL USUARIO)
    const payload = {
      user: {
        id: newUser._id, //ID DE MONGOBD DEL USUARIO
      },
    };

    //B. FIRMAR EL TOKEN
    jwt.sign(
      payload, // DATOS QUE ACOMPAÑARAN AL TOKEN
      process.env.SECRET, // PALABRA SECRETA (FIRMA)
      {
        expiresIn: 360000, // EXPIRACIÓN DEL TOKEN
      },
      (error, token) => {
        if (error) throw error;

        res.json({
          msg: "Token correctamente generado.",
          data: token,
        });
      }
    );
  } catch (error) {
    if (error.code === 11000) {
      res.status(500).json({
        msg: "Email ya registrado. Intente con otro",
        error: error,
      });
    } else {
      res.status(500).json({
        msg: "Hubo un error con la creacion de usuario",
        error: error,
      });
    }
  }
};
