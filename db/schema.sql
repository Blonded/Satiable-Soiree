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

-- Dumping structure for table satiable.food
CREATE TABLE IF NOT EXISTS `food` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `instructions` text,
  `OccasionId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `food_ibfk_1` (`OccasionId`),
  KEY `food_ibfk_2` (`UserId`),
  CONSTRAINT `food_ibfk_1` FOREIGN KEY (`OccasionId`) REFERENCES `occasions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `food_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- Dumping data for table satiable.food: ~10 rows (approximately)
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` (`id`, `name`, `link`, `instructions`, `OccasionId`, `UserId`) VALUES
	(4, 'Chicken Sandwich', '', NULL, 5, 6),
	(7, 'Chocolate cake', '', NULL, 2, 4),
	(8, 'Candy', '', NULL, 8, 7),
	(9, 'Gum', '', NULL, 6, 1),
	(10, 'Hot Chocolate', '', NULL, 2, 5),
	(11, 'Caviar', '', NULL, 3, 8),
	(12, 'Hot Dogs', '', NULL, 4, 7),
	(13, 'Salad', '', NULL, 5, 1),
	(14, 'Spaguetti', '', NULL, 4, 1),
	(15, 'Cereal', '', NULL, 5, 1);
/*!40000 ALTER TABLE `food` ENABLE KEYS */;

-- Dumping structure for table satiable.occasions
CREATE TABLE IF NOT EXISTS `occasions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL DEFAULT 'https://us-east-1.tchyn.io/snopes-production/uploads/2015/01/picnic_fb.jpg',
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Dumping data for table satiable.occasions: ~6 rows (approximately)
/*!40000 ALTER TABLE `occasions` DISABLE KEYS */;
INSERT INTO `occasions` (`id`, `image`, `name`, `street`, `number`, `zipcode`, `city`, `date`, `starttime`, `endtime`, `UserId`) VALUES
	(2, 'https://us-east-1.tchyn.io/snopes-production/uploads/2015/01/picnic_fb.jpg', 'Saturday Breakfast', 'Howard Street', 750, '94103', 'San Francisco', '2018-07-25 00:00:00', '14:00:00', '19:00:00', 2),
	(3, 'https://us-east-1.tchyn.io/snopes-production/uploads/2015/01/picnic_fb.jpg', 'Lunch at Lafayette Park', 'Lafayette Park', 0, '94109', 'San Francisco', '2018-08-25 00:00:00', '12:00:00', '21:00:00', 2),
	(4, 'https://us-east-1.tchyn.io/snopes-production/uploads/2015/01/picnic_fb.jpg', 'Monday Blues', 'Dolores Park', 0, '94114', 'San Francisco', '2018-06-29 00:00:00', '17:00:00', '21:00:00', 4),
	(5, 'https://us-east-1.tchyn.io/snopes-production/uploads/2015/01/picnic_fb.jpg', 'Sunday Brunch', 'Dolores Park', 0, '94114', 'San Francisco', '2018-06-25 00:00:00', '16:00:00', '21:00:00', 5),
	(6, 'https://us-east-1.tchyn.io/snopes-production/uploads/2015/01/picnic_fb.jpg', 'Gustavo', 'street', 765, '94103', 'san francisco', '2018-12-08 08:00:00', '17:00:00', '21:00:00', 1),
	(8, 'https://us-east-1.tchyn.io/snopes-production/uploads/2015/01/picnic_fb.jpg', 'Barbecue', 'streeet', 989, '94103', 'Hayward', '0000-00-00 00:00:00', '00:00:00', '00:00:00', 3);
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

-- Dumping data for table satiable.useroccasions: ~10 rows (approximately)
/*!40000 ALTER TABLE `useroccasions` DISABLE KEYS */;
INSERT INTO `useroccasions` (`OccasionId`, `UserId`) VALUES
	(3, 1),
	(4, 1),
	(5, 1),
	(6, 1),
	(3, 2),
	(4, 2),
	(3, 3),
	(4, 3),
	(3, 4),
	(3, 5);
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Dumping data for table satiable.users: ~8 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `firstname`, `lastname`, `allergies`, `email`, `password`) VALUES
	(1, 'Jim', 'Halpert', 'glutenfree, nutsfree, dairyfree', 'gustavo.gibo@gmail.com', '21232f297a57a5a743894a0e4a801fc3'),
	(2, 'Farley', 'Meow', 'soyfree, nutsfree, dairyfree', 'farley.meow@gmail.com', '21232f297a57a5a743894a0e4a801fc3'),
	(3, 'Jon', 'Snow', 'vegan, dairyfree', 'knownothing@gmail.com', '21232f297a57a5a743894a0e4a801fc3'),
	(4, 'Dwight', 'Schrute', 'glutenfree, dairyfree', 'schrute@gmail.com', '21232f297a57a5a743894a0e4a801fc3'),
	(5, 'Pam\r\n', 'Halpert', 'glutenfree, nutsfree, dairyfree', 'gustavo.gibo@gmail.com', '21232f297a57a5a743894a0e4a801fc3'),
	(6, 'GUSTAVO', 'GIBO', 'Pescetarian, gluten, seafood', 'test@test.com', '098f6bcd4621d373cade4e832627b4f6'),
	(7, 'Gustavo', 'Gibo', 'Vegetarian, dairy, sesame, wheat', 'test@tesyt.com', '21232f297a57a5a743894a0e4a801fc3'),
	(8, 'uefhuefeuh', 'hufeuhfufheu', 'Vegan, Vegetarian', 'irrjif@jifjifr.com', '21232f297a57a5a743894a0e4a801fc3');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
