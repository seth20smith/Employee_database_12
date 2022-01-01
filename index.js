const mysql = require('mysql2')
const inquirer = require('inquirer')
// const consoleTable = require('console.table')
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '',
        database: 'employees'
    },
    console.log('Connected to the election database.')
);
function again(){
    inquirer.prompt({

        message: 'Anything else?',

        name: 'boolean',
        type: 'list',
        choices: ['Yes', 'No']
    }).then(more => {

        if (more.boolean == 'Yes') {
            Questions()
        } else process.exit()
    })
}
function Questions() {
    inquirer.prompt([
        {
            message: 'What would you like to do?',
            name: 'role',
            type: 'list',
            choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
        },
        
    ]).then( // VIEW DEPARTMENTS
        option => {
            if (option.role == "view all departments") {
                db.query(`SELECT * FROM department`, (err, rows) => {
                    console.table(rows);
                })
                again()
            } //VIEW ROLES
            if (option.role == "view all roles") {
                db.query(`SELECT * FROM role`, (err, rows) => {
                    console.log(rows);
                })
                again()
            } // VIEW EMPLOYEES
            if (option.role == "view all employees") {
                db.query(`SELECT * FROM employee`, (err, rows) => {
                    console.log(rows);
                })
                again()


            } // ADD TO DEPARTMENT
            if (option.role == "add a department") {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'departmentData',
                        message: "What is that name of your department?",
                    },

                ]).then(departmentInfo => {
                    db.query(`INSERT INTO department (name) VALUES ('${departmentInfo.departmentData}');`, (err, rows) => {
                    })
again()
                })

            
            }
            
            // ADD ROLE
            if (option.role == "add a role") {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'roleTitle',
                        message: "What is that name of your department?",
                    },
                    {
                        type: 'input',
                        name: 'roleSalary',
                        message: "What is this roles salary?",
                    },
                    {
                        type: 'input',
                        name: 'roleDepartmentId',
                        message: "What is the Department ID?",
                    },
                ]).then(roleInfo => {
                    db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${roleInfo.roleTitle}','${roleInfo.roleSalary}','${roleInfo.roleDepartmentId}');`, (err, rows) => {
                    })
                    again()
                })
           
            }
            
            if (option.role == "add an employee") {
                // add employee
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'employeeFirstName',
                        message: "What is the first name of the employee you want to add?",
                    },
                    {
                        type: 'input',
                        name: 'employeeLastName',
                        message: "What is the last name of the employee you want to add?",
                    },
                    {
                        type: 'input',
                        name: 'employeeIdRole',
                        message: "What is the ID role of the employee you want to add?",
                    },
                    {
                        type: 'input',
                        name: 'employeeManagerID',
                        message: "What is their Manager ID?",
                    },
                    
                    // ADD EMPLOYEE
                ]).then(employeeInfo => {
                    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${employeeInfo.employeeFirstName}' , '${employeeInfo.employeeLastName}', '${employeeInfo.employeeIdRole}', '${employeeInfo.employeeManagerID}');`, (err, rows) => {

                    })
                    again() // ('John', 'Doe', 1, NULL)
                })
                
            }
           
            if (option.role == "update an employee role") {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'employeeUpdate',
                        message: "What is the ID of the employee you would like to update?",
                    },
                    {
                        type: 'input',
                        name: 'employeeNewIdRole',
                        message: "What is the new ID role of the employee you want to update?",
                    },
                    
                ]) .then (employeeUpdates => {
                    db.query( `UPDATE employee SET role_id=${employeeUpdates.employeeNewIdRole} WHERE id=${employeeUpdates.employeeUpdate};`, (err, rows) => {
    
                })
                again()
            })
        
        }


        })

}

Questions()

// inquirer.prompt({

//     message: 'Anything else?',
//     name: 'boolean',
//     type: 'list',
//     choices: ['Yes', 'No']
// }).then(again => {

//     if (again.boolean == 'Yes') {
//         Questions()
//     } else END()
// })

// view all roles
// job title, role id, the department that role belongs to, and the salary for that role

// view all employees
// table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// add a department
// name of the department and that department is added to the database

// add a role
// enter the name, salary, and department for the role and that role is added to the database

// add an employee
// nter the employee’s first name, last name, role, and manager, and that employee is added to the database

// update an employee role
// select an employee to update and their new role and this information is updated in the database

// opening question



 // if (option.role == "update an employee role") {


//     // add employee
// inquirer.prompt([
// {
//     type: 'input',
//     name: 'employeeFirstName',
//     message: "What is the first name of the employee you want to add?",
// },
// {
//     type: 'input',
//     name: 'employeeLastName',
//     message: "What is the last name of the employee you want to add?",
// },
// {
//     type: 'input',
//     name: 'employeeIdRole',
//     message: "What is the ID role of the employee you want to add?",
// },












// inquirer.prompt({

//     message: 'Anything else?',
//     name: 'boolean',
//     type: 'list',
//     choices: ['Yes', 'No']
// }).then(again => {

//     if (again.boolean == 'Yes') {
//         Questions()
//     } else END()
// })



        // "View all Departments", "View all Roles", 
        // "View All Employees", "View all Employees by Department", 
        // "View all Managers", "View Budget of each Department", 
        // "Add a Department", "Add a Role', "Add Employee", 
        // "Update an Employee Role", "Update an Employee Manager", 
        // "Delete a Department", "Delete a Role", 
        // "Delete an employee", Quit
