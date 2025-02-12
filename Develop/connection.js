
import dotenv from "dotenv";
dotenv.config();

// WHY WONT .ENV WORK??
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: DB_USER,
  host: 'localhost',
  database: DB_NAME,
  password: String(DB_PASSWORD),
  port: 5432,
});

pool.connect()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Database connection error', err));

export default pool;

const connection = pool;
// Function to call the connection to the database to 'View all employees'
async function viewAllDepartments() {
    await connection.query('SELECT * FROM department', (err, result) => {
       if (err) throw err;
       console.table(result.rows);
    });
   }

   export { viewAllDepartments };
// Function to "Add Employee"

//Function to "Update Employee Role"

//Function to View all roles'

//Function to 'Add role'

//Function to 'View all departments'

//Function to 'Add Department'

//Function to 'Quit'