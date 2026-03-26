SELECT * FROM Products
WHERE Validity = (SELECT Validity FROM Products WHERE Product_id = 5);
