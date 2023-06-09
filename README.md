**Employee database**
sql employee manager


<!-- npm install jest ?? -->

WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database



view all roles
job title, role id, the department that role belongs to, and the salary for that role

view all employees
table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

add a department
name of the department and that department is added to the database

add a role
enter the name, salary, and department for the role and that role is added to the database

add an employee
nter the employee’s first name, last name, role, and manager, and that employee is added to the database

update an employee role
select an employee to update and their new role and this information is updated in the database


![BackendEmployee](https://github.com/seth20smith/Employee_database_12/assets/91171134/3b1a06cf-9aae-46e8-98b5-684f80ae7683)




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
                db.query( `UPDATE employee SET role_id='${employeeUpdates.employeeNewIdRole} WHERE id=${employeeUpdates.employeeUpdate} ;`, (err, rows) => {

            })
        })
    }
