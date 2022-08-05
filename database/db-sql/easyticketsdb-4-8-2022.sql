-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-08-2022 a las 04:53:49
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `easyticketsdb`
--
CREATE DATABASE IF NOT EXISTS `easyticketsdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci;
USE `easyticketsdb`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `price` decimal(2,0) NOT NULL,
  `stock` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `category_id` int(11) NOT NULL,
  `image` varchar(50) NOT NULL,
  `video` varchar(50) DEFAULT NULL,
  `description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `events`
--

INSERT INTO `events` (`id`, `name`, `price`, `stock`, `date`, `address`, `city`, `category_id`, `image`, `video`, `description`) VALUES
(1, 'Coldplay en vivo', '99', 2000, '2022-12-02 00:00:00', 'Estadio Unico La Plata', 'La Plata', 1, 'evento1659568104329.jpg', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non blandit quam, vitae dignissim mauris. Nulla at fermentum ipsum. Nullam et ante convallis, gravida elit ut, semper mi. Curabitur aliqu'),
(2, 'Network', '99', 3000, '2022-10-12 00:00:00', 'Paseo La Plaza', 'Ciudad de Buenos Aires', 1, 'evento1659593259050.jpg', NULL, 'Phasellus ultrices mollis tellus, nec feugiat nisl sagittis euismod. Maecenas lobortis lectus eget viverra rhoncus. Integer eget efficitur eros, a pretium ligula. Nunc eget ipsum sagittis, mattis elit'),
(3, 'Game Over - After Office', '99', 4000, '2022-08-27 00:00:00', 'Palermo', 'Buenos Aires', 1, 'evento1659593374085.jpg', NULL, 'Quisque ullamcorper in nibh et maximus. Vivamus blandit urna ut velit lobortis, in lobortis sem finibus. Vestibulum tristique vulputate ligula, ut mattis felis condimentum non. Suspendisse eu rutrum l'),
(4, 'Terence Blanchard', '99', 3000, '2022-08-31 00:00:00', 'Niceto', 'Palermo', 1, 'evento1659593571878.jpg', NULL, ' Donec quis lectus quis risus ultrices ornare id id lacus. Donec ante nibh, fermentum nec congue vitae, facilisis id lacus. Vivamus finibus, mauris id iaculis faucibus, velit purus porttitor dolor, ut'),
(5, 'Babasonicos', '99', 5000, '2022-09-10 00:00:00', 'Roxy', 'Palermo', 1, 'evento1659593653163.jpg', NULL, 'Sed in condimentum odio. Curabitur sit amet tincidunt libero, id mollis neque. Proin lobortis nisi at congue faucibus. Morbi sit amet magna quam. Vivamus lacinia, dolor quis vehicula lobortis, mi ipsu'),
(6, 'Mau y Ricky', '99', 8000, '2022-10-15 00:00:00', 'Luna Park', 'Puerto Madero', 1, 'evento1659593738938.jpg', NULL, 'Nam sapien diam, tincidunt posuere consequat eget, porttitor ac nunc. Sed tristique posuere nibh, tempus pellentesque nibh lobortis eu. Maecenas cursus aliquet odio, non sagittis ante. Suspendisse sem'),
(7, 'Soy Rada', '99', 4000, '2022-08-26 00:00:00', 'Luna Park', 'Puerto Madero', 1, 'evento1659593849855.jpg', NULL, 'Phasellus semper, tellus et ornare cursus, metus est pellentesque nunc, at imperdiet velit odio et neque. Nulla venenatis sagittis lobortis. Orci varius natoque penatibus et magnis dis parturient mont'),
(8, 'Fuerza Bruta', '99', 8000, '2022-08-31 00:00:00', 'Estadio Obras', 'Nuñez', 1, 'evento1659593988557.jpg', NULL, 'Nunc feugiat, nisl a sodales imperdiet, libero nisl venenatis nisi, et sagittis felis tortor vitae sem. Nulla sed mauris ante. Nulla convallis lacus quis placerat cursus. Aenean auctor, ligula sit ame'),
(9, 'El Kuelgue', '99', 5000, '2022-08-27 00:00:00', 'C Complejo Art Medi', 'Chacarita', 1, 'evento1659594119643.jpg', NULL, 'Fusce suscipit ipsum at odio tristique laoreet. Etiam eu consequat turpis, sagittis efficitur libero. Fusce et mauris ac diam bibendum viverra. Vestibulum quis euismod dolor. Interdum et malesuada fam'),
(10, 'Cirque du Soleil - Messi', '99', 15000, '2023-03-18 00:00:00', 'Costanera Sur', 'Puerto Madero', 1, 'evento1659594317159.jpg', NULL, 'Morbi sit amet magna quam. Vivamus lacinia, dolor quis vehicula lobortis, mi ipsum hendrerit ligula, in consequat sapien dolor sed eros. Vestibulum sagittis, lorem eget faucibus placerat, nunc elit al'),
(11, 'Tiago PZK', '99', 12000, '2022-08-26 00:00:00', 'Auditorio Lugones', 'Ciudad de Cordoba', 2, 'evento1659594456663.jpg', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum sem. Cras vitae blandit arcu, sed viverra sapien. Duis ac purus accumsan, rhoncus tortor et, sollicitudin quam. Lorem ipsum dolo'),
(12, 'Bizarrap', '99', 10000, '2022-09-07 00:00:00', 'Estadio Kempes', 'Cordoba', 2, 'evento1659607562518.jpg', NULL, 'Pellentesque ligula diam, sagittis a ullamcorper quis, interdum et magna. Nullam vel interdum risus, eu venenatis dolor. Ut blandit tortor magna, at mollis felis porta vel. Morbi eget blandit ligula.'),
(13, 'Fito Paez', '99', 8000, '2022-08-31 00:00:00', 'Estadio Kempes', 'Cordoba', 2, 'evento1659607651304.jpg', NULL, 'Sed in aliquam dolor. Fusce consequat non velit vel rutrum. Mauris vel feugiat augue. Phasellus ultrices mollis tellus, nec feugiat nisl sagittis euismod. Maecenas lobortis lectus eget viverra rhoncus'),
(14, 'Damas Gratis', '99', 2000, '2022-09-10 00:00:00', 'Plaza de la Musica', 'Cordoba', 2, 'evento1659607733719.jpg', NULL, 'Duis posuere quam a mi porta rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ullamcorper in nibh et maximus. Vivamus blandit urna ut veli'),
(15, 'Kevin Johansen', '99', 3000, '2022-11-30 00:00:00', 'Plaza de la Musica', 'Cordoba', 2, 'evento1659607815956.jpg', NULL, 'Donec semper venenatis velit, sit amet iaculis nisi lacinia sit amet. Donec quis lectus quis risus ultrices ornare id id lacus. Donec ante nibh, fermentum nec congue vitae, facilisis id lacus. Vivamus'),
(16, 'Silvestre y la naranja', '99', 3000, '2022-11-13 00:00:00', 'Quality Espacio', 'Cordoba', 2, 'evento1659607947400.jpg', NULL, 'ed in condimentum odio. Curabitur sit amet tincidunt libero, id mollis neque. Proin lobortis nisi at congue faucibus. Morbi sit amet magna quam. Vivamus lacinia, dolor quis vehicula lobortis, mi ipsum'),
(17, 'Lali', '99', 10000, '2022-09-30 00:00:00', 'Estadio Mario Kempes', 'Cordoba', 2, 'evento1659608013840.jpg', NULL, 'Donec odio lectus, imperdiet et condimentum et, molestie id mauris. Curabitur aliquet sodales vulputate. Cras quis elit luctus, fermentum justo at, molestie ligula. Nunc eu volutpat elit.'),
(18, 'La Delio Valdez', '99', 6000, '2022-10-14 00:00:00', 'Quality Espacio', 'Cordoba', 2, 'evento1659608122080.jpg', NULL, 'Nam sapien diam, tincidunt posuere consequat eget, porttitor ac nunc. Sed tristique posuere nibh, tempus pellentesque nibh lobortis eu. Maecenas cursus aliquet odio, non sagittis ante. Suspendisse sem'),
(19, 'Julieta Venegas', '99', 4000, '2022-09-07 00:00:00', 'Quality Espacio', 'Cordoba', 2, 'evento1659608197365.jpg', NULL, 'Aliquam non lacus lobortis, gravida mi ac, commodo quam. Phasellus vulputate sem vel lorem semper tempor. Vestibulum id dolor sed nisi rutrum porttitor non quis lorem.'),
(20, 'De la Rivera', '99', 8000, '2022-08-21 00:00:00', 'Plaza de la Musica', 'Cordoba', 2, 'evento1659608273820.jpg', NULL, 'Phasellus semper, tellus et ornare cursus, metus est pellentesque nunc, at imperdiet velit odio et neque. Nulla venenatis sagittis lobortis. Orci varius natoque penatibus et magnis dis parturient mont'),
(21, 'Sergio Dalma', '99', 7000, '2022-09-15 00:00:00', 'Teatro El Circulo', 'Rosario', 3, 'evento1659608476039.jpg', NULL, 'Nulla sed mauris ante. Nulla convallis lacus quis placerat cursus. Aenean auctor, ligula sit amet fringilla viverra, neque magna dictum quam, eget gravida mi arcu a lorem. Quisque quis libero vestibul'),
(22, 'Ismael Serrano', '99', 5000, '2022-09-20 00:00:00', 'Teatro El Circulo', 'Rosario', 3, 'evento1659608553357.jpg', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum sem. Cras vitae blandit arcu, sed viverra sapien. Duis ac purus accumsan, rhoncus tortor et, sollicitudin quam. Lorem ipsum dolo'),
(23, 'Puma Rodriguez', '99', 4000, '2022-09-03 00:00:00', 'Anfiteatro Humberto de Nito', 'Rosario', 3, 'evento1659608631274.jpg', NULL, 'Sed in aliquam dolor. Fusce consequat non velit vel rutrum. Mauris vel feugiat augue. Phasellus ultrices mollis tellus, nec feugiat nisl sagittis euismod. Maecenas lobortis lectus eget viverra rhoncus'),
(24, 'Duki', '99', 15000, '2022-12-16 00:00:00', 'Hipodromo De Rosario', 'Rosario', 3, 'evento1659608700362.jpg', NULL, 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ullamcorper in nibh et maximus. Vivamus blandit urna ut velit lobortis, in lobortis sem finibus. V'),
(25, 'Ruggero', '99', 6000, '2022-09-03 00:00:00', 'Anfiteatro Humberto de Nito', 'Rosario', 3, 'evento1659608782259.jpg', NULL, 'Donec semper venenatis velit, sit amet iaculis nisi lacinia sit amet. Donec quis lectus quis risus ultrices ornare id id lacus. Donec ante nibh, fermentum nec congue vitae, facilisis id lacus. Vivamus'),
(26, 'No Te Va Gustar', '99', 6000, '2022-08-31 00:00:00', 'Hipodromo De Rosario', 'Rosario', 3, 'evento1659608861409.jpg', NULL, 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed in condimentum odio. Curabitur sit amet tincidunt libero, id mollis neque. Proin lobortis nisi at congue faucibus. Morbi sit amet magn'),
(27, 'Los Nocheros', '99', 5000, '2022-08-19 00:00:00', 'Teatro El Circulo', 'Rosario', 3, 'evento1659608935363.jpg', NULL, 'Vestibulum sagittis, lorem eget faucibus placerat, nunc elit aliquet metus, at congue arcu neque sit amet eros. Donec odio lectus, imperdiet et condimentum et, molestie id mauris. Curabitur aliquet so'),
(28, 'Nathy Peluso', '99', 10000, '2022-08-18 00:00:00', 'Anfiteatro Humberto de Nito', 'Rosario', 3, 'evento1659609004073.jpg', NULL, 'Nam sapien diam, tincidunt posuere consequat eget, porttitor ac nunc. Sed tristique posuere nibh, tempus pellentesque nibh lobortis eu. Maecenas cursus aliquet odio, non sagittis ante. Suspendisse sem'),
(29, 'Abel Pintos', '99', 8000, '2022-10-18 00:00:00', 'Teatro El Circulo', 'Rosario', 3, 'evento1659609166505.jpg', NULL, 'Phasellus semper, tellus et ornare cursus, metus est pellentesque nunc, at imperdiet velit odio et neque. Nulla venenatis sagittis lobortis. Orci varius natoque penatibus et magnis dis parturient mont'),
(30, 'Maria Becerra', '99', 15000, '2022-12-10 00:00:00', 'Hipodromo De Rosario', 'Rosario', 3, 'evento1659609238674.jpg', NULL, 'Nulla convallis lacus quis placerat cursus. Aenean auctor, ligula sit amet fringilla viverra, neque magna dictum quam, eget gravida mi arcu a lorem. Quisque quis libero vestibulum, aliquet arcu ut, fa'),
(31, 'Marilina Bertoldi', '99', 5000, '2022-12-13 00:00:00', 'Teatro El Circulo', 'Rosario', 4, 'evento1659609361435.jpg', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum sem. Cras vitae blandit arcu, sed viverra sapien. Duis ac purus accumsan, rhoncus tortor et, sollicitudin quam. Lorem ipsum dolo'),
(32, 'Valeria Lynch', '99', 5000, '2022-09-23 00:00:00', 'Teatro El Circulo', 'Rosario', 4, 'evento1659609449933.jpg', NULL, 'Pellentesque ligula diam, sagittis a ullamcorper quis, interdum et magna. Nullam vel interdum risus, eu venenatis dolor. Ut blandit tortor magna, at mollis felis porta vel. Morbi eget blandit ligula.'),
(33, 'Ciro y los Persas', '99', 9000, '2022-09-22 00:00:00', 'Teatro Las Heras', 'Mendoza', 4, 'evento1659609766960.jpg', NULL, 'Sed in aliquam dolor. Fusce consequat non velit vel rutrum. Mauris vel feugiat augue. Phasellus ultrices mollis tellus, nec feugiat nisl sagittis euismod. Maecenas lobortis lectus eget viverra rhoncus'),
(34, 'Manuel Wirtz', '99', 6000, '2022-11-03 00:00:00', 'Espacio Musical', 'San Juan', 4, 'evento1659609868108.jpg', NULL, 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ullamcorper in nibh et maximus. Vivamus blandit urna ut velit lobortis, in lobortis sem finibus. V'),
(35, 'Nahuel Pennisi', '99', 5000, '2022-10-17 00:00:00', 'Club Amalffi', 'San Luis', 4, 'evento1659609943794.jpg', NULL, 'Donec semper venenatis velit, sit amet iaculis nisi lacinia sit amet. Donec quis lectus quis risus ultrices ornare id id lacus. Donec ante nibh, fermentum nec congue vitae, facilisis id lacus. Vivamus'),
(36, 'Estelares', '99', 7000, '2022-10-14 00:00:00', 'Gimnasio Solano Lopez', 'Corrientes', 4, 'evento1659610036289.jpg', NULL, 'Sed in condimentum odio. Curabitur sit amet tincidunt libero, id mollis neque. Proin lobortis nisi at congue faucibus. Morbi sit amet magna quam. Vivamus lacinia, dolor quis vehicula lobortis, mi ipsu'),
(37, 'Angela Leiva', '99', 8000, '2022-09-18 00:00:00', 'Hipodromo de Entre Rios', 'Entre Rios', 4, 'evento1659610149551.jpg', NULL, 'Nam sapien diam, tincidunt posuere consequat eget, porttitor ac nunc. Sed tristique posuere nibh, tempus pellentesque nibh lobortis eu. Maecenas cursus aliquet odio, non sagittis ante. Suspendisse sem'),
(38, 'Nataly Perez', '99', 6000, '2022-10-16 00:00:00', 'Club Libertad', 'Neuquen', 4, 'evento1659610224601.jpg', NULL, 'Phasellus semper, tellus et ornare cursus, metus est pellentesque nunc, at imperdiet velit odio et neque. Nulla venenatis sagittis lobortis. Orci varius natoque penatibus et magnis dis parturient mont'),
(39, 'Divididos', '99', 9000, '2023-01-07 00:00:00', 'Club Estudiantes', 'Comodoro Rivadavia', 4, 'evento1659610293056.jpg', NULL, 'Aenean auctor, ligula sit amet fringilla viverra, neque magna dictum quam, eget gravida mi arcu a lorem. Quisque quis libero vestibulum, aliquet arcu ut, facilisis urna. Fusce suscipit ipsum at odio t'),
(40, 'Los Palmeras', '99', 10000, '2022-10-16 00:00:00', 'Estadio de San Rafael', 'Mendoza', 4, 'evento1659610374541.jpg', NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed rutrum sem. Cras vitae blandit arcu, sed viverra sapien. Duis ac purus accumsan, rhoncus tortor et, sollicitudin quam. Lorem ipsum dolo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `event_category`
--

CREATE TABLE `event_category` (
  `id` int(11) NOT NULL,
  `category` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `event_category`
--

INSERT INTO `event_category` (`id`, `category`) VALUES
(1, 'Buenos Aires'),
(2, 'Cordoba'),
(3, 'Rosario'),
(4, 'Otras');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` double NOT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `category_id` int(11) NOT NULL,
  `image` varchar(60) NOT NULL,
  `oldimage` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `category_id`, `image`, `oldimage`) VALUES
(1, 'Sebastian', 'Brilli', 'sbrilli@gasei.com.ar', '$2b$10$7XOVSe.Sg0BQ0dD1NqNMCeOyzSMc8WxwkRQO4N3p7J7pHE8rgSXRS', 3, 'usuario1658950393560.jpg', ''),
(2, 'Luciano Manuel', 'Brilli', 'lbrilli@gasei.com.ar', '$2b$10$RemD9Adf1YCQIPGTOCENTehXQSLuQvjvIr/DXvTX0d2wJO84H3EvC', 3, 'default.png', ''),
(3, 'Franco', 'Castelletti', 'fbrilli@gmail.com', '$2b$10$1t5LJ8npJws7NbGV19ExJuL5VXk1wWHbov/cjHYnUi0vkgwZO8vv6', 3, 'usuario1658714828348.png', ''),
(4, 'Julio Cesar', 'Brilli', 'jbrilli@gmail.com', '$2b$10$DPjEPrxRToeS2z96Fdy6aO90tGIxBrtXJiEm3nDFTRvJ9GE3OeumS', 1, 'default.png', ''),
(6, 'Diego', 'Brilli', 'dbrilli@gmail.com', '$2b$10$LiTWCZGLk7VwRBo5faCe/e5iYyw9EzdNYygjW65dE0nCjd565Eadu', 3, 'default.png', ''),
(7, 'Laura', 'Castelletti', 'lcastelletti@gmail.com', '$2b$10$VZ/UTLbC.4QUGUmrGWo2he676renQwjMkxSbNoCnefugHQQ/zlQKG', 3, 'default.png', ''),
(9, 'Roberto', 'Perez', 'rperez@gmail.com', '$2b$10$UYFmeRcvm2Jdkac/BMZFvOp9TuuyOHVB/2euMWuP/Ir77w4Yt/sIS', 3, 'usuario1658674076067.jpg', ''),
(13, 'Wence', 'Ashifu', 'washifu@gmail.com', '$2b$10$6J5DKnj7wwbc.6qQbGsXn.jvOXy5X01/y1Xe6uCpCjF0ME7aH0Xqm', 3, 'default.png', ''),
(14, 'Ariadna', 'Shinsato', 'ashinsato@gmail.com', '$2b$10$f.EOeEri1Jq/c85YL.uqDOqi3FfZB//WggAFDqq7RgeZhOzUGDLyy', 3, 'default.png', ''),
(15, 'Diego', 'Mato', 'dmato@gmail.com', '$2b$10$sHop5kAwzQ27HyQD7aCmb.0cCzYueuX5EZhryg/s3WzDUicBQsegm', 1, 'default.png', ''),
(16, 'Manuel', 'Jacu', 'manu@gmail.com', '$2b$10$qU1DQCmUsFHtBIlJNMLKiOGnjUWDAoFyuUtI7Lq8ireKAlswyiP7q', 3, 'usuario1659060950402.png', ''),
(17, 'Marcos', 'Ramos', 'marcosramos.dm@gmail.com', '$2b$10$iw518SN2nJD/Y17y49Yt.OftcUZLEJanqF/lK6JMS.JFgfkKjOQAa', 1, 'default.png', NULL),
(18, 'Marcos', 'Ramos', 'mramos@drubu.net', '$2b$10$SYFqJ/n/6lrs3ZucFFgdBu.I.Up/uyG9Ow/1N3ZcP2YWAc8qMIIAe', 1, 'default.png', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_category`
--

CREATE TABLE `user_category` (
  `id` int(11) NOT NULL,
  `category` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user_category`
--

INSERT INTO `user_category` (`id`, `category`) VALUES
(1, 'Administrador'),
(3, 'Usuario');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_events_eventCategory_idx` (`category_id`);

--
-- Indices de la tabla `event_category`
--
ALTER TABLE `event_category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sales_events_idx` (`event_id`),
  ADD KEY `fk_sales_users_idx` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD KEY `fk_users_userCategory_idx` (`category_id`);

--
-- Indices de la tabla `user_category`
--
ALTER TABLE `user_category`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `event_category`
--
ALTER TABLE `event_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `user_category`
--
ALTER TABLE `user_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `fk_events_eventCategory` FOREIGN KEY (`category_id`) REFERENCES `event_category` (`id`);

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `fk_sales_events` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`),
  ADD CONSTRAINT `fk_sales_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_userCategory` FOREIGN KEY (`category_id`) REFERENCES `user_category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
