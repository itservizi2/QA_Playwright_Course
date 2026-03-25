CREATE TABLE Angajati (
    ID INTEGER PRIMARY KEY,
    Nume TEXT,
    Prenume TEXT,
    Departament TEXT,
    Birou INTEGER,
    Salariu INTEGER
);

CREATE TABLE Departament (
    ID TEXT PRIMARY KEY,
    Departament TEXT,
    Adresa TEXT,
    Oras TEXT
);

INSERT INTO Angajati VALUES
(1, 'Ionescu', 'Maria', 'Administratie', 10, 5200),
(2, 'Popescu', 'Ion', 'Productie', 20, 3600),
(3, 'Popa', 'Stefan', 'Administratie', 20, 6500),
(4, 'Dumitrescu', 'Vasile', 'Distributie', 16, 4500),
(5, 'Ionescu', 'Ion', 'Planificare', 14, 8000),
(6, 'Manole', 'Radu', 'Planificare', 7, 7300),
(7, 'Luca', 'Doru', 'Administratie', 20, 4000),
(8, 'Vasile', 'Alina', 'Productie', 20, 4600);

INSERT INTO Departament VALUES
('001', 'Administratie', 'Independentei', 'Chisinau'),
('002', 'Productie', 'Primaverii', 'Orhei'),
('003', 'Distributie', 'Central', 'Orhei'),
('004', 'Planificare', 'Nicolina', 'Balti'),
('005', 'Cercetare', 'Trandafirului', 'Cahul');

