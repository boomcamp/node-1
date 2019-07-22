const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, (err) => {
	if (err) return console.error(err);
	console.log(`Server is running on PORT: ${PORT}`);
});
