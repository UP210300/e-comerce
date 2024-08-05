CREATE DATABASE IF NOT EXISTS ECOMMERCE;
USE ECOMMERCE;

CREATE TABLE users (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE categories (
    id_category INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE products (
    id_product INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    id_category INT, 
    FOREIGN KEY (id_category) REFERENCES categories(id_category) 
);

CREATE TABLE product_images (
    id_image INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    id_product INT NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id_product)
);

CREATE TABLE customers (
    id_customer INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT,
    address VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id_user) ON DELETE SET NULL
);

CREATE TABLE orders (
    id_order INT AUTO_INCREMENT PRIMARY KEY,
    id_customer INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    shipping_address VARCHAR(255) NOT NULL,
    order_date DATE NOT NULL,
    order_status VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_customer) REFERENCES customers(id_customer) ON DELETE CASCADE
);

CREATE TABLE order_details (
    id_order INT,
    id_product INT,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (id_order, id_product),
    FOREIGN KEY (id_order) REFERENCES orders(id_order) ON DELETE CASCADE,
    FOREIGN KEY (id_product) REFERENCES products(id_product) ON DELETE CASCADE
);


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
(4, '320 Calle Fuente de los Cibeles', 'México', 'Aguascalientes', '4493667185');

INSERT INTO categories (name, description) VALUES
('Oficina', 'Herramientas para el trabajo de oficina'),
('Escuela', 'Útiles escolares'),
('Arte', 'Materiales para artistas y trabajos creativos');

INSERT INTO products (name, description, price, stock, id_category) VALUES
('Cuaderno', 'Cuaderno rayado', 30, 150, 2),
('Lápiz', 'Lápiz número 2', 5, 300, 2),
('Goma', 'Goma de miga de pan', 7, 250, 2),
('Set de Pinturas Acrílicas', 'Set de 12 pinturas acrílicas', 600, 100, 3),
('Libro de Bocetos', 'Libro de bocetos de tapa dura', 200, 75, 3),  
('Post-it', 'Notas adhesivas de colores', 25, 300, 1),
('Tinta para Impresora', 'Cartucho de tinta negra para impresora', 120, 80, 1),
('Cinta Adhesiva', 'Cinta adhesiva transparente de 1.5 cm x 50 m', 15, 250, 1),
('Proyector Portátil', 'Proyector portátil para presentaciones', 1200, 20, 3),
('Organizador de Escritorio', 'Organizador de escritorio en acrílico', 100, 150, 3),
('Calculadora Básica', 'Calculadora básica con funciones estándar', 50, 100, 2),
('Papel Fotográfico', 'Papel fotográfico brillante para impresoras', 200, 60, 1),
('Cúter', 'Cúter con hoja retráctil', 30, 90, 3),
('Grapas para Grapadora', 'Paquete de 1000 grapas para grapadora', 20, 300, 1),
('Estuche para Lápices', 'Estuche para lápices en lona', 25, 120, 2),
('Papel de Lija', 'Papel de lija de grano fino', 40, 75, 3),
('Bolígrafo de Gel', 'Bolígrafo de gel con tinta azul', 12, 180, 2),
('Marcador de Pizarra', 'Marcador para pizarra blanca', 18, 200, 2),
('Pegamento en Barra', 'Pegamento en barra de 40 g', 10, 220, 2),
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
('assets/libretaBocetos-3.jpeg', 5),

('assets/postIt-1.jpg', 6),
('assets/postIt-2.jpg', 6),
('assets/postIt-3.jpg', 6),

('assets/tintaParaImpresora-1.jpg', 7),
('assets/tintaParaImpresora-2.jpg', 7),
('assets/tintaParaImpresora-3.jpg', 7),

('assets/cintaAdhesiva-1.jpg', 8),
('assets/cintaAdhesiva-2.jpg', 8),
('assets/cintaAdhesiva-3.jpg', 8),

('assets/proyectorPortatil-1.jpg', 9),
('assets/proyectorPortatil-2.jpg', 9),
('assets/proyectorPortatil-3.jpg', 9),

('assets/organizadorDeEscritorio-1.jpg', 10),
('assets/organizadorDeEscritorio-2.jpg', 10),
('assets/organizadorDeEscritorio-3.jpg', 10),

('assets/calculadoraBasica-1.jpg', 11),
('assets/calculadoraBasica-2.jpg', 11),
('assets/calculadoraBasica-3.jpg', 11),

('assets/papelFotografico-1.jpg', 12),
('assets/papelFotografico-2.jpg', 12),
('assets/papelFotografico-3.jpg', 12),

('assets/cuter-1.jpg', 13),
('assets/cuter-2.jpg', 13),
('assets/cuter-3.jpg', 13),

('assets/grapasParaGrapadora-1.jpg', 14),
('assets/grapasParaGrapadora-2.jpg', 14),
('assets/grapasParaGrapadora-3.jpg', 14),

('assets/estucheParaLapices-1.jpg', 15),
('assets/estucheParaLapices-2.jpg', 15),
('assets/estucheParaLapices-3.jpg', 15),

('assets/papelDeLija-1.jpg', 16),
('assets/papelDeLija-2.jpg', 16),
('assets/papelDeLija-3.jpg', 16),

('assets/boligrafoDeGel-1.jpg', 17),
('assets/boligrafoDeGel-2.jpg', 17),
('assets/boligrafoDeGel-3.jpg', 17),

('assets/marcadorDePizarra-1.jpg', 18),
('assets/marcadorDePizarra-2.jpg', 18),
('assets/marcadorDePizarra-3.jpg', 18),

('assets/pegamentoEnBarra-1.jpg', 19),
('assets/pegamentoEnBarra-2.jpg', 19),
('assets/pegamentoEnBarra-3.jpg', 19),

('assets/tarjetaDeFelicitacion-1.jpg', 20),
('assets/tarjetaDeFelicitacion-2.jpg', 20),
('assets/tarjetaDeFelicitacion-3.jpg', 20);













