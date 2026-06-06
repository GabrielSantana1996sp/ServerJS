#Mysql Code

CREATE DATABASE Virus;
USE Virus;

CREATE TABLE Viruses 
(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Virus VARCHAR (100) NOT NULL, 
    Categoria VARCHAR (50),
    NumerosExitentes INT,
    SistemaOperacional VARCHAR (50)
);

INSERT INTO Viruses (Virus, Categoria, NumerosExistentes, SistemaOperacional) VALUES
('ILOVEYOU', 'Worm', 1000000, 'Windows'),
('Mydoom', 'Worm', 500000, 'Windows'),
('WannaCry', 'Ransomware', 300000, 'Windows'),
('Code Red', 'Worm', 250000, 'Windows'),
('Melissa', 'Macro Virus', 80000, 'Windows'),
('Trojan.Emotet', 'Trojan', 120000, 'Windows'),
('Conficker', 'Worm', 900000, 'Windows'),
('Zeus', 'Spyware', 200000, 'Windows'),
('Coinhive', 'Cryptojacking', 150000, 'Linux'),
('Brain', 'Boot Sector Virus', 5000, 'MS-DOS');
