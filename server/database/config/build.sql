BEGIN;
DROP TABLE IF EXISTS city CASCADE; 
CREATE TABLE city (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
 city_name VARCHAR(255) NOT NULL
);
INSERT INTO city (name, city_name) VALUES ('fadi', 'gaza'), ('hozifa', 'Dubai');
COMMIT;