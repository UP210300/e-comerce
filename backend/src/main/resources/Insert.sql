USE ECOMMERCE;

-- Primero debemos insertar los usuarios correspondientes a los customers
INSERT INTO users (username, email, password, first_name, last_name, role) VALUES
('sofia_calderon', 'sofia@example.com', 'sofia123', 'Sofia', 'Calderon', 'customer'),
('paulina_alvarez', 'paulina@example.com', 'paulina123', 'Paulina', 'Alvarez', 'customer'),
('jeannelyn_avila', 'jeannelyn@example.com', 'jeannelyn123', 'Jeannelyn', 'Avila', 'customer');

-- Luego insertamos los customers con la referencia a los usuarios recién creados
INSERT INTO customers (id_user, address, country, city, phone) VALUES
(1, '123 Calle Principal', 'México', 'Michoacán', '4491234567'),
(2, '456 Calle Olmo', 'México', 'Zacatecas', '4492345678'),
(3, '789 Calle Arce', 'México', 'Aguascalientes', '4493456789');

-- Insertamos las categorías
INSERT INTO categories (name, description) VALUES
('Oficina', 'Herramientas para el trabajo de oficina'),
('Escuela', 'Útiles escolares'),
('Arte', 'Materiales para artistas y trabajos creativos');

-- Insertamos los productos
INSERT INTO products (name, description, price, stock) VALUES   
('Cuaderno', 'Cuaderno rayado', 30, 150),
('Lápiz', 'Lápiz número 2', 5, 300),
('Goma', 'Goma de miga de pan', 7, 250),
('Set de Pinturas Acrílicas', 'Set de 12 pinturas acrílicas', 600, 100),
('Libro de Bocetos', 'Libro de bocetos de tapa dura', 200, 75);

-- Insertamos las órdenes
INSERT INTO orders (id_customer, amount, shipping_address, order_date, order_status) VALUES
(1, 35.00, '123 Calle Principal, Michoacán, México', '2024-07-01', 'Enviado'),
(2, 12.00, '456 Calle Olmo, Zacatecas, México', '2024-07-02', 'Enviado'),
(3, 607.00, '789 Calle Arce, Aguascalientes, México', '2024-07-03', 'Enviado');

-- Asignamos los productos a las categorías correspondientes
INSERT INTO product_categories (id_product, id_category) VALUES
(1, 1), 
(1, 2),  
(2, 1),  
(2, 2), 
(3, 1),  
(3, 2),  
(4, 3),  
(5, 3);  

-- Insertamos los detalles de las órdenes
INSERT INTO order_details (id_order, id_product, price, quantity) VALUES
(1, 1, 30.00, 1),  -- Cuaderno en orden 1
(1, 2, 5.00, 1),   -- Lápiz en orden 1
(2, 2, 5.00, 2),   -- Lápiz en orden 2
(2, 3, 7.00, 1),   -- Goma en orden 2
(3, 4, 600.00, 1), -- Set de Pinturas Acrílicas en orden 3
(3, 5, 200.00, 1); -- Libro de Bocetos en orden 3
