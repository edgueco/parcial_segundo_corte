import getConnection from "./../db/database.js";

const updateProducto = async (req, res) => {
    let connection;
    try {
        const {id} = req.params;
        const { ProductoNombre, PrecioUnitario } = req.body;

        const producto = {
            ProductoNombre,
            PrecioUnitario
        }

        connection = await getConnection();
        const [result] = await connection.query(
            "UPDATE productos SET ? WHERE ProductoID = ?", [producto, id]);

        res.json({
            message: "Producto actualizado exitosamente",
            affectedRows: result.affectedRows
        });

    } catch (error) {
        console.error("Error al actualizar producto:", error);
        

    } 
}

export const methodHTTP = {
    updateProducto
}