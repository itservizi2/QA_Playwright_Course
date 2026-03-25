SELECT
    Nume,
    Prenume,
    Departament,
    Salariu
FROM Angajati
WHERE Departament = 'Administratie'
  AND Salariu > 5000;
  