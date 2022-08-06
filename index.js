const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const app = express();
const routes = require("./routes")

mongoose
	.connect("mongodb+srv://admin:EmBF0uaVcUDEOwVb@testdb.izgvs.mongodb.net/?retryWrites=true&w=majority")
	.then(() => {
        app.use(cors())
		app.use(express.json())
		app.use("/api", routes)

		app.listen(3000, () => {
			console.log("Server úspěšně spuštěn na portu 3000!")
		});
	});
