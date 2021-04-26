
CREATE SCHEMA IF NOT EXISTS `airbnb` DEFAULT CHARACTER SET utf8 ;
USE `airbnb` ;

-- -----------------------------------------------------
-- Table `airbnb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airbnb`.`users` (
  `id-user` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(80) NOT NULL,
  `first-name` VARCHAR(45) NOT NULL,
  `last-name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id-user`));



-- -----------------------------------------------------
-- Table `airbnb`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airbnb`.`city` (
  `id-city` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id-city`));



-- -----------------------------------------------------
-- Table `airbnb`.`place`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airbnb`.`place` (
  `id-place` INT NOT NULL AUTO_INCREMENT,
  `city_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `rooms` INT NOT NULL,
  `bathrooms` INT NOT NULL,
  `max_guests` INT NOT NULL,
  `price_by_night` INT NOT NULL,
  `available` TINYINT NOT NULL,
  PRIMARY KEY (`id-place`),
  INDEX `fk_user_id_idx` (`user_id` ASC),
  INDEX `fk_city_id_idx` (`city_id` ASC),
  CONSTRAINT `fk_city_id`
    FOREIGN KEY (`city_id`)
    REFERENCES `airbnb`.`city` (`id-city`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `airbnb`.`users` (`id-user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);



-- -----------------------------------------------------
-- Table `airbnb`.`booking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airbnb`.`booking` (
  `id-booking` INT NOT NULL AUTO_INCREMENT,
  `place_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `check_in` DATE NOT NULL,
  `check_out` DATE NOT NULL,
  PRIMARY KEY (`id-booking`)
  
 );
 
ALTER TABLE `airbnb`.`booking` 
ADD INDEX `fk_user_id_idx_idx` (`user_id` ASC);
ALTER TABLE `airbnb`.`booking` 
ADD CONSTRAINT `fk_user_id_idx`
  FOREIGN KEY (`user_id`)
  REFERENCES `airbnb`.`users` (`id-user`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  
ALTER TABLE `airbnb`.`booking` 
ADD INDEX `fk_place_id_idx_idx` (`place_id` ASC);
ALTER TABLE `airbnb`.`booking` 
ADD CONSTRAINT `fk_place_id_idx`
  FOREIGN KEY (`place_id`)
  REFERENCES `airbnb`.`place` (`id-place`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

