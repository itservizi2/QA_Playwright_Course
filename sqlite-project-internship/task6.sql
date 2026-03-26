DELETE FROM Products WHERE Product_id = (SELECT MAX(Product_id) FROM Products);
