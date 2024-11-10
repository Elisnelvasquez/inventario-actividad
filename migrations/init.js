require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true // Permite ejecutar múltiples sentencias SQL
};

const initMigration = async () => {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);

        // Leer el archivo SQL
        const sql = fs.readFileSync(path.join(__dirname, '../inventario.sql'), 'utf-8');

        // Dividir el archivo SQL en sentencias individuales
        const queries = sql.split(';').map(query => query.trim()).filter(query => query.length > 0);

        // Ejecutar cada sentencia SQL individualmente
        for (const query of queries) {
            await connection.query(query);
        }

        console.log('Migración "inventario.sql" ejecutada exitosamente');
    } catch (err) {
        console.error('Error al ejecutar el script de migración:', err);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
};

initMigration();
