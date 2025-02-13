// import inquirer from 'inquirer';
// import { viewAllDepartments, addEmployee, updateEmployeeRole, viewAllRoles, addRole, addDepartment, quit } from './connection.js';

// class Cli {
//     constructor(departments = []) {
//         this.departments = departments;
//     }

//     start() {
//         this.promptUser();
//     }

//     promptUser() {
//         const questions = [
//             {
//                 type: 'list',
//                 name: 'action',
//                 message: 'What would you like to do?',
//                 choices: [
//                     'View all employees',
//                     'Add Employee',
//                     'Update Employee Role',
//                     'View all roles',
//                     'Add Role',
//                     'View all departments',
//                     'Add Department',
//                     'Quit'
//                 ]
//             }
//         ];

//         inquirer.prompt(questions).then(async (answers) => {  
//             switch (answers.action) { 
//                 // Case for View all Departments
//                 case 'View all departments':
//                     viewAllDepartments();
//                     break;
//                 // Case for Add Employee
//                 case 'Add Employee':
//                     addEmployee();
//                     break;
//                 // Case for Update Employee Role
//                 case 'Update Employee Role':
//                     updateEmployeeRole();
//                     break;
//                 case 'View all roles':
//                         viewAllRoles();
//                     break;
//                 case 'Add Role':
//                     addRole();
//                     break;
//                 case 'Add Department':
//                     addDepartment();
//                     break;
//                 case 'Quit':
//                     quit();
//             }
//         });
//     }
// }

// // Create an instance of the Cli class and call the start method
// const cli = new Cli();
// cli.start(); 

import inquirer from 'inquirer';
import { viewAllDepartments, addEmployee, updateEmployeeRole, viewAllRoles, addRole, addDepartment, viewAllEmployees, quit } from './connection.js';

class Cli {
    constructor(departments = []) {
        this.departments = departments;
    }

    start() {
        this.promptUser();
    }

    async promptUser() { 
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

        const answers = await inquirer.prompt(questions); // Await the prompt

        switch (answers.action) { 
            case 'View all departments':
                await viewAllDepartments(); 
                break;
            case 'Add Employee':
                await addEmployee(); 
                break;
            case 'Update Employee Role':
                await updateEmployeeRole(); 
                break;
            case 'View all roles':
                await viewAllRoles(); 
                break;
            case 'Add Role':
                await addRole(); 
                break;
            case 'Add Department':
                await addDepartment(); 
                break;
            case 'View all Employees':
                await viewAllEmployees();
                break;
            case 'Quit':
                quit(); 
                return; // Exit 
        }

        // Prompt the user again
        this.promptUser();
    }
}

// Create an instance of the Cli class and call the start method
const cli = new Cli();
cli.start(); 