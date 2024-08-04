CREATE DATABASE IF NOT EXISTS ecommerce;

CREATE USER 'soporte'@'localhost' IDENTIFIED BY 'soporte';

GRANT ALL PRIVILEGES ON ecommerce.* TO 'soporte'@'localhost' identified by 'soporte';

FLUSH PRIVILEGES;
