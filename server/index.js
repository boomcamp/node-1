const express = require('express');

const getProducts = require('./getProducts');
const { getProduct, addPost, editPost, deletePost } = require('./getProduct');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct);
app.post('/api/product/add', addPost);
app.patch('/api/product/edit/:id', editPost);
app.delete('/api/product/delete/:id', deletePost);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
