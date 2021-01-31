const express = require("express");
const app = express();

const PORT = process.env.PORT === undefined ? 3000 : process.env.PORT;
app.use(express.static("build"));
app.get("*", (_, res) => {
	res.send(express.static("build"));
});
app.listen(PORT, () => {
	console.log(`Served on PORT = ${PORT}`);
});
