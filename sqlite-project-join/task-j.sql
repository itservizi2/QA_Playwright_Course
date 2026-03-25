SELECT
    a.Departament,
    d.Oras,
    ROUND(AVG(a.Salariu), 2) AS Salariu_mediu
FROM Angajati a
JOIN Departament d ON a.Departament = d.Departament
GROUP BY a.Departament, d.Oras;





