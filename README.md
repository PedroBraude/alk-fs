[Link a la App](https://challenge-fullstack-alkemy.vercel.app)

<a name="top"></a>
# Indice

- [Consigna dada por Alkemy](#consigna)
- [Como correr en local](#runlocal)
- [Sobre el frontend](#frontend)
- [Sobre el backend](#backend)
- [Screens del sitio](#screens)
- Usuario admin para test de alkemy: admin@alkemy.com.ar (pass: 123456)
<a name="consigna"></a>
[Volver al Indice](#top)

# CHALLENGE FULL STACK - JavaScript 🚀

## Objetivo

Desarrollar una aplicación para administración de presupuesto personal. La misma debe
permitir crear y editar ingresos y egresos de dinero, y mostrar un balance resultante de las
operaciones registradas.

## Requerimientos Técnicos

Deberás desarrollar una API en Node.js junto a cualquiera de los siguientes frameworks,
en sus versiones estables:

- Express
- Adonis
- Koa


En el caso de querer utilizar otro framework es posible, pero debe consultarse con
anterioridad.

Los datos mostrados deben ser persistidos en una base de datos relacional. El esquema de
datos puede armarse según se considere apropiado en base a los requerimientos del
negocio. La API deberá exponer URLS que devuelvan datos en JSON.
Estos datos en JSON deberán ser consumidos por un cliente, a través de peticiones AJAX.
El cliente puede ser armado con React.js.
El trabajo realizado se subirá a un repositorio.

## Secciones

## Home
La pantalla de inicio deberá mostrar el balance actual, es decir, el resultante de los
ingresos y egresos de dinero cargados, y un listado de los últimos 10 registrados.

## ABM de operaciones (ingresos y egresos)
La aplicación deberá contener:
- Formulario de registro de operación. El mismo deberá contener:
    - Concepto
    - Monto
    - Fecha
    - Tipo (ingreso o egreso)
- Listado de operaciones registradas según su tipo (ingreso o egreso).
- Desde el listado, se debe poder modificar o eliminar una operación registrada
previamente. No debe ser posible modificar el tipo de operación (ingreso o
egreso) una vez creada.

## Bonus

De forma adicional, puede
### Autenticación de usuarios
Agregar un formulario de registro y login para permitir identificar al usuario que utiliza la
aplicación, y vincular las operaciones registradas al usuario autenticado en el sistema,
tanto para el listado y creación de nuevos registros. Los datos indispensables para permitir
el ingreso deben ser un email y contraseña, pudiendo agregar los que se deseen.
### Categorías de operaciones
Agregar la funcionalidad de categorizar las operaciones registradas en el gestor, como por
ejemplo, una categoría “comida” para categorizar egresos. Adicionalmente, agregar la
posibilidad de listar operaciones por categoría.

##  Criterios a Evaluar
- El diseño debe ser responsive, pudiendo utilizarse CSS puro o algún framework
de Frontend
- Código limpio, buenas prácticas de programación, en idioma inglés
- Correcto diseño de la base de datos
- Buenas prácticas de GIT: Commits declarativos y atomizados
- Buenas prácticas para el nombre de rutas

# Personal Finance
autor: Fernando Masino
<br />
[Volver al Indice](#top)

<a name="runlocal"></a>
## Correr en local
- Clonar el repositorio e instalar dependecias
```bash
git clone github.com/PedroBraude/alk-fs
cd api/
npm run install
cd ../client/
npm run install
```
- Crear la base de datos y tablas segun el archivo ubicado en api/database.sql
- Colocar las credenciales de acceso en el archivo api/.env.


- Ahora ya podemos correr la app en local
```bash
cd api/
nodemon index.js
cd ../client/
npm run start
```

<a name="api"></a>
## El backend
- El repositorio es este mismo
- api desarrollada en NodeJS y servidor express.)
- Base de datos relacional Postgres.

<a name="frontend"></a>
## El frontend
- El repositorio es este mismo
- Desarrollado en React.
- [Link al Front End Estático](http://administradorpersonal.pedrobraude.com/)


<br />
[Volver al Indice](#top)


