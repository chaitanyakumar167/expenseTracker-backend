const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: false }));

const expenseRouter = require("./routes/expense");

app.use(expenseRouter);

sequelize
  .sync()
  .then()
  .catch((err) => console.log(err));

app.listen(5000);
