-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.6.34-log - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             9.5.0.5249
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for satiable
CREATE DATABASE IF NOT EXISTS `satiable` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `satiable`;

-- Dumping structure for table satiable.food
CREATE TABLE IF NOT EXISTS `food` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `instructions` text,
  `OccasionId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `OccasionId` (`OccasionId`),
  KEY `food_ibfk_2` (`UserId`),
  CONSTRAINT `food_ibfk_1` FOREIGN KEY (`OccasionId`) REFERENCES `occasions` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `food_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table satiable.occasions
CREATE TABLE IF NOT EXISTS `occasions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `number` int(11) DEFAULT NULL,
  `zipcode` varchar(5) NOT NULL,
  `city` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `starttime` time NOT NULL,
  `endtime` time NOT NULL,
  `UserId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `occasions_ibfk_1` (`UserId`),
  CONSTRAINT `occasions_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table satiable.useroccasions
CREATE TABLE IF NOT EXISTS `useroccasions` (
  `OccasionId` int(11) NOT NULL DEFAULT '0',
  `UserId` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`OccasionId`,`UserId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `useroccasions_ibfk_1` FOREIGN KEY (`OccasionId`) REFERENCES `occasions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `useroccasions_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table satiable.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `allergies` text,
  `email` varchar(255) NOT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
