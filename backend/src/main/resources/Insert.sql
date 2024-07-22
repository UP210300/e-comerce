USE ECOMMERCE;

INSERT INTO users (username, email, password, first_name, last_name, role) VALUES
('sofia_calderon', 'sofia@example.com', 'sofia123', 'Sofia', 'Calderon', 'customer'),
('paulina_alvarez', 'paulina@example.com', 'paulina123', 'Paulina', 'Alvarez', 'customer'),
('jeannelyn_avila', 'jeannelyn@example.com', 'jeannelyn123', 'Jeannelyn', 'Avila', 'customer');


INSERT INTO customers (id_user, address, country, city, phone) VALUES
(1, '123 Calle Principal', 'México', 'Michoacán', '4491234567'),
(2, '456 Calle Olmo', 'México', 'Zacatecas', '4492345678'),
(3, '789 Calle Arce', 'México', 'Aguascalientes', '4493456789');

INSERT INTO categories (name, description) VALUES
('Oficina', 'Herramientas para el trabajo de oficina'),
('Escuela', 'Útiles escolares'),
('Arte', 'Materiales para artistas y trabajos creativos');

INSERT INTO products (name, description, price, stock, id_category) VALUES   
('Cuaderno', 'Cuaderno rayado', 30, 150, 1),
('Lápiz', 'Lápiz número 2', 5, 300, 2),
('Goma', 'Goma de miga de pan', 7, 250, 3),
('Set de Pinturas Acrílicas', 'Set de 12 pinturas acrílicas', 600, 100, 3),
('Libro de Bocetos', 'Libro de bocetos de tapa dura', 200, 75, 2);


INSERT INTO orders (id_customer, amount, shipping_address, order_date, order_status) VALUES
(1, 35.00, '123 Calle Principal, Michoacán, México', '2024-07-01', 'Enviado'),
(2, 12.00, '456 Calle Olmo, Zacatecas, México', '2024-07-02', 'Enviado'),
(3, 607.00, '789 Calle Arce, Aguascalientes, México', '2024-07-03', 'Enviado');


INSERT INTO product_categories (id_product, id_category) VALUES
(6, 1), 
(7, 2),  
(8, 3),  
(9, 3), 
(10, 2)  


INSERT INTO order_details (id_order, id_product, price, quantity) VALUES
(1, 6, 30.00, 1),
(1, 7, 5.00, 1),   
(2, 7, 5.00, 2), 
(2, 8, 7.00, 1),   
(3, 9, 600.00, 1),
(3, 10, 200.00, 1);
