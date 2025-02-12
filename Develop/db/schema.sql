DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

\c employees_db;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY, 
    title VARCHAR(255) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT, 
    FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE SET NULL
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY, 
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    roles_id INT, 
    manager_id INT, -- Self-referencing column to indicate the employee's manager
    FOREIGN KEY (roles_id)
        REFERENCES roles(id)
        ON DELETE SET NULL,
    FOREIGN KEY (manager_id) -- References another employee as a manager
        REFERENCES employee(id)
        ON DELETE SET NULL
);
