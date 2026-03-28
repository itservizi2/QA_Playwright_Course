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
sqlite3 my_database.db ".read task2.sql"
sqlite3 my_database.db ".read task3.sql"
sqlite3 my_database.db ".read task4.sql"
sqlite3 my_database.db ".read task5.sql"
sqlite3 my_database.db ".read task6.sql"
sqlite3 my_database.db ".read task7.sql"
sqlite3 my_database.db ".read task8.sql"
sqlite3 my_database.db ".read task9.sql"
```

In **CMD** sau **Git Bash**:

```bash
sqlite3 my_database.db < task2.sql
sqlite3 my_database.db < task3.sql
sqlite3 my_database.db < task4.sql
sqlite3 my_database.db < task5.sql
sqlite3 my_database.db < task6.sql
sqlite3 my_database.db < task7.sql
sqlite3 my_database.db < task8.sql
sqlite3 my_database.db < task9.sql
```


## Observatii importante

- `task1.sql` trebuie rulat **o singura data** pentru a crea baza de date si a o popula.
- `task2.sql` → `task9.sql` pot fi rulate independent, in orice ordine, pentru a rezolva cerintele.
- In **PowerShell**, nu folosi operatorul `<`; foloseste comanda SQLite `.read`.
- Daca deschizi doar promptul SQLite si iesi fara operatii, fisierul poate sa nu apara imediat in Explorer.
- Dupa creare, foloseste Refresh in VS Code Explorer daca nu vezi fisierul din prima.


## Nota pentru VS Code cu SQLTools

- Creeaza o conexiune noua in SQLTools catre fisierul `my_database.db`.
- Dupa ce ai configurat conexiunea, poti deschide fiecare fisier `.sql` in VS Code si il poti rula direct din editor, fara sa mai folosesti terminalul.
- SQLTools va executa comenzile pe baza de date `my_database.db` exact ca si cum ai rula comenzile din terminal.

# Lista de Task-uri SQL

| Fisier | Cerinta                                                                                                                             |
|--------|-------------------------------------------------------------------------------------------------------------------------------------|
| task1  | Creati aceste doua tabele in baza de date si completati-le cu datele respective.                                                    |
| task2  | Pentru tabelul "Angajati", modificati valoarea la salariu la suma de 5000, pentru toti angajatii din biroul 20.                     |
| task3  | Pentru tabelul "Departament", modificati denumirea orasului pe Balti, pentru departamentele din orasul Orhei.                       |
| task4  | Modificati departamentul pentru angajatul Popescu Ion la "Distributie".                                                             |
| task5  | Pentru tabelul "Angajati", afisati toti angajatii al caror salariu este intre 4000 si 7000, ordonati dupa salariu crescator.        |
| task6  | Pentru tabelul "Angajati", afisati doar angajatii din departamentele Administratie si Productie, dar care nu lucreaza in biroul 20. |
| task7  | Pentru tabelul "Angajati", mariti salariul cu 10% pentru toti angajatii din departamentul Planificare.                              |
| task8  | Pentru tabelul "Departament", afisati departamentele a caror denumire incepe cu litera "D" sau a caror adresa contine litera "a".   |
| task9  | Pentru tabelul "Angajati", stergeti toti angajatii care au salariul mai mic de 4500 si lucreaza in departamentul Productie.         |

