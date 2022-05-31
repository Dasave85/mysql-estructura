CREATE DATABASE IF NOT EXISTS optica;

USE optica;

CREATE TABLE IF NOT EXISTS cliente(
    id_cliente INT (5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (20) NOT NULL,
    direccion VARCHAR (30) NOT NULL,
    telefono INT (15) NOT NULL,
    email VARCHAR (20) NOT NULL,
    fecha_registro DATE NOT NULL,
    recomendacion_del_cliente INT (5) NULL,
    CONSTRAINT fk_recomendacion FOREIGN KEY (recomendacion_del_cliente) REFERENCES cliente (id_cliente)
);

CREATE TABLE IF NOT EXISTS proveedor(
    id_proveedor INT (5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (20) NOT NULL,
    direccion
)

CREATE TABLE IF NOT EXISTS gafas(
    marca VARCHAR (20) NOT NULL PRIMARY KEY,
    graduacion_vidrio_D DECIMAL(2,2),
    graduacion_vidrio_I DECIMAL (2,2) NOT NULL,
    tipo_de_montura VARCHAR (20) NOT NULL,
    color_vidrio VARCHAR (20) NOT NULL,
    precio INT (5) NOT NULL,
    proveedor INT (5) NOT NULL,
    CONSTRAINT fk_venta_proveedor FOREIGN KEY (proveedor, marca) REFERENCES proveedor (id_proveedor, marca)
);
En concret vol saber de cada proveïdor el nom,
 l'adreça 
 (carrer,
  número,
   pis,
    porta, 
    ciutat,
     codi postal
      i país)
      , telèfon,
       fax,
        NIF.