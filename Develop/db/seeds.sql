INSERT INTO department (department_name)
VALUES ('Sales'),
       ('Legal'),
       ('Engineering'),
       ('Finance');

INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Person', 100000, 1),
       ('Lawyer', 200000, 2),
       ('Software Engineer', 300000, 3),
       ('Accountant', 400000, 4);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES ('John', 'Doe', 1, NULL),  -- Sales Person, no manager
       ('Harvey', 'Specter', 2, NULL),  -- Lawyer, no manager
       ('Aaron', 'Brown', 3, 1),  -- Engineer, reports to John
       ('Jane', 'Doe', 4, 2);  -- Accountant, reports to Harvey
