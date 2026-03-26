SELECT *,
       JULIANDAY(Manufacture_date) + Validity - JULIANDAY('now') as Days_Left
FROM Products
WHERE JULIANDAY(Manufacture_date) + Validity > JULIANDAY('now');

