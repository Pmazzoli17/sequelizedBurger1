-- CREATE DATABASE burgers_db;
CREATE DATABASE burgers3_db;

USE burgers3_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP not null default CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

-- SELECT * FROM burgers_db.burgers;
SELECT * FROM burgers3_db.burgers;