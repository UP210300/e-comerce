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


CREATE TABLE product_categories (
    id_product INT,
    id_category INT,
    PRIMARY KEY (id_product, id_category),
    FOREIGN KEY (id_product) REFERENCES products(id_product) ON DELETE CASCADE,
    FOREIGN KEY (id_category) REFERENCES categories(id_category) ON DELETE CASCADE
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
