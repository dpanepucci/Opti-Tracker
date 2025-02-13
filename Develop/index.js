import inquirer from 'inquirer';
import { viewAllDepartments, addEmployee, updateEmployeeRole, viewAllRoles, addRole, addDepartment, quit } from './connection.js';

class Cli {
    constructor(departments = []) {
        this.departments = departments;
    }

    start() {
        this.promptUser();
    }

    promptUser() {
        const questions = [
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View all employees',
                    'Add Employee',
                    'Update Employee Role',
                    'View all roles',
                    'Add Role',
                    'View all departments',
                    'Add Department',
                    'Quit'
                ]
            }
        ];

        inquirer.prompt(questions).then(async (answers) => {  
            switch (answers.action) { 
                // Case for View all Departments
                case 'View all departments':
                    viewAllDepartments();
                    break;
                // Case for Add Employee
                case 'Add Employee':
                    addEmployee();
                    break;
                // Case for Update Employee Role
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                case 'View all roles':
                        viewAllRoles();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Quit':
                    quit();
            }
        });
    }
}

// Create an instance of the Cli class and call the start method
const cli = new Cli();
cli.start(); 
