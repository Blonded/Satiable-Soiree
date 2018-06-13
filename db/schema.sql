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

-- Dumping data for table satiable.food: ~6 rows (approximately)
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` (`id`, `name`, `link`, `instructions`, `OccasionId`, `UserId`) VALUES
	(1, 'Old fashioned cornbread', 'https://spoonacular.com/recipes/old-fashioned-gluten-free-cornbread-793378', '', 3, 2),
	(2, 'Spinach and Ricotta Grilled Cheese', 'https://spoonacular.com/recipes/spinach-and-ricotta-grilled-cheese-765700', '', 5, 1),
	(3, 'New York Times Pumpkin Pie with an Oreo Crust', 'https://spoonacular.com/recipes/new-york-times-pumpkin-pie-with-an-oreo-crust-598130', '', 7, 1),
	(4, 'The New York Times Chocolate Chip Cookies', 'https://spoonacular.com/recipes/the-new-york-times-chocolate-chip-cookies-507667', '', 3, 3),
	(5, 'Pizza Roll-Up', 'https://spoonacular.com/recipes/pizza-roll-up-695528', '', 5, 5),
	(6, 'No-Bake Greek Yogurt Cheesecake Squares', 'https://spoonacular.com/recipes/no-bake-greek-yogurt-cheesecake-squares-1013161', '', 3, 5);
/*!40000 ALTER TABLE `food` ENABLE KEYS */;

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Dumping data for table satiable.occasions: ~5 rows (approximately)
/*!40000 ALTER TABLE `occasions` DISABLE KEYS */;
INSERT INTO `occasions` (`id`, `name`, `street`, `number`, `zipcode`, `city`, `date`, `starttime`, `endtime`) VALUES
	(3, 'Sunday Brunch', 'Dolores Park', 0, '94114', 'San Francisco', '2018-06-25 00:00:00', '16:00:00', '21:00:00'),
	(4, 'Friday Picnic', 'Stanyan St', 501, '94117', 'San Francisco', '2018-06-28 00:00:00', '14:00:00', '20:00:00'),
	(5, 'Saturday Breakfast at Yerba Buena Gardens', 'Howard Street', 750, '94103', 'San Francisco', '2018-07-25 00:00:00', '14:00:00', '19:00:00'),
	(6, 'Lunch at Lafayette Park', 'Lafayette Park', 0, '94109', 'San Francisco', '2018-08-25 00:00:00', '12:00:00', '21:00:00'),
	(7, 'Monday Blues', 'Dolores Park', 0, '94114', 'San Francisco', '2018-06-29 00:00:00', '17:00:00', '21:00:00');
/*!40000 ALTER TABLE `occasions` ENABLE KEYS */;

-- Dumping structure for table satiable.useroccasions
CREATE TABLE IF NOT EXISTS `useroccasions` (
  `OccasionId` int(11) NOT NULL DEFAULT '0',
  `UserId` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`OccasionId`,`UserId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `useroccasions_ibfk_1` FOREIGN KEY (`OccasionId`) REFERENCES `occasions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `useroccasions_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table satiable.useroccasions: ~14 rows (approximately)
/*!40000 ALTER TABLE `useroccasions` DISABLE KEYS */;
INSERT INTO `useroccasions` (`OccasionId`, `UserId`) VALUES
	(3, 1),
	(4, 1),
	(5, 1),
	(6, 1),
	(7, 1),
	(3, 2),
	(4, 2),
	(7, 2),
	(3, 3),
	(4, 3),
	(3, 4),
	(5, 4),
	(3, 5),
	(5, 5);
/*!40000 ALTER TABLE `useroccasions` ENABLE KEYS */;

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

-- Dumping data for table satiable.users: ~5 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `firstname`, `lastname`, `allergies`, `email`, `password`) VALUES
	(1, 'Gustavo', 'Gibo', 'glutenfree, nutsfree, dairyfree', 'gustavo.gibo@gmail.com', '21232f297a57a5a743894a0e4a801fc3'),
	(2, 'Farley', 'Meow', 'soyfree, nutsfree, dairyfree', 'farley.meow@gmail.com', '21232f297a57a5a743894a0e4a801fc3'),
	(3, 'Jon', 'Snow', 'vegan, dairyfree', 'knownothing@gmail.com', '21232f297a57a5a743894a0e4a801fc3'),
	(4, 'Dwight', 'Schrute', 'glutenfree, dairyfree', 'schrute@gmail.com', '21232f297a57a5a743894a0e4a801fc3'),
	(5, 'Gustavo', 'Gibo', 'glutenfree, nutsfree, dairyfree', 'gustavo.gibo@gmail.com', '21232f297a57a5a743894a0e4a801fc3');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
