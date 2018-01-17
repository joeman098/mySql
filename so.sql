
CREATE TABLE products (
  item_id INT(10)  auto_incrament NOT NULL ,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(128) NOT NULL,
  price decimal(10,3) not null,
  stock_quantity int(10) no null
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('laptop', 'electronics', 1000 , 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('phone', 'electronics', 2000 , 9);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('tv', 'electronics', 7000 , 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('xbox', 'electronics', 400 , 40);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('mug', 'home', 10 , 42);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('rug', 'home', 120 , 41);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('teapot', 'home', 20 , 422);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('nickelback cd', 'music', 1000 , 422);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('toliet', 'home', 1000 , 211);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('bean bag', 'home', 200 , 42);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('koolaid', 'home', 200 , 24);









