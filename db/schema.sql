DROP DATABASE IF EXISTS user_vehicle_db;
CREATE DATABASE user_vehicle_db;

USE user_vehicle_db;


CREATE TABLE vehicle (
    vehicle_id INT AUTO_INCREMENT NOT NULL,
    make VARCHAR(30) NOT NULL,
    vehicleModel VARCHAR(30) NOT NULL,
    milage INT,
    PRIMARY KEY (vehicleId),
    ON DELETE SET NULL
);

CREATE TABLE user (
    user_id INT AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    user_password VARCHAR(30), NOT NULL,
    email varchar(30),
    PRIMARY KEY (id),
    FOREIGN KEY (vehicleId),
    REFERENCES vehicles(vehicleId), 
    ON DELETE SET NULL,
);