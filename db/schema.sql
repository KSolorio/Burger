DROP DATABASE IF EXISTS burgers_db;
CREATE burgers_db;
USE burger_db;

CREATE TABLE burgers(
id INTEGER(12) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN,

PRIMARY KEY(id)
);