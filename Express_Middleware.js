const express = require("express");

const app = express();
const { Logger } = require("./logger");

// req=> middleware =>res

// We can use app.use() to make a middleware function work instead of referencing it everywhere
app.use("/about",Logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Server is Listening to port 5000");
});
