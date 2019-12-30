const express = require("express");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");
const { getUsers, getUserById } = require("./users");

const app = express();
const PORT = 4000;

app.get("/api/products/", getProducts);
app.get("/api/product/:id", getProduct);
app.get("/api/users/", getUsers);
app.get("/api/user/:id", getUserById);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
