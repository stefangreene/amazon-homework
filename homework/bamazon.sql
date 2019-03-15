DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NULL,
    stock INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Nike Air Jordan BasketBall Shoe", "Athletic Shoe", 175.00, 8);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Puma Track Shoe", "Athletic Shoe", 65.00, 12);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Addidas Soccer Cleat", "Athletic Shoe", 135.00, 12);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Allen Iverson BasketBall Shoe", "Athletic Shoe", 160.00, 12);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Nike Sandals", "Casual Footwear", 45.00, 14);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Addidas Sandals", "Casual Footwear", 30.00, 9);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("The North Face Slippers", "Casual Footwear", 60.00, 12);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Arcteryc Down Jacket", "Outdoor Jacket", 350.00, 8);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("Mammut Expedition Shell", "Outdoor Jacket", 425.00, 3);

INSERT INTO products (product_name, department_name, price, stock)
VALUES ("The North Face Down Vest", "Outdoor Jacket", 180.00, 6);