INSERT INTO department (id, department_name)
VALUES (1, 'Sales'),
       (2, 'Legal'),
       (3, 'Engineering'),
       (4, 'Finance');

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, 'Sales Person', 100000, 1),
       (2, 'Lawyer', 200000, 2),
       (3, 'Software Engineer', 300000, 3),
       (4, 'Accountant', 400000, 4);

INSERT INTO employee (id, first_name, last_name, roles_id, manager_id)
VALUES (1, 'John', 'Doe', 1, NULL),  -- Sales Person, no manager
       (2, 'Harvey', 'Specter', 2, NULL),  -- Lawyer, no manager
       (3, 'Aaron', 'Brown', 3, 1),  -- Engineer, reports to John
       (4, 'Jane', 'Doe', 4, 2);  -- Accountant, reports to Harvey
