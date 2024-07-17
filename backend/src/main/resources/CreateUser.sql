CREATE DATABASE IF NOT EXISTS ecommerce;

-- drop user 'full'@'localhost';     sensible a Mayusculas
-- SET PASSWORD FOR  'full'@'localhost' = PASSWORD ('full')

CREATE USER 'soporte'@'localhost' IDENTIFIED BY 'soporte';

GRANT ALL PRIVILEGES ON ecommerce.* TO 'soporte'@'localhost' identified by 'soporte';

FLUSH PRIVILEGES;
