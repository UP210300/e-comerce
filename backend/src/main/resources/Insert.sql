USE ECOMMERCE;

INSERT INTO users (username, email, password, first_name, last_name, role) VALUES
('soporte', 'soporte@gmail.com', 'soporte', 'soporte', 'tecnico', 'admin'),
('sofia_calderon', 'sofia@example.com', 'sofia123', 'Sofia', 'Calderon', 'customer'),
('paulina_alvarez', 'paulina@example.com', 'paulina123', 'Paulina', 'Alvarez', 'customer'),
('jeannelyn_avila', 'jeannelyn@example.com', 'jeannelyn123', 'Jeannelyn', 'Avila', 'customer');


INSERT INTO customers (id_user, address, country, city, phone) VALUES
(1, '123 Calle Principal', 'México', 'Michoacán', '4491234567'),
(2, '456 Calle Olmo', 'México', 'Zacatecas', '4492345678'),
(3, '789 Calle Arce', 'México', 'Aguascalientes', '4493456789'),
(7, '320 Calle Fuente de los Cibeles', 'México', 'Aguascalientes', '4493667185');

INSERT INTO categories (name, description) VALUES
('Oficina', 'Herramientas para el trabajo de oficina'),
('Escuela', 'Útiles escolares'),
('Arte', 'Materiales para artistas y trabajos creativos');

INSERT INTO products (name, description, price, stock, id_category) VALUES
('Cuaderno', 'Cuaderno rayado', 30, 150, 1),
('Lápiz', 'Lápiz número 2', 5, 300, 2),
('Goma', 'Goma de miga de pan', 7, 250, 3),
('Set de Pinturas Acrílicas', 'Set de 12 pinturas acrílicas', 600, 100, 3),
('Libro de Bocetos', 'Libro de bocetos de tapa dura', 200, 75, 2),  
('Post-it', 'Notas adhesivas de colores', 25, 300, 1),
('Tinta para Impresora', 'Cartucho de tinta negra para impresora', 120, 80, 1),
('Cinta Adhesiva', 'Cinta adhesiva transparente de 1.5 cm x 50 m', 15, 250, 3),
('Proyector Portátil', 'Proyector portátil para presentaciones', 1200, 20, 3),
('Organizador de Escritorio', 'Organizador de escritorio en acrílico', 100, 150, 3),
('Calculadora Básica', 'Calculadora básica con funciones estándar', 50, 100, 2),
('Papel Fotográfico', 'Papel fotográfico brillante para impresoras', 200, 60, 1),
('Cúter', 'Cúter con hoja retráctil', 30, 90, 3),
('Grapas para Grapadora', 'Paquete de 1000 grapas para grapadora', 20, 300, 3),
('Estuche para Lápices', 'Estuche para lápices en lona', 25, 120, 2),
('Papel de Lija', 'Papel de lija de grano fino', 40, 75, 3),
('Bolígrafo de Gel', 'Bolígrafo de gel con tinta azul', 12, 180, 2),
('Marcador de Pizarra', 'Marcador para pizarra blanca', 18, 200, 2),
('Pegamento en Barra', 'Pegamento en barra de 40 g', 10, 220, 3),
('Tarjeta de Felicitación', 'Tarjeta de felicitación con sobre', 5, 150, 1);


INSERT INTO orders (id_customer, amount, shipping_address, order_date, order_status) VALUES
(1, 100.00, '123 Calle Principal, Michoacán, México', '2024-07-05', 'Pendiente'),
(2, 45.50, '456 Calle Olmo, Zacatecas, México', '2024-07-06', 'Enviado'),
(3, 320.00, '789 Calle Arce, Aguascalientes, México', '2024-07-07', 'Cancelado'),
(1, 250.00, '123 Calle Principal, Michoacán, México', '2024-07-08', 'Entregado'),
(2, 150.00, '456 Calle Olmo, Zacatecas, México', '2024-07-09', 'Pendiente'),
(3, 75.00, '789 Calle Arce, Aguascalientes, México', '2024-07-10', 'Enviado'),
(1, 60.00, '123 Calle Principal, Michoacán, México', '2024-07-11', 'Entregado'),
(2, 89.99, '456 Calle Olmo, Zacatecas, México', '2024-07-12', 'Enviado'),
(3, 210.75, '789 Calle Arce, Aguascalientes, México', '2024-07-13', 'Pendiente'),
(1, 35.50, '123 Calle Principal, Michoacán, México', '2024-07-14', 'Cancelado'),
(2, 78.20, '456 Calle Olmo, Zacatecas, México', '2024-07-15', 'Enviado'),
(3, 415.30, '789 Calle Arce, Aguascalientes, México', '2024-07-16', 'Entregado'),
(1, 90.00, '123 Calle Principal, Michoacán, México', '2024-07-17', 'Enviado'),
(2, 120.00, '456 Calle Olmo, Zacatecas, México', '2024-07-18', 'Pendiente'),
(3, 300.50, '789 Calle Arce, Aguascalientes, México', '2024-07-19', 'Entregado');

INSERT INTO order_details (id_order, id_product, price, quantity) VALUES
(1, 1, 30.00, 1),
(1, 2, 5.00, 1),   
(2, 2, 5.00, 2), 
(2, 3, 7.00, 1),   
(3, 4, 600.00, 1),
(3, 5, 200.00, 1),
(4, 1, 30.00, 3),
(4, 9, 25.00, 1),
(5, 5, 200.00, 4),
(5, 1, 30.00, 1),
(6, 9, 25.00, 5),
(6, 10, 120.00, 1),
(7, 11, 15.00, 1),
(8, 12, 1200.00, 1),
(9, 13, 100.00, 1),
(10, 14, 50.00, 1),
(11, 15, 200.00, 3),
(12, 4, 600.00, 1),
(13, 3, 7.00, 10),
(14, 2, 5.00, 10),
(15, 1, 30.00, 3);

INSERT INTO product_images (image_url, id_product) VALUES
('assets/cuaderno-1.jpg', 1),
('assets/cuaderno-2.jpg', 1),
('assets/cuaderno-3.jpg', 1),

('assets/lapiz-1.jpg', 2),
('assets/lapiz-2.png', 2),
('assets/lapiz-3.jpeg', 2),

('assets/goma-1.jpg', 3),
('assets/goma-2.jpg', 3),
('assets/goma-3.jpg', 3),

('assets/pintura-1.jpg', 4),
('assets/pintura-2.jpg', 4),
('assets/pintura-3.jpg', 4),

('assets/libretaBocetos-1.jpeg', 5),
('assets/libretaBocetos-2.jpeg', 5),
('assets/libretaBocetos-3.jpeg', 5);


