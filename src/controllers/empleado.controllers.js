import getConnection from "../db/database.js";

const getEmpleados = async (req, res) => {
    let connection;
    try {
        connection = await getConnection();
        const [result] = await connection.query(
            "SELECT EmpleadoID, Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento,FechaContratacion,Direccion, Ciudad,Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto FROM empleados");
        res.json(result);

    } catch (error) {
        console.error("Error al obtener empleados:", error);

    } 
}

export const methodHTTP = {
    getEmpleados
}