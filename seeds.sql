INSERT INTO department(name) VALUES 
('human resources'), 
('sales'),
('IT');

INSERT INTO role(title, salary, department_id) VALUES 
('HR director', 80000, 1), 
('salesperson', 70000, 2),
('technician', 90000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES 
('John', 'Smith', 1, null), 
('Sally', 'Adams', 2, 1),
('Ingrid', 'Carlson', 3, null);

