DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

CREATE TABLE department (
    id int auto_increment not null,
    name VARCHAR(30) not null,
    primary key (id)
);

CREATE TABLE role (
    id int auto_increment not null,
    title VARCHAR(30) not null,
    salary DECIMAL not null,
    department_id INT not null,
    primary key (id),
    foreign key (department_id) references department (id)
);
CREATE TABLE employee (
    id int auto_increment not null,
    first_name VARCHAR(30) not null,
    last_name VARCHAR(30) not null,
    role_id INT not null,
    manager_id INT,
    primary key (id),
    foreign key (role_id) references role (id),
    foreign key (manager_id) references employee (id)
);