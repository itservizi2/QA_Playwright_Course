SELECT Product_Category, SUM(Unit_price) as Total_Price
FROM Products
GROUP BY Product_Category;
