// connection.js
import mysql from 'mysql';

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cuyuniversity"
});

export default db;
