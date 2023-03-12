## Brief description:

MySQL is a free and open-source database management system. It was created back in 1995 by the Swedish software company MySQL AB, which has since been bought up by Oracle.

MySQL is a relational database, meaning that the data it contains is related to one another. It uses the straightforward and user-friendly relational model to visualize the data using tables.

## Uses:

Relational databases such as MySQL are used to organize data and identify relationships between key data points.
One use case is setting up a database for an online store. Two tables are set up to process the orders for its products. The first table would contain the customer info such as their name, address, phone number and shipping info. Each information would be in its own column, and each row be assigned a unique customer ID by the database. The second table would contain the customer order info, meaning the customer ID, product ordered, quantity of products, product size, product color, etc.

The two tables are related because they have one thing in common, a customer ID. Therefore, the database can create a relationship between the two tables. And the company can then use a processing application that will be able to submit an order to the database. The database can then go to the customer order table, pull the info about the product order and use the customer ID to look up the customer’s shipping info in the customer info table. The warehouse can use all this info to get the correct product shipped to the right address quickly after an order has been made.

## Strengths and weaknesses:

There are many benefits to relational databases. They are more simple to use that other database types, since they represent data using tables. By being strictly defined and well organized, data duplication is prevented. Relational databases are also very secure, since they only allow authorized users to directly access the data.

But there are also drawbacks. Relational databases can be costly to set up and maintain. Physical storage requirements can also become an issue with larger databases. Storing data using only tables makes it difficult to represent more complex relationships between objects.

## Comparing products:

Besides MySQL, there are many other relational databases, such as SQLite, MariaDB.

MariaDB is backwards compatible with its older versions, supports more storage engines than MySQL, but only supports JSON data types from version 10.2 and up.

SQLite does not require a database server to run, and requires much less free space than MySQL, but it can only handle one connection at a time, unlike MySQL which can handle multiple.

## Additional info:

SQL stands for Structured Query Language, which is a programming language used to create, modify and extract data from the relational database, and also to control user access to the database.
