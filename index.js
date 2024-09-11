const express = require("express");
const axios = require("node-fetch");
const app = express();
const PORT = 8000;

// CORS Headers for the frontend
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	next();
});

// Proxy route to forward the request to the API
app.get("/api/expenses", (req, res) => {
	const url =
		"https://creatorapp.zohopublic.com/demo1aarialife/expense-management/json/Expenses/5va7QQPn4ZRMsutMgCqHCxGgXOTzEm9esasrEZmaXJBZkXgBg5GCUZ4848m0Vx6X8ZHGq0fE08eedfADP4UJUaNntW3sUtJPQhrv";

	fetch(url)
		.then(async (response) => {
			const data = await response.json();
			res.send(data)
			return
		})
		.then((data) => res.json(data))
		.catch((error) => res.status(500).json({ error: "Something went wrong!" }));
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
