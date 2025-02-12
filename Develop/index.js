import inquirer from 'inquirer';
import { viewAllDepartments } from './connection.js';

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
                // Add your logic for each case here
                case 'View all departments':
                    viewAllDepartments();
                    break;
                // Add other cases as needed
            }
        });
    }
}

// Create an instance of the Cli class and call the start method
const cli = new Cli();
cli.start(); // This is the correct way to call the start method


// inquirer.prompt(questions).then(async(answers) => {  
//     switch (answers.action) { 
// //         // case 'View all employees':
// // //         // Add your logic here
// // //         break;
// // //       case 'Add Employee':
// // //         // Add your logic here
// // //         break;
// // //       case 'Update Employee Role':
// // //         // Add your logic here
// // //         break;
// // //       case 'View all roles':
// // //         // Add your logic here
// // //         break;
// // //       case 'Add Role':
// // //         // Add your logic here
// // //         break;
//       case 'View all departments':
//         viewAllDepartments();
//         break;
// // //       case 'Add Department':
// // //         // Add your logic here
// // //         break;
// // //       case 'Quit':
// // //         // Add your logic here
// // //         break;
//     }
//   });
// }
// }