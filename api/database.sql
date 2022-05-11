CREATE DATABASE  IF NOT EXISTS `presupuesto`;
USE `presupuesto`;

DROP TABLE IF EXISTS `Operaciones`;

CREATE TABLE `Operaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `concept` varchar(255) NOT NULL,
  `date` DATE ,
  `amount` int(11) ,
  `type` varchar(40) NOT NULL,
  PRIMARY KEY (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO operations VALUES (null,'prueba','income',1,334,'2021-03-25',1);