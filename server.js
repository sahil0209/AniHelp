import express from "express";

const app = express();

const PORT = process.env.PORT ?? 3000;
app.use(express.static("build"));
app.listen(PORT, () => {
	console.log(`Served on PORT = ${PORT}`);
});
