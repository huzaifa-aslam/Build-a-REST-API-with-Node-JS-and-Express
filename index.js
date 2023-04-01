import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
// Create MySQL connection pool
const pool = mysql.createPool({
  host: "sql12.freemysqlhosting.net",
  user: "sql12610359",
  password: "8ZyYA5tnqS",
  database: "sql12610359",
});
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Connected to MySQL database...");
  connection.release();
});
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.get("/api/v1/users", (req, res) => {
  // Execute a simple query
  pool.query("SELECT * FROM test", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
  // res.status(200).json([
  //   { id: 1, name: "ali" },
  //   { id: 2, name: "hassan" },
  // ]);
});
app.listen(PORT, () => {
  console.log(`Server is Running on port http://localhost:${PORT}`);
});
