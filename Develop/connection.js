import inquirer from 'inquirer';
import dotenv from "dotenv";
dotenv.config();

// Hides password
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

import pg from 'pg';
const { Pool } = pg;

// Connects to database
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

// Function to call the connection to the database to 'View all employees'
async function viewAllDepartments() {
    try {
        const result = await pool.query('SELECT * FROM department');
        console.table(result.rows);
    } catch (err) {
        console.error(err);
    }
}

export { viewAllDepartments };

// Function to "Add Employee"
async function addEmployee() {
    try {
        const employee = await inquirer.prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the employee's first name?",
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the employee's last name?",
            },
            {
                type: "input",
                name: "roles_id",
                message: "What is the employee's role ID?",
            },
            {
                type: "input",
                name: "manager_id",
                message: "What is the employee's manager ID?",
            }
        ]);
        await pool.query(
            `INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ($1, $2, $3, $4)`,
            [employee.first_name, employee.last_name, employee.roles_id, employee.manager_id]
        );
        console.log("Employee added successfully!");
    } catch (err) {
        console.error(err);
    }
}

export { addEmployee };

// Function to "Update Employee Role"
async function updateEmployeeRole() {
    try {
        const employee = await inquirer.prompt([
            {
                type: "input",
                name: "employee_id",
                message: "What is the employee's ID?",
            },
            {
                type: "input",
                name: "roles_id",
                message: "What is the employee's new role ID?",
            },
        ]);
        await pool.query(
            `UPDATE employee SET roles_id = $1 WHERE id = $2`,
            [employee.roles_id, employee.employee_id]
        );
        console.log("Employee role updated successfully!");
    } catch (err) {
        console.error(err);
    }
}

export { updateEmployeeRole };

// Function to View all roles
async function viewAllRoles() {
    try {
        const result = await pool.query('SELECT * FROM roles');
        console.table(result.rows);
    } catch (err) {
        console.error(err);
    }
}

export { viewAllRoles };

// Function to 'Add role'
async function addRole() {
    try {
        const role = await inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the role title?",
            },
            {
                type: "input",
                name: "salary",
                message: "What is the role salary?",
            },
            {
                type: "input",
                name: "department_id",
                message: "What is the department ID?",
            }
        ]);
        await pool.query(
            `INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)`,
            [role.title, role.salary, role.department_id]
        );
        console.log("Role added successfully!");
    } catch (err) {
        console.error(err);
    }
}

export { addRole };

// Function to 'Add Department'
async function addDepartment() {
    try {
        const department = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the department name?",
            }
        ]);
        await pool.query(
            `INSERT INTO department (department_name) VALUES ($1)`,
            [department.name]
        );
        console.log("Department added successfully!");
    } catch (err) {
        console.error(err);
    }
}

export { addDepartment };

// Function to View all employees
async function viewAllEmployees() {
    try {
        const result = await pool.query('SELECT * FROM employee');
        console.table(result.rows);
    } catch (err) {
        console.error(err);
    }
}

export { viewAllEmployees };

// Function to 'Quit'
function quit() {
    console.log("Goodbye!");
    process.exit();
}

export { quit };