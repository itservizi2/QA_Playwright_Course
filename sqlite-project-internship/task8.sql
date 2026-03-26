SELECT p.*, s.Supplier_name, s.IBAN
FROM Products p
JOIN Suppliers s ON p.Supplier_id = s.Supplier_id
WHERE p.Validity > 365;
