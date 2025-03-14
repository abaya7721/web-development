drop database if exists movies;
create database movies;
use movies;

create table movie (
	id char(36) primary key,
	ranking int not null,
    title varchar(32) not null,
    director varchar(32),    
	year varchar(32) not null,
    duration VARCHAR(16),
    rating VARCHAR(16),
    global_gross VARCHAR(32),
    poster_url VARCHAR(2083)
);

CREATE TABLE users (
    id CHAR(36) PRIMARY KEY,         
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL, 
    authority VARCHAR(32) NOT NULL
);

INSERT INTO users (id, username, password, authority) VALUES
(UUID(), 'admin', 'password', 'ADMIN'),
(UUID(), 'guest', '', 'GUEST'),
(UUID(), 'manager', 'passsword', 'ADMIN'),
(UUID(), 'support', 'password', 'ADMIN');



-- Insert data into the `movie` table with additional attributes
INSERT INTO movie (id, ranking, title, director, year, duration, rating, global_gross, poster_url) VALUES
(UUID(), 5, 'Blade', 'Stephen Norrington', '1998', '120 minutes', 'R', '$131.2 million', 'https://cdn.pixabay.com/photo/2014/06/16/23/39/black-370118_1280.png'),
(UUID(), 2, 'Exhuma', 'Jang Jae-hyun', '2024', '134 minutes', 'Not Rated', '$98 million', 'https://sm.mashable.com/mashable_me/photo/default/new-project-2_ega6.jpg'),
(UUID(), 3, 'The Place Beyond the Pines', 'Derek Cianfrance', '2012', '140 minutes', 'R', '$47.2 million', 'https://cdn.pixabay.com/photo/2014/06/16/23/39/black-370118_1280.png'),
(UUID(), 1, 'The Day After Tomorrow', 'Roland Emmerich', '2004', '124 minutes', 'PG-13', '$552.6 million','https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/images/methode/2015/10/13/5114959e-7159-11e5-b075-2eb09c260678_1280x720.jpg?itok=WvdudC3l'),
(UUID(), 4, 'Marley & Me', 'David Frankel', '2008', '115 minutes', 'PG', '$247.8 million', 'https://cdn.pixabay.com/photo/2014/06/16/23/39/black-370118_1280.png');

SELECT * FROM movie;