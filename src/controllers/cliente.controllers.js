import getConnection from "./../db/database.js";

const postClientes = async (req, res) => {
    let connection;
    try {
        const { ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax } = req.body;

        const cliente = {
            ClienteID,
            Compania,
            Contacto,
            Titulo,
            Direccion,
            Ciudad,
            Regiones,
            CodigoPostal,
            Pais,
            Telefono,
            Fax
        }

        connection = await getConnection();
        const [result] = await connection.query("INSERT INTO clientes SET ?", cliente);

        res.status(201).json({
            message: "Cliente creado exitosamente",
            id: result.insertId
        });

    } catch (error) {
        console.error("Error al crear cliente:", error);
        

    } 
}

export const methodHTTP = {
    postClientes
}