DROP DATABASE IF EXISTS optica;

CREATE DATABASE optica;

USE optica;

CREATE TABLE IF NOT EXISTS proveedor(
    id_proveedor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (20) NOT NULL,
    calle VARCHAR (20)  NOT NULL,
    numero INT(5) NOT NULL,
    piso VARCHAR (10) ,
    puerta VARCHAR (10) ,
    ciudad VARCHAR (20) NOT NULL,
    c_p INT (10) NOT NULL,
    pais VARCHAR (20) NOT NULL,
    telefono INT (15) NOT NULL,
    fax INT (15) NOT NULL,
    nif VARCHAR (15) NOT NULL
);

CREATE TABLE IF NOT EXISTS marcas(
    marca VARCHAR (20) PRIMARY KEY,
    proveedor INT (5) NOT NULL,
    FOREIGN KEY (proveedor) REFERENCES proveedor (id_proveedor)
);

CREATE TABLE IF NOT EXISTS gafas(
    id_articulo INT (10) PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR (20),
    graduacion_vidrio_D FLOAT(10) NOT NULL,
    graduacion_vidrio_I FLOAT (10) NOT NULL,
    tipo_de_montura VARCHAR (20) NOT NULL,
    color_vidrio VARCHAR (20) NOT NULL,
    precio INT (5) NOT NULL,
    proveedor INT (5) NOT NULL,
    FOREIGN KEY (marca) REFERENCES marcas (marca),
    FOREIGN KEY (proveedor) REFERENCES proveedor (id_proveedor)
);

CREATE TABLE IF NOT EXISTS cliente(
    id_cliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (20) NOT NULL,
    direccion VARCHAR (30) NOT NULL,
    telefono INT (15) NOT NULL,
    email VARCHAR (50) NOT NULL,
    fecha_registro DATE NOT NULL,
    recomendacion_del_cliente INT (5) NULL,
    CONSTRAINT fk_recomendacion FOREIGN KEY (recomendacion_del_cliente) REFERENCES cliente (id_cliente)
);

CREATE TABLE IF NOT EXISTS ventas(
    id_venta INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    articulo INT (10) NOT NULL,
    vendedor VARCHAR (20) NOT NULL,
    fecha_venta DATE NOT NULL,
    cliente INT (10) NOT NULL,
    FOREIGN KEY (cliente) REFERENCES cliente (id_cliente),
    FOREIGN KEY (articulo) REFERENCES gafas (id_articulo)
);

INSERT INTO proveedor (nombre, calle, numero, piso, puerta, ciudad, c_p, pais, telefono, fax, nif)
values ('Gafas Molonas S.L', 'Av. Monserrat', '43', 'Entresuelo', 'C', 'Barcelona', '45980', 'España', '723984625', '723984678', 'N73519364'),
('Gafas Acero S.L', 'C/Diputacion', '88', 'Primero', 'A', 'Lugo','08370', 'España', '652984614', '652984654', 'A52734027'),
('Vision Lab S.L', 'C/Berlin', '12', 'Bajos', 'C', 'Pontevedra','43952', 'España', '772945003', '772945777', 'C78253813')
;


INSERT INTO marcas (marca, proveedor)
VALUES
('Tous', '2'), ('Nike', '1'), ('Ray-Ban', '3'), ('Boss', '1'), ('Arnette', '1')
;

INSERT INTO gafas (marca, graduacion_vidrio_D, graduacion_vidrio_I, tipo_de_montura, color_vidrio, precio, proveedor)
VALUES
('Arnette', '1.2', '2.1', 'pasta', 'negro', '100', '1'),
('Boss', '2.2', '2.2', 'metalica', 'blanca', '90', '1'),
('Arnette', '3.2', '2.3', 'pasta', 'lila', '110', '1'),
('Tous', '1.1', '1.1', 'metalica', 'negro', '150', '2'),
('Ray-Ban', '1.0', '2.0', 'pasta', 'rojo', '200', '3') 
;

INSERT INTO cliente (nombre, direccion, telefono, email, fecha_registro )
VALUES
('Carlos Garcia', 'Av. Diagonal 25', '773998663', 'carlosgarcia@gmail.com', '2019-06-27' ),
('Maria Lopez', 'C/Roma 67', '653546897', 'marialopez@gmail.com', '2018-03-15')
;
INSERT INTO cliente (nombre, direccion, telefono, email, fecha_registro, recomendacion_del_cliente )
VALUES
('Juan Palomo', 'C/Peru 45', '773298263', 'juanpalomo@gmail.com', '2011-11-11', '1' ),
('Diego Robles', 'C/Colon 66', '655546777', 'diegorobles@gmail.com', '2018-09-04', '1' )
;

INSERT INTO ventas (articulo, vendedor, fecha_venta, cliente)
VALUES
('1', 'Roberto', '2019-02-02','2'), 
('2', 'Roberto', '2020-09-09', '1'),
('1', 'Maria', '2019-12-08-', '2'),
('5', 'Veronica', '2021-01-04', '3'),
('3', 'Roberto', '2019-01-04', '4')
;

SELECT ventas.*, cliente.nombre
FROM ventas
INNER JOIN cliente ON ventas.`cliente` = cliente.id_cliente 
WHERE ventas.cliente = 2;
SELECT ventas.vendedor, ventas.fecha_venta, gafas.* 
FROM ventas inner JOIN gafas ON ventas.articulo = gafas.id_articulo 
WHERE `fecha_venta` LIKE '%2019%' AND  `vendedor` = 'Roberto';

SELECT ventas.articulo, ventas.fecha_venta, proveedor.* 
FROM ventas 
INNER JOIN gafas ON ventas.articulo = gafas.id_articulo 
INNER JOIN proveedor ON gafas.proveedor = proveedor.id_proveedor