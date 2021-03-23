-- Up

CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

CREATE TABLE Movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    year INTEGER
);

CREATE TABLE Ratings (
    userId INTEGER REFERENCES Users(id),
    movieId INTEGER REFERENCES Movies(id),
    rating INTEGER
);

-- @https://www.convertcsv.com/csv-to-sql.htm
-- Users
INSERT INTO Users (name) values ('Andy');
INSERT INTO Users (name) values ('Isabel');
INSERT INTO Users (name) values ('John');
INSERT INTO Users (name) values ('Angela');
INSERT INTO Users (name) values ('Will');
INSERT INTO Users (name) values ('Alicia');
INSERT INTO Users (name) values ('Billy');
INSERT INTO Users (name) values ('Rachel');

-- Movies
INSERT INTO Movies(title,year) VALUES ('The Shawshank Redemption',1994);
INSERT INTO Movies(title,year) VALUES ('The Dark Knight',2008);
INSERT INTO Movies(title,year) VALUES ('American Beauty',1999);
INSERT INTO Movies(title,year) VALUES ('The Light Between Oceans',2016);
INSERT INTO Movies(title,year) VALUES ('Apocalypse Now',1979);
INSERT INTO Movies(title,year) VALUES ('Platoon',1986);
INSERT INTO Movies(title,year) VALUES ('A Beautiful Mind',2001);
INSERT INTO Movies(title,year) VALUES ('Snatch',2000);
INSERT INTO Movies(title,year) VALUES ('Braveheart',1995);
INSERT INTO Movies(title,year) VALUES ('Pulp Fiction',1994);
INSERT INTO Movies(title,year) VALUES ('Good Will Hunting',1997);
INSERT INTO Movies(title,year) VALUES ('Inglourious Basterds',2009);
INSERT INTO Movies(title,year) VALUES ('Matrix',1999);
INSERT INTO Movies(title,year) VALUES ('Beauty and the Beast',2017);
INSERT INTO Movies(title,year) VALUES ('Forrest Gump',1994);
INSERT INTO Movies(title,year) VALUES ('Spider-Man',2002);
INSERT INTO Movies(title,year) VALUES ('The Silence of the Lambs',1991);
INSERT INTO Movies(title,year) VALUES ('The Departed',2006);
INSERT INTO Movies(title,year) VALUES ('Shutter Island',2010);
INSERT INTO Movies(title,year) VALUES ('Terminator 2: Judgment Day',1991);
INSERT INTO Movies(title,year) VALUES ('The Avengers',2012);
INSERT INTO Movies(title,year) VALUES ('Lock, Stock and Two Smoking Barrels',1998);
INSERT INTO Movies(title,year) VALUES ('Blade Runner',1982);
INSERT INTO Movies(title,year) VALUES ('Dead Poets Society',1989);
INSERT INTO Movies(title,year) VALUES ('Batman Begins',2005);
INSERT INTO Movies(title,year) VALUES ('Blood in, Blood out',1993);
INSERT INTO Movies(title,year) VALUES ('The Notebook',2004);
INSERT INTO Movies(title,year) VALUES ('Me Before You',2016);
INSERT INTO Movies(title,year) VALUES ('The Usual Suspects',1995);
INSERT INTO Movies(title,year) VALUES ('Avatar',2009);

-- Ratings
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,1,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,2,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,3,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,4,1.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,5,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,6,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,8,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,10,3.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,12,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,13,3.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,14,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,18,4.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,22,3.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,25,4.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,27,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,28,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (1,29,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,3,4.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,4,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,6,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,7,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,9,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,10,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,11,4.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,13,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,14,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,15,4.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,17,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,19,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,20,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,21,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,23,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,27,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,28,4.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (2,30,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,1,4.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,3,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,4,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,7,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,11,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,13,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,15,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,16,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,18,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,22,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,24,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,26,3.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,29,4.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (3,30,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,2,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,3,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,4,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,6,4.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,7,2.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,9,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,11,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,14,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,15,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,20,4.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,24,3.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,25,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,27,3.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (4,28,3.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,3,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,4,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,7,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,9,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,11,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,14,2.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,15,3.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,21,2.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,24,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,26,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,27,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,28,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,29,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (5,30,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,3,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,4,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,5,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,8,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,9,3.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,10,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,12,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,14,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,15,3.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,22,1.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,23,1.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,26,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,27,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (6,28,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,1,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,5,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,6,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,8,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,9,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,10,2.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,12,3.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,16,1.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,17,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,18,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,19,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,22,1.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,24,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (7,27,1.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,2,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,8,1.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,11,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,13,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,16,4.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,17,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,18,1.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,19,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,20,2.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,21,3.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,23,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,25,5.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,27,1.5);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,28,1.0);
INSERT INTO Ratings(userId,movieId,rating) VALUES (8,30,2.0);

-- Down
DROP TABLE Users;
DROP TABLE Movies;
DROP TABLE Ratings;