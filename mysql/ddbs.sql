
CREATE SCHEMA IF NOT EXISTS `airbnb` DEFAULT CHARACTER SET UTF8MB4 ;
USE `airbnb` ;

-- -----------------------------------------------------
-- Table `airbnb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airbnb`.`users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(80) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_user`));



-- -----------------------------------------------------
-- Table `airbnb`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airbnb`.`city` (
  `id_city` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_city`));



-- -----------------------------------------------------
-- Table `airbnb`.`place`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airbnb`.`place` (
  `id_place` INT NOT NULL AUTO_INCREMENT,
  `city_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `rooms` INT NOT NULL,
  `bathrooms` INT NOT NULL,
  `max_guests` INT NOT NULL,
  `price_by_night` INT NOT NULL,
  `available` DATE NOT NULL,
  PRIMARY KEY (`id_place`),
  INDEX `fk_user_id_idx` (`user_id` ASC),
  INDEX `fk_city_id_idx` (`city_id` ASC),
  CONSTRAINT `fk_city_id`
    FOREIGN KEY (`city_id`)
    REFERENCES `airbnb`.`city` (`id_city`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `airbnb`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);



-- -----------------------------------------------------
-- Table `airbnb`.`booking`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `airbnb`.`booking` (
  `id_booking` INT NOT NULL AUTO_INCREMENT,
  `place_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `check_in` DATE NOT NULL,
  `check_out` DATE NOT NULL,
  PRIMARY KEY (`id_booking`)
  
 );
 
ALTER TABLE `airbnb`.`booking` 
ADD INDEX `fk_user_id_idx_idx` (`user_id` ASC);
ALTER TABLE `airbnb`.`booking` 
ADD CONSTRAINT `fk_user_id_idx`
  FOREIGN KEY (`user_id`)
  REFERENCES `airbnb`.`users` (`id_user`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  
ALTER TABLE `airbnb`.`booking` 
ADD INDEX `fk_place_id_idx_idx` (`place_id` ASC);
ALTER TABLE `airbnb`.`booking` 
ADD CONSTRAINT `fk_place_id_idx`
  FOREIGN KEY (`place_id`)
  REFERENCES `airbnb`.`place` (`id_place`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
alter table airbnb.users add column role varchar(10);

