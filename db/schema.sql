DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL
);

CREATE TABLE role (
id SERIAL PRIMARY KEY, 
title VARCHAR(255),
salary DECIMAL,
FOREIGN KEY (department_id)
REFERENCES department(id)
ON DELETE SET NULL 
);

CREATE TABLE employee (
id SERIAL PRIMARY KEY, 
first_name VARCHAR(255),
last_name VARCHAR(255),
FOREIGN KEY (role_id)
REFERENCES role(id)
ON DELETE SET NULL

manager_id id given when manager is selected for role
);