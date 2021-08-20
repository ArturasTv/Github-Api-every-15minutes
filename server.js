require("dotenv").config();

const cron = require("node-cron");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const updateDatabase = require("./cron/updateDatabase");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to database"));
app.use(express.json());

const repositoriesRouter = require("./routes/repositories");
app.use("/repositories", repositoriesRouter);

cron.schedule("*/15 * * * *", () => {
  console.log("Database Updated"); //Cron job to update database every 15 minutes
  updateDatabase();
});

app.listen(process.env.PORT || 3000, () => console.log("Server started"));
