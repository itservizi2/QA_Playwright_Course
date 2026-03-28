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

## Lista taskurilor task1

## Tabela Suppliers

```sql
CREATE TABLE Suppliers (
    Supplier_id INTEGER PRIMARY KEY,
    Supplier_name VARCHAR(25),
    ContractNr INTEGER NOT NULL,
    Loc_id INTEGER,
    IBAN VARCHAR(25) NOT NULL
);
```

## Tabela Products

```sql
CREATE TABLE Products (
    Product_id INTEGER PRIMARY KEY,
    Product_name VARCHAR(25) NOT NULL,
    Manufacture_date DATE,
    Validity INTEGER, -- Reprezinta zile
    Unit_price DECIMAL(10,2),
    Supplier_id INTEGER
);
```

## Lista taskurilor (task2 pana la task11)

| Fisier       | Cerinta                                                                                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `task2.sql`  | Insert 10 rows in Products table & 8 rows in Suppliers table.                                                                                                            |
| `task3.sql`  | Write a SQL statement to copy the structure of the Suppliers table created in the first task and the records that will meet the condition: Supplier_Name = 'Franzeluta'. |
| `task4.sql`  | Add one more column Product_Category(VARCHAR(20)) to Products table.                                                                                                     |
| `task5.sql`  | Update all the product_category fields (e.g.: bakery, dairy, beverages).                                                                                                 |
| `task6.sql`  | Delete the last row from the table Products.                                                                                                                             |
| `task7.sql`  | Display the products which contain the "..as.." in the product name.                                                                                                     |
| `task8.sql`  | Display all the details of the products along with the supplier details for the products that have a validity of more than 1 year.                                       |
| `task9.sql`  | Display the total price of products per category (Group By).                                                                                                             |
| `task10.sql` | Check how many days have already each product and verify that it has not exceeded the expiration date. Display only the valid products.                                  |
| `task11.sql` | Display all product details with the same validity period as row number 5.                                                                                               |
