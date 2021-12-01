const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");

const app = express();

//Importando rutas // importing routes
const customerRoutes = require("./routes/customers");

//configuración //settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "",
      port: 3307,
      database: "crudnodejsmysql",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));
//rutas //routes
app.use("/", customerRoutes);

//Static files // Archivos estaticos

app.use(express.static(path.join(__dirname, "public")));

//Starting the server // Empezando el servidor
app.listen(app.get("port"), () => {
  console.log("Server on port 3000");
});
