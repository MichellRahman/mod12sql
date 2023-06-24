// get the client
const mysql = require('mysql2');
const dotenv = require('dotenv');
const inquirer = require('inquirer');
const ctable = require('console.table');

dotenv.config()
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PW
});
// ask user "what do you want to do?"
// based on answer, go to next step
// write functions for next steps
const init = () => {
  const questions = [
    {
      type: 'list',
      name: 'choice',
      message: 'Choose an option',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add department', 'add role', 'add employee', 'update employee role', 'Finish']
    }
  ]
  inquirer.prompt(questions).then((answers) => {
    if (answers.choice === 'view all departments') {
      //call funtion for view departments
      viewDepartments()
    } else if (answers.choice === 'view all roles') {
      // call function view roles
      viewRoles()
    } else if (answers.choice === 'view all employees') {
      // call function view all employees
      viewEmployees()
    } else if (answers.choice === 'add department') {
      // call function add department
      addDepartment()
    } else if (answers.choice === 'add role') {
      // call function add role
    } else if (answers.choice === 'add employee') {
      // call function add employee
    } else if (answers.choice === 'update employee role') {
      // call function update employee role
    } else {
      // end program
    }
  })
  // console.log('line 30 after prompt');
}

const viewDepartments = async () => {
  try {


    const queryString = 'select * from department;'
    const rows = await connection.promise().query(queryString)
    console.table(rows[0]);
    init()
  } catch (error) {
    console.error(error);
  }
}

const viewRoles = async () => {
  try {
    const queryString = `select role.id,role.title,role.salary,department.name as department 
    from role 
    join department on role.department_id = department.id;`
    const rows = await connection.promise().query(queryString)
    console.table(rows[0]);
    init()
  } catch (error) {
    console.error(error);
  }
}

const viewEmployees = async () => {
  try {
    const queryString = `select employee.id, employee.first_name, employee.last_name, role.title as role, role.salary, department.name as department 
    from employee 
    join role on employee.role_id = role.id
    join department on role.department_id = department.id;`
    const rows = await connection.promise().query(queryString)
    console.table(rows[0]);
    init()
  } catch (error) {
    console.error(error);
  }
} 

const addDepartment = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'dep_name',
        message: 'What is the name of this department?'
      }
    ])
    console.log(answers);
    const queryString = `INSERT INTO department (name) values ('${answers.dep_name}');`
    const rows = await connection.promise().query(queryString)
    init()
  } catch (error) {
    console.error(error);
  }
} 
// simple query
init()