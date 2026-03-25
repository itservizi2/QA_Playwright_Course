SELECT
    a.Nume,
    a.Prenume,
    a.Departament,
    a.Birou,
    d.Oras
FROM Angajati a
JOIN Departament d ON a.Departament = d.Departament
WHERE d.Oras = 'Orhei'
  AND a.Birou = 20;



