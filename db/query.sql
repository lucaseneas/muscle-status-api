

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at VARCHAR(50) NOT NULL
);

INSERT INTO users (name, email, password, created_at)
VALUES 
('João Silva', 'joao.silva@example.com', 'hashedpassword', '2023-06-01 10:00:00'),
('Maria Souza', 'maria.souza@example.com', 'anotherhashedpassword', '2023-06-15 14:30:00');