CREATE TABLE Suppliers (
    Supplier_id INTEGER PRIMARY KEY,
    Supplier_name VARCHAR(25),
    ContractNr INTEGER NOT NULL,
    Loc_id INTEGER,
    IBAN VARCHAR(25) NOT NULL
);

CREATE TABLE Products (
    Product_id INTEGER PRIMARY KEY,
    Product_name VARCHAR(25) NOT NULL,
    Manufacture_date DATE,
    Validity INTEGER, -- Represents days
    Unit_price DECIMAL(10,2),
    Supplier_id INTEGER,
    FOREIGN KEY (Supplier_id) REFERENCES Suppliers(Supplier_id)
);
