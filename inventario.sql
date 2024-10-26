CREATE DATABASE IF NOT EXISTS sistema_inventario;

USE sistema_inventario;

CREATE TABLE inventario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    categoria VARCHAR(100),
    precio DECIMAL(10, 2),
    cantidad INT,
    proveedor VARCHAR(100),
    fecha_ingreso DATE,
    codigo_barras VARCHAR(100)
);

CREATE TABLE trabajadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100),
    telefono VARCHAR(20),
    email VARCHAR(100),
    puesto VARCHAR(100),
    salario DECIMAL(10, 2),
    fecha_contratacion DATE
);

INSERT INTO inventario (nombre, descripcion, categoria, precio, cantidad, proveedor, fecha_ingreso, codigo_barras) 
VALUES 
('Arroz', 'Arroz blanco de alta calidad', 'Alimentos', 2.50, 100, 'Proveedor A', '2024-01-10', '123456789'),
('Detergente', 'Detergente líquido', 'Limpieza', 4.20, 50, 'Proveedor B', '2024-01-12', '234567890'),
('Aceite', 'Aceite de cocina', 'Alimentos', 5.00, 70, 'Proveedor C', '2024-01-15', '345678901'),
('Cloro', 'Cloro para limpieza', 'Limpieza', 3.50, 40, 'Proveedor D', '2024-01-18', '456789012'),
('Fideos', 'Fideos largos', 'Alimentos', 1.80, 200, 'Proveedor E', '2024-01-20', '567890123');

INSERT INTO trabajadores (nombre, apellido, telefono, email, puesto, salario, fecha_contratacion) 
VALUES 
('Juan', 'Pérez', '123456789', 'juan@mail.com', 'Cajero', 1200, '2023-05-15'),
('María', 'González', '987654321', 'maria@mail.com', 'Vendedora', 1100, '2023-06-10'),
('Carlos', 'Martínez', '234567890', 'carlos@mail.com', 'Almacenero', 1300, '2023-07-01'),
('Ana', 'López', '876543210', 'ana@mail.com', 'Vendedora', 1050, '2023-08-20'),
('Pedro', 'García', '345678901', 'pedro@mail.com', 'Supervisor', 1500, '2023-09-01');
