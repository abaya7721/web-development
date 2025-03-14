drop database if exists tasks;
create database tasks;
use tasks;

create table task (
	id char(36) primary key,
	date timestamp not null,
    title varchar(128) not null,
    description varchar(1024) not null,    
	priority int not null
);

INSERT INTO task (id, date, title, description, priority) VALUES
('a1b2c3d4-e5f6-7890-1234-56789abcdef0', '2025-03-01 09:00:00', 'Install Python', 'Download and install the latest version of Python.', 1),
('a2b2c3d4-e5f6-7890-1234-56789abcdef1', '2025-03-02 09:00:00', 'Setup IDE', 'Install and set up an Integrated Development Environment (IDE) like PyCharm or VS Code.', 1),
('a3b2c3d4-e5f6-7890-1234-56789abcdef2', '2025-03-03 09:00:00', 'Write Hello World', 'Create a simple Python program that prints "Hello, World!" to the console.', 1),
('a4b2c3d4-e5f6-7890-1234-56789abcdef3', '2025-03-04 09:00:00', 'Learn Basic Syntax', 'Understand Python syntax, including variables, data types, and basic operators.', 2),
('a5b2c3d4-e5f6-7890-1234-56789abcdef4', '2025-03-05 09:00:00', 'Control Structures', 'Learn about control structures such as if-else statements and loops.', 2),
('a6b2c3d4-e5f6-7890-1234-56789abcdef5', '2025-03-06 09:00:00', 'Functions', 'Understand how to define and call functions in Python.', 2),
('a7b2c3d4-e5f6-7890-1234-56789abcdef6', '2025-03-07 09:00:00', 'Lists and Dictionaries', 'Learn about lists and dictionaries, and how to use them effectively.', 2),
('a8b2c3d4-e5f6-7890-1234-56789abcdef7', '2025-03-08 09:00:00', 'File I/O', 'Learn how to read from and write to files in Python.', 3),
('a9b2c3d4-e5f6-7890-1234-56789abcdef8', '2025-03-09 09:00:00', 'Error Handling', 'Understand how to handle exceptions and errors in Python.', 3),
('a0b2c3d4-e5f6-7890-1234-56789abcdef9', '2025-03-10 09:00:00', 'Modules and Packages', 'Learn how to import and use modules and packages.', 3),
('b1b2c3d4-e5f6-7890-1234-56789abcdef0', '2025-03-11 09:00:00', 'Object-Oriented Programming', 'Understand the basics of object-oriented programming (OOP) in Python.', 3),
('b2b2c3d4-e5f6-7890-1234-56789abcdef1', '2025-03-12 09:00:00', 'Regular Expressions', 'Learn about regular expressions and how to use them in Python.', 4),
('b3b2c3d4-e5f6-7890-1234-56789abcdef2', '2025-03-13 09:00:00', 'Web Scraping', 'Get started with web scraping using libraries like BeautifulSoup or Scrapy.', 4),
('b4b2c3d4-e5f6-7890-1234-56789abcdef3', '2025-03-14 09:00:00', 'APIs and JSON', 'Learn how to interact with APIs and handle JSON data.', 4),
('b5b2c3d4-e5f6-7890-1234-56789abcdef4', '2025-03-15 09:00:00', 'Build a Project', 'Apply your knowledge by building a simple project, such as a to-do list application.', 4);

