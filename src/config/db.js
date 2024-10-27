import mysql from 'mysql2/promise';
import "dotenv/config";

const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

const db = mysql.createPool({
    host: host,
    user: user,
    password: password,
    database: database,
});

export { db };