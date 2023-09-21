SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

create database Recetas;

use Recetas;

grant all privileges on Recetas.* to 'felipe'@'%' identified by 'felipe';

create table cocinero(
    nombre varchar(30),
    apellidos varchar(30),
    email varchar(30),
    password varchar(30),
    estrellas INT,

    constraint pk_cocinero primary key (email)
)

create table receta(
    titulo varchar(100),
    descripcion varchar(500),
    nota real,
    cocinero varchar(30),

    constraint pk_receta primary key (titulo),
    constraint fk_receta foreign key (cocinero) references cocinero(nombre)
)

create table historial(
    nombre varchar(30),
    titulo varchar(100),

    constraint pk_historial primary key (nombre,titulo),
    constraint fk_his_cocinero foreign key (nombre) references cocinero(nombre),
    constraint fk_his_receta foreign key (titulo) references receta(titulo)
)

create table reseña(
    nombre varchar(30),
    receta varchar(100),
    nota real,
    fecha date,
    descripcion varchar(500),

    constraint pk_reseña primary key (nombre, receta, fecha),
    constraint pk_reseña_cocinero foreign key (nombre) references cocinero (nombre),
    constraint pk_reseña_receta foreign key (receta) references receta (titulo)
)