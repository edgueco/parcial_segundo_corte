// importamos al framework express
import express from "express";

import cors from "cors";

// importo routers pero como no va ser la unica le coloco el alas y la aplicacion entiende que es esta categoriasRoutes 

import empleadosRoutes from "./routes/empleados.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import productosRoutes from "./routes/productos.routes.js";

// asignamos a app toda la funcionalidad para mi servidor web
const app = express();

// setear a un puerto a mi servidor web
app.set("port",5000);

// Middleware 
app.use(express.json());

// uso cors para informar al navegador que yo soy el que va a trabajar hay
app.use(cors());

// routes

// app.use("/api/categorias", categoriasRoutes);


app.use("/api/empleados", empleadosRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/productos", productosRoutes);


// Hacemos disponible a mi server app para toda la apliacion
export default app;