-- mysql/init.sql
CREATE DATABASE IF NOT EXISTS gestion_formations;
USE gestion_formations;

-- Créez vos tables ici (users, formations, sessions, user_formations)
-- Par exemple :
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE
);

-- Ajoutez les autres tables...

-- Insérez des données initiales si nécessaire
INSERT INTO users (username, password, is_admin) VALUES ('admin', '$2b$10$...', TRUE);