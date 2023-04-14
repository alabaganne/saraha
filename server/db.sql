create database saraha;

use saraha;


create table users (
	id int primary key auto_increment,
	email varchar(255) not null unique,
	username varchar(255) not null unique,
	studentId varchar(10) not null unique,
	password varchar(255) not null
);

create table posts (
	id int primary key auto_increment,
	text text not null,
	userId int not null,
	foreign key (userId) references users (id)
);

create table comments (
	id int primary key auto_increment,
	text text not null,
	userId int not null,
	postId int not null,
	foreign key (userId) references users (id),
	foreign key (postId) references posts (id)
);