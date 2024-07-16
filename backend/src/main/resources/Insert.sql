USE ECOMMERCE;

INSERT INTO customers (email, password, first_name, last_name, address, country, city, phone) VALUES
('sofia@example.com', 'sofia123', 'Sofia', 'Calderon', '123 Calle Principal', 'México', 'Michoacán', '4491234567'),
('paulina@example.com', 'paulina123', 'Paulina', 'Alvarez', '456 Calle Olmo', 'México', 'Zacatecas', '4492345678'),
('jeannelyn@example.com', 'jeannelyn123', 'Jeannelyn', 'Avila', '789 Calle Arce', 'México', 'Aguascalientes', '4493456789');

INSERT INTO categories (name, description) VALUES
('Oficina', 'Herramientas para el trabajo de oficina'),
('Escuela', 'Útiles escolares'),
('Arte', 'Materiales para artistas y trabajos creativos');

INSERT INTO products (name, description, price, stock) VALUES   
('Cuaderno', 'Cuaderno rayado', 30, 150),
('Lápiz', 'Lápiz número 22', 5, 300),
('Goma', 'Goma de miga de pan', 7, 250),
('Set de Pinturas Acrílicas', 'Set de 12 pinturas acrílicas', 600, 100),
('Libro de Bocetos', 'Libro de bocetos de tapa dura', 200, 75);

INSERT INTO orders (id_customer, amount, shipping_address, order_date, order_status) VALUES
(1, 35, '123 Calle Principal, Michoacán, México', '2024-07-01', 'Enviado'),
(2, 12, '456 Calle Olmo, Zacatecas, México', '2024-07-02', 'Enviado'),
(3, 607, '789 Calle Arce, Aguascalientes, México', '2024-07-03', 'Enviado');

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
