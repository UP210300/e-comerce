USE ECOMMERCE;

-- Insertar usuarios
INSERT INTO users (username, email, password, first_name, last_name, role) VALUES
('sofia_calderon', 'sofia@example.com', 'sofia123', 'Sofia', 'Calderon', 'customer'),
('paulina_alvarez', 'paulina@example.com', 'paulina123', 'Paulina', 'Alvarez', 'customer'),
('jeannelyn_avila', 'jeannelyn@example.com', 'jeannelyn123', 'Jeannelyn', 'Avila', 'customer');

-- Insertar clientes
INSERT INTO customers (id_user, address, country, city, phone) VALUES
(1, '123 Calle Principal', 'México', 'Michoacán', '4491234567'),
(2, '456 Calle Olmo', 'México', 'Zacatecas', '4492345678'),
(3, '789 Calle Arce', 'México', 'Aguascalientes', '4493456789');

-- Insertar categorías
INSERT INTO categories (name, description) VALUES
('Oficina', 'Herramientas para el trabajo de oficina'),
('Escuela', 'Útiles escolares'),
('Arte', 'Materiales para artistas y trabajos creativos');

-- Insertar productos
INSERT INTO products (name, description, price, stock) VALUES   
('Cuaderno', 'Cuaderno rayado', 30.00, 150),
('Lápiz', 'Lápiz número 2', 5.00, 300),
('Goma', 'Goma de miga de pan', 7.00, 250),
('Set de Pinturas Acrílicas', 'Set de 12 pinturas acrílicas', 600.00, 100),
('Libro de Bocetos', 'Libro de bocetos de tapa dura', 200.00, 75);

-- Insertar órdenes
INSERT INTO orders (id_customer, amount, shipping_address, order_date, order_status) VALUES
(1, 35.00, '123 Calle Principal, Michoacán, México', '2024-07-01', 'Enviado'),
(2, 12.00, '456 Calle Olmo, Zacatecas, México', '2024-07-02', 'Enviado'),
(3, 607.00, '789 Calle Arce, Aguascalientes, México', '2024-07-03', 'Enviado');

-- Asignar productos a categorías
INSERT INTO product_categories (id_product, id_category) VALUES
(1, 1),  -- Cuaderno en Oficina
(1, 2),  -- Cuaderno en Escuela
(2, 1),  -- Lápiz en Oficina
(2, 2),  -- Lápiz en Escuela
(3, 1),  -- Goma en Oficina
(3, 2),  -- Goma en Escuela
(4, 3),  -- Set de Pinturas Acrílicas en Arte
(5, 3);  -- Libro de Bocetos en Arte

-- Insertar detalles de órdenes
INSERT INTO order_details (id_order, id_product, price, quantity) VALUES
(1, 1, 30.00, 1),  -- Cuaderno en orden 1
(1, 2, 5.00, 1),   -- Lápiz en orden 1
(2, 2, 5.00, 2),   -- Lápiz en orden 2
(2, 3, 7.00, 1),   -- Goma en orden 2
(3, 4, 600.00, 1), -- Set de Pinturas Acrílicas en orden 3
(3, 5, 200.00, 1); -- Libro de Bocetos en orden 3
