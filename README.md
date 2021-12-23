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

##### API User:

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

- Editar perfil

```shell
curl --location --request PUT 'https://ih-project3-fa.herokuapp.com/users/editprofile/61be0639d6a8f5f44bbb1655' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Fa",
    "lastname": "RM",
    "country": "Mexico",
    "description":"Profesor apasionado por la enseñanza ",
    "image":"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv",
    "experience":"5 años de experiencia"
}'
```

- Inscribir curso

```shell
curl --location --request POST 'http://localhost:3005/users/registercourse/61c39e317cc041342efd1251' \
--header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjM2EzYzk2NzRhNzczY2MyZDcxZTRjIn0sImlhdCI6MTY0MDIzNTg2NSwiZXhwIjoxNjQwMjcxODY1fQ.5j9gaUU8GO5xvabiXU9xFCXDi1cCnYm6SKxkfAWOZ1w'
```

##### API Courses:

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
curl --location --request GET 'https://ih-project3-fa.herokuapp.com/courses/readAll'
```

- Leer un curso

```shell
curl --location --request GET 'https://ih-project3-fa.herokuapp.com/courses/readone/61be07bfd6a8f5f44bbb165d'
```

- Editar un curso

```shell
curl --location --request PUT 'https://ih-project3-fa.herokuapp.com/courses/edit/61be07bfd6a8f5f44bbb165d' \
--header 'Content-Type: application/json' \
--data-raw '  {
            "level": "B2",
            "inscriptionDate": "18 de diciembre 2021",
            "startDate": "24 de diciembre 2021",
            "duration": "9 semanas",
            "mode": "Online",
            "schedule": "9:00-10:30 am",
            "days": "Lunes, Miercoles y Viernes",
            "subject": "Ingles",
            "link": "",
            "owner": ""
        }'
```

- Eliminar un curso

```shell
curl --location --request DELETE 'https://ih-project3-fa.herokuapp.com/courses/delete/61be07bfd6a8f5f44bbb165d' \
--data-raw ''
```

### Gracias por su tiempo y eneseñanza

A Teacher [Mike](https://github.com/mikenieva), [Sam](https://github.com/ta-web-mex) y [K'ohnin](https://github.com/konhin2)
