USE FULL;

INSERT INTO customers (email, password, first_name, last_name, address, country, city, phone) VALUES
('sofia@example.com', 'sofia123', 'Sofia', 'Calderon', '123 Main St', 'Mexico', 'Michoacan', '4491234567'),
('paulina@example.com', 'paulina123', 'Paulina', 'Alvarez', '456 Elm St', 'Mexico', 'Zacatecas', '4492345678'),
('jeannelyn@example.com', 'jeannelyn123', 'Jeannelyn', 'Avila', '789 Maple St', 'Mexico', 'Aguascalientes', '4493456789');

INSERT INTO categories (name, description) VALUES
('Office', 'Tools for office work'),
('School', 'School supplies'),
('Art', 'Materials for artists and creative work');

INSERT INTO products (name, description, price, stock) VALUES
('Notebook', 'Ruled notebook', 30, 150),
('Pencil', 'Number 22 pencil', 5, 300),
('Eraser', 'Crumb gum', 7, 250),
('Acrylic Paint Set', 'Set of 12 acrylic paints', 600, 100),
('Sketchbook', 'Hardcover sketchbook', 200, 75);

INSERT INTO orders (id_customer, amount, shipping_address, order_date, order_status) VALUES
(1, 35, '123 Main St, Michoacan, Mexico', '2024-07-01', 'Shipped'),
(2, 12, '456 Elm St, Zacatecas, Mexico', '2024-07-02', 'Shipped'),
(3, 607, '789 Maple St, Aguascalientes, Mexico', '2024-07-03', 'Shipped');

INSERT INTO product_categories (id_product, id_category) VALUES
(1, 1), 
(1, 2),  
(2, 1),  
(2, 2), 
(3, 1),  
(3, 2),  
(4, 3),  
(5, 3);  


INSERT INTO order_details (id_order, id_product, price, quantity) VALUES
(1, 4, 15.99, 1),  
(1, 5, 10.99, 1), 
(2, 2, 0.49, 4),  
(2, 3, 0.29, 2),   
(3, 1, 2.49, 5),   
(3, 3, 0.29, 10);  