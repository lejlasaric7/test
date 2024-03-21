console.log("hello");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(morgan("combine"));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.send({
    message: "Hello world",
  });
});

app.listen(process.env.PORT || 8091);
