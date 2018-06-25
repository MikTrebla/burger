CREATE DATABASE burgers_db;
USER burgers_db;

CREATE TABLE burgers (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN  DEFAULT 0
);