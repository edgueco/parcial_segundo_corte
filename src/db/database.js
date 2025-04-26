// database.js
import mysql from "mysql2/promise";  // Cambia la importación

import config from "./../config.js";

const getConnection = async () => {
    try {
        const connection = await mysql.createConnection({
            host: config.host,
            database: config.database,
            user: config.user,
            password: config.password
        });
        return connection;
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        throw error;
    }
}

export default getConnection;