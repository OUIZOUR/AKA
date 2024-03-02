--CREATE TABLE nom_table (id SERIAL PRIMARY KEY,     title VARCHAR(50),     description VARCHAR(255));
INSERT INTO TODO ( title, description, creation_date, deadline) VALUES('Ménage','je dois faire le ménage chez moi',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO TODO ( title, description, creation_date, deadline) VALUES('Projet git','je dois un projet git',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
INSERT INTO TODO ( title, description, creation_date, deadline) VALUES('Cuisine','je dois préparer le diner',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);