DROP DATABASE IF EXISTS user_vehicle_db;
CREATE DATABASE user_vehicle_db;

USE user_vehicle_db;


CREATE TABLE vehicle (
    vehicleId INT AUTO_INCREMENT NOT NULL,
    make VARCHAR(30) NOT NULL,
    vehicleModel VARCHAR(30) NOT NULL,
    milage INT,
    PRIMARY KEY (vehicleId),
    ON DELETE SET NULL
);

CREATE TABLE user (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email varchar(30),
    PRIMARY KEY (id),
    FOREIGN KEY (vehicleId),
    REFERENCES vehicles(vehicleId), 
    ON DELETE SET NULL,
);