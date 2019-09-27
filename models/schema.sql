DROP DATABASE IF EXISTS employers_db;
CREATE DATABASE employers_db;

CREATE TABLE IF NOT EXISTS `employers_db`.`employers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `employer_name` VARCHAR(45) NOT NULL,
  `employer_email` VARCHAR(45) NOT NULL,
  `invoice_amount` DECIMAL(10,2) NOT NULL,
  `paid_status` TINYINT(1) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB