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

-- Dumping data for table satiable.food: ~0 rows (approximately)
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
/*!40000 ALTER TABLE `food` ENABLE KEYS */;

-- Dumping data for table satiable.occasions: ~0 rows (approximately)
/*!40000 ALTER TABLE `occasions` DISABLE KEYS */;
INSERT INTO `occasions` (`id`, `name`, `street`, `number`, `zipcode`, `city`, `date`, `starttime`, `endtime`, `UserId`) VALUES
	(1, 'Friday Picnic', 'Stanyan St', 501, '94117', 'San Francisco', '2018-06-28 00:00:00', '14:00:00', '20:00:00', 1),
	(2, 'Saturday Breakfast at Yerba Buena Gardens', 'Howard Street', 750, '94103', 'San Francisco', '2018-07-25 00:00:00', '14:00:00', '19:00:00', 2),
	(3, 'Lunch at Lafayette Park', 'Lafayette Park', 0, '94109', 'San Francisco', '2018-08-25 00:00:00', '12:00:00', '21:00:00', 2),
	(4, 'Monday Blues', 'Dolores Park', 0, '94114', 'San Francisco', '2018-06-29 00:00:00', '17:00:00', '21:00:00', 4),
	(5, 'Sunday Brunch', 'Dolores Park', 0, '94114', 'San Francisco', '2018-06-25 00:00:00', '16:00:00', '21:00:00', 5);
/*!40000 ALTER TABLE `occasions` ENABLE KEYS */;

-- Dumping data for table satiable.useroccasions: ~0 rows (approximately)
/*!40000 ALTER TABLE `useroccasions` DISABLE KEYS */;
INSERT INTO `useroccasions` (`OccasionId`, `UserId`) VALUES
	(3, 1),
	(4, 1),
	(5, 1),
	(3, 2),
	(4, 2),
	(3, 3),
	(4, 3),
	(3, 4),
	(5, 4),
	(3, 5),
	(5, 5);
/*!40000 ALTER TABLE `useroccasions` ENABLE KEYS */;

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
