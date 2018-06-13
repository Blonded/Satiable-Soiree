INSERT INTO users (firstname, lastname, allergies, email, password) VALUES ('Gustavo','Gibo', 'glutenfree, nutsfree, dairyfree', 'gustavo.gibo@gmail.com', '21232f297a57a5a743894a0e4a801fc3'), ('Farley','Meow', 'soyfree, nutsfree, dairyfree', 'farley.meow@gmail.com', '21232f297a57a5a743894a0e4a801fc3'), ('Jon','Snow', 'vegan, dairyfree', 'knownothing@gmail.com', '21232f297a57a5a743894a0e4a801fc3'), ('Dwight','Schrute', 'glutenfree, dairyfree', 'schrute@gmail.com', '21232f297a57a5a743894a0e4a801fc3'), ('Gustavo','Gibo', 'glutenfree, nutsfree, dairyfree', 'gustavo.gibo@gmail.com', '21232f297a57a5a743894a0e4a801fc3');

INSERT INTO occasions (name, street, number, zipcode, city, date, starttime, endtime) VALUES ('Friday Picnic', 'Stanyan St', 501, 94117, 'San Francisco', '2018-06-28', '14:00:00', '20:00:00');

INSERT INTO occasions (name, street, number, zipcode, city, date, starttime, endtime) VALUES ('Saturday Breakfast at Yerba Buena Gardens', 'Howard Street', 750, 94103, 'San Francisco', '2018-07-25', '14:00:00', '19:00:00');

INSERT INTO occasions (name, street, number, zipcode, city, date, starttime, endtime) VALUES ('Lunch at Lafayette Park', 'Lafayette Park', 0, 94109, 'San Francisco', '2018-08-25', '12:00:00', '21:00:00');

INSERT INTO occasions (name, street, number, zipcode, city, date, starttime, endtime) VALUES ('Monday Blues', 'Dolores Park', 0, 94114, 'San Francisco', '2018-06-29', '17:00:00', '21:00:00');

INSERT INTO occasions (name, street, number, zipcode, city, date, starttime, endtime) VALUES ('Sunday Brunch', 'Dolores Park', 0, 94114, 'San Francisco', '2018-06-25', '16:00:00', '21:00:00');


INSERT INTO useroccasions (OccasionId, UserId) values (4, 1), (3, 2), (3, 4), (5, 1), (6, 1), (7, 1), (7, 2), (3, 3), (3, 5), (4, 2), (4, 3), (3, 1), (5, 4), (5,5);

INSERT INTO food (name, link, instructions, OccasionId, UserId) VALUES ('Old fashioned cornbread', 'https://spoonacular.com/recipes/old-fashioned-gluten-free-cornbread-793378', '', 3, 2), ('Spinach and Ricotta Grilled Cheese', 'https://spoonacular.com/recipes/spinach-and-ricotta-grilled-cheese-765700', '', 5, 1), ('New York Times Pumpkin Pie with an Oreo Crust', 'https://spoonacular.com/recipes/new-york-times-pumpkin-pie-with-an-oreo-crust-598130', '', 7, 1), ('The New York Times Chocolate Chip Cookies', 'https://spoonacular.com/recipes/the-new-york-times-chocolate-chip-cookies-507667', '', 3, 3), ('Pizza Roll-Up', 'https://spoonacular.com/recipes/pizza-roll-up-695528', '', 5, 5), ('No-Bake Greek Yogurt Cheesecake Squares', 'https://spoonacular.com/recipes/no-bake-greek-yogurt-cheesecake-squares-1013161', '', 3, 5);