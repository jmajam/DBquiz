-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 21, 2021 at 12:45 AM
-- Server version: 10.3.28-MariaDB-log
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jmajamco_ass1`
--

-- --------------------------------------------------------

--
-- Table structure for table `quoteTable`
--

CREATE TABLE `quoteTable` (
  `id` int(11) NOT NULL,
  `quoteData` varchar(255) NOT NULL,
  `nameData` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quoteTable`
--

INSERT INTO `quoteTable` (`id`, `quoteData`, `nameData`) VALUES
(1, '       test         ', '          test      '),
(2, '            12    ', '         12       '),
(3, '             we   ', '    we           ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quoteTable`
--
ALTER TABLE `quoteTable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quoteTable`
--
ALTER TABLE `quoteTable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
