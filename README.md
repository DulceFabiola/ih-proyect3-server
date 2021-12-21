# Desarrollo de proyecto

## Uso de proyecto

- Es necesario instalar las dependencias, tan pronto se clone el proyecto.

```shell
$ npm install
```

- Una vez hecho esto, crear un archivo `.env` para generar las variables de entorno.

`.env`

```
PORT=3000
MONGODB='THE URL_DB'
SESSION='THE SECRET WORD'
```

## Instalación de librerías

- bcryptjs
- dotenv
- express
- mongoose
- nodemon
- jsonwebtoken
- cors

```shell
$ npm install o npm i
```

## Correr el proyecto

Para correr el proyecto basta con ejecutar:

```shell
$ npm run dev
```

## USO DE EP's

API User:

- Registro de usuario

```shell
curl --location --request POST 'https://ih-project3-fa.herokuapp.com/users/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Fa",
    "email": "test2@gmail.com",
    "password": "holaMundo1",
    "role":"Teacher"
}'
```

- Inicio de sesión

```shell
curl --location --request POST 'https://ih-project3-fa.herokuapp.com/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test2@gmail.com",
    "password": "holaMundo1"
}'
```

- Verificación de Token

```shell
curl --location --request GET 'https://ih-project3-fa.herokuapp.com/users/verifytoken' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZTA2YzBkNmE4ZjVmNDRiYmIxNjU5In0sImlhdCI6MTYzOTg0MzY1OSwiZXhwIjoxNjM5ODc5NjU5fQ.H0i4obmrVxTg-Wqod_9ab9Wxl1pr4QhaQcov8BMUQOk'

```

API Courses:

- Crear un curso

```shell
curl --location --request POST 'https://ih-project3-fa.herokuapp.com/courses/create' \
--header 'Content-Type: application/json' \
--data-raw '{
      "level":"B1",
      "inscriptionDate":"26 diciembre 2021",
      "startDate": "26 diciembre 2021",
      "duration":"9 semanas",
      "mode":"Online",
      "schedule":"9:00-10:30 am",
      "days":"Lunes, Miercoles y Viernes",
      "subject":"Ingles",
      "link":"",
      "owner":""
}'
```

- Leer todos los cursos

```shell
curl --location --request GET 'http://localhost:3005/courses/readAll'
```

- Leer un curso

```shell
curl --location --request GET 'https://ih-project3-fa.herokuapp.com/courses/readone/61be07bfd6a8f5f44bbb165d'
```
