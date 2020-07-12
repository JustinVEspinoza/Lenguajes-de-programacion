-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-07-2020 a las 11:38:18
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_despacho`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `justin_v_guiadespacho`
--

CREATE TABLE `justin_v_guiadespacho` (
  `numero_guia` varchar(7) NOT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `nombre_despachador` varchar(55) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `justin_v_guiadespacho`
--

INSERT INTO `justin_v_guiadespacho` (`numero_guia`, `fecha`, `hora`, `nombre_despachador`) VALUES
('ABC458', '2009-10-10', '10:10:10', 'Justin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `justin_v_ordendespacho`
--

CREATE TABLE `justin_v_ordendespacho` (
  `numero_guia` varchar(7) NOT NULL,
  `codigo` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `justin_v_ordendespacho`
--

INSERT INTO `justin_v_ordendespacho` (`numero_guia`, `codigo`, `cantidad`) VALUES
('ABC458', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `justin_v_producto`
--

CREATE TABLE `justin_v_producto` (
  `codigo` int(11) NOT NULL,
  `descripcion` varchar(35) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `grabado` bit(1) DEFAULT NULL,
  `imagen` varchar(1000) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `justin_v_producto`
--

INSERT INTO `justin_v_producto` (`codigo`, `descripcion`, `precio`, `grabado`, `imagen`, `cantidad`) VALUES
(1, 'Papa', 250.1, b'1', '2.jpg', 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `justin_v_guiadespacho`
--
ALTER TABLE `justin_v_guiadespacho`
  ADD PRIMARY KEY (`numero_guia`);

--
-- Indices de la tabla `justin_v_ordendespacho`
--
ALTER TABLE `justin_v_ordendespacho`
  ADD PRIMARY KEY (`codigo`,`numero_guia`),
  ADD KEY `fk_guiaDespacho` (`numero_guia`);

--
-- Indices de la tabla `justin_v_producto`
--
ALTER TABLE `justin_v_producto`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `justin_v_producto`
--
ALTER TABLE `justin_v_producto`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `justin_v_ordendespacho`
--
ALTER TABLE `justin_v_ordendespacho`
  ADD CONSTRAINT `fk_guiaDespacho` FOREIGN KEY (`numero_guia`) REFERENCES `justin_v_guiadespacho` (`numero_guia`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_producto` FOREIGN KEY (`codigo`) REFERENCES `justin_v_producto` (`codigo`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
