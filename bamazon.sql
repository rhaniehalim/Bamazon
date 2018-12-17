DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('pencil', 'stationary', 0.50, 200),
	   ('mechanical pencil', 'stationary', 1.50, 200),
	   ('eraser', 'stationary', 2.00, 250),
	   ('ballpoint pen', 'stationary', 2.00, 250),
	   ('gel pen', 'stationary', 3.00, 250),
	   ('notebook', 'stationary', 5.00, 300),
	   ('folder', 'stationary', 6.50, 300),
	   ('chocolate bar', 'food', 1.00, 200),
	   ('snacks', 'food', 1.50, 200),
	   ('ramen', 'food', 2.00, 200),
	   ('salad', 'food', 6.50, 100),
	   ('burrito', 'food', 8.50, 150),
	   ('water bottle', 'drinks', 1.00, 1000),
	   ('gatorade', 'drinks', 1.50, 300),
	   ('fruit juice', 'drinks', 2.50, 500),
	   ('smoothies', 'drinks', 5.00, 50);