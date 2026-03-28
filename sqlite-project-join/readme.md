### Pasul 1: Crearea fisierului bazei de date

In **PowerShell**, comanda de mai jos deschide promptul interactiv SQLite pentru fisierul `my_database.db`:

```powershell
sqlite3 my_database.db
```

Pentru ca fisierul sa fie creat si vizibil imediat in Explorer, ruleaza o comanda care scrie in baza. Varianta rapida:

```powershell
sqlite3 my_database.db "VACUUM;"
```

Alternativ, daca rulezi direct `task1.sql`, baza va fi creata si populata in acelasi pas:

```powershell
sqlite3 my_database.db ".read task1.sql"
```


### Pasul 2: Iesirea din promptul SQLite

Daca ai intrat in promptul SQLite, poti iesi cu comanda urmatoare pentru a reveni in terminalul normal:

```bash
.quit
```


### Pasul 3: Rularea scriptului task1.sql

Acest fisier trebuie rulat **o singura data** pentru a crea tabelele si a le popula cu date.

In **PowerShell**, foloseste comanda de mai jos:

```powershell
sqlite3 my_database.db ".read task1.sql"
```

In **CMD** sau **Git Bash**, poti folosi si varianta cu redirectionare:

```bash
sqlite3 my_database.db < task1.sql
```


### Pasul 4: Rularea celorlalte task-uri

Fiecare fisier poate fi rulat independent, in orice ordine, pentru a rezolva cerintele:

In **PowerShell**:

```powershell
sqlite3 my_database.db ".read task-a.sql"
sqlite3 my_database.db ".read task-b.sql"
sqlite3 my_database.db ".read task-c.sql"
sqlite3 my_database.db ".read task-d.sql"
sqlite3 my_database.db ".read task-e.sql"
sqlite3 my_database.db ".read task-f.sql"
sqlite3 my_database.db ".read task-g.sql"
sqlite3 my_database.db ".read task-h.sql"
sqlite3 my_database.db ".read task-i.sql"
sqlite3 my_database.db ".read task-j.sql"
```

In **CMD** sau **Git Bash**:

```bash
sqlite3 my_database.db < task-a.sql
sqlite3 my_database.db < task-b.sql
sqlite3 my_database.db < task-c.sql
sqlite3 my_database.db < task-d.sql
sqlite3 my_database.db < task-e.sql
sqlite3 my_database.db < task-f.sql
sqlite3 my_database.db < task-g.sql
sqlite3 my_database.db < task-h.sql
sqlite3 my_database.db < task-i.sql
sqlite3 my_database.db < task-j.sql
```


## Observatii importante

- `task1.sql` trebuie rulat **o singura data** pentru a crea baza de date si a o popula.
- `task-a.sql` → `task-j.sql` pot fi rulate independent, in orice ordine, pentru a rezolva cerintele.
- In **PowerShell**, nu folosi operatorul `<`; foloseste comanda SQLite `.read`.
- Daca deschizi doar promptul SQLite si iesi fara operatii, fisierul poate sa nu apara imediat in Explorer.
- Dupa creare, foloseste Refresh in VS Code Explorer daca nu vezi fisierul din prima.


## Nota pentru VS Code cu SQLTools

- Creeaza o conexiune noua in SQLTools catre fisierul `my_database.db`.
- Dupa ce ai configurat conexiunea, poti deschide fiecare fisier `.sql` in VS Code si il poti rula direct din editor, fara sa mai folosesti terminalul.
- SQLTools va executa comenzile pe baza de date `my_database.db` exact ca si cum ai rula comenzile din terminal.

# Lista de Task-uri SQL

| Fisier     | Cerinta                                                                                                                               |
|------------|---------------------------------------------------------------------------------------------------------------------------------------|
| task-a.sql | Sa se gaseasca toti angajatii departamentului Administratie, care au un salariu mai mare de 5000.                                     |
| task-b.sql | Sa se afiseze unic, toate orasele in care se amplaseaza departamentele.                                                               |
| task-c.sql | Sa se gaseasca angajatul cu cel mai mic salariu. Sa se afiseze numele, prenumele si salariu.                                          |
| task-d.sql | Sa se gaseasca toti angajatii, numele carora incepe cu 'PO'.                                                                          |
| task-e.sql | Sa se gaseasca angajatii care au salariu de la 4000 la 6000. Sa se afiseze numele, prenumele si salariu.                              |
| task-f.sql | Sa se gaseasca toti angajatii departamentului 'Administratie' care activeaza in biroul 20. Sa se afiseze numele, prenumele si biroul. |
| task-g.sql | Sa se gaseasca pentru fiecare angajat, care este adresa sa de lucru. Sa se afiseze numele, prenumele si adresa.                       |
| task-h.sql | Afisati angajatii care lucreaza in departamente aflate in orasele Orhei sau Balti si au salariul mai mare de 4500.                    |
| task-i.sql | Afisati angajatii care lucreaza in departamente aflate in orasul Orhei si au biroul egal cu 20.                                       |
| task-j.sql | Afisati salariul mediu pentru fiecare departament impreuna cu orasul in care se afla departamentul (Hint: Avg() si Group By).         |

