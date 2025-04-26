import getConnection from "./../db/database.js";

const getCategorias = async (req, res) => {
    let connection;
    try {
        connection = await getConnection();
        const [result] = await connection.query(
            "SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
        res.json(result);

    } catch (error) {
        console.error("Error al obtener categorías:", error);
    } 
}

const postCategorias = async (req, res) => {
    let connection;
    try {
        const { CategoriaNombre, Descripcion, Imagen } = req.body;

        const category = {
            CategoriaNombre,
            Descripcion,
            Imagen
        }

        connection = await getConnection();
        const [result] = await connection.query("INSERT INTO categorias SET ?", category);

        res.status(201).json({
            message: "Categoría creada exitosamente",
            id: result.insertId
        });

    } catch (error) {
        console.error("Error al crear categoría:", error);
    } 
}

const getCategory = async (req, res) => {
    let connection;
    try {
        const {id} = req.params;
        connection = await getConnection();
        const [result] = await connection.query(
            "SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?",
            id
        );

        if (result.length === 0) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        res.json(result[0]);

    } catch (error) {
        console.error("Error al obtener categoría:", error);
    } 
}

const deleteCategory = async (req, res) => {
    let connection;
    try {
        const {id} = req.params;
        connection = await getConnection();
        
        // Primero verificamos si la categoría existe
        const [checkResult] = await connection.query(
            "SELECT CategoriaID FROM categorias WHERE CategoriaID = ?",
            id
        );

        if (checkResult.length === 0) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        // Si existe, procedemos a eliminarla
        const [result] = await connection.query(
            "DELETE FROM categorias WHERE CategoriaID = ?",
            id
        );

        res.json({
            message: "Categoría eliminada exitosamente",
            affectedRows: result.affectedRows
        });

    } catch (error) {
        console.error("Error al eliminar categoría:", error);

    } 
}

const updateCategorias = async (req, res) => {
    let connection;
    try {
        const {id} = req.params;
        const { CategoriaNombre, Descripcion, Imagen } = req.body;

        const category = {CategoriaNombre, Descripcion, Imagen}

        connection = await getConnection();
        const [result] = await connection.query(
            "UPDATE categorias SET ? WHERE CategoriaID = ?",[category, id]);

        res.json({
            message: "Categoría actualizada exitosamente",
            affectedRows: result.affectedRows
        });

    } catch (error) {
        console.error("Error al actualizar categoría:", error);
        

    } 
}

export const methodHTTP = {
    getCategorias,
    postCategorias,
    getCategory,
    deleteCategory,
    updateCategorias
}