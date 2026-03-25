SELECT
    a.Nume,
    a.Prenume,
    d.Adresa
FROM Angajati a
JOIN Departament d ON a.Departament = d.Departament;




