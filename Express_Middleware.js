const express = require("express");

const app = express();
const { Logger } = require("./logger");

// req=> middleware =>res

// We can use app.use() to make a middleware function work instead of referencing it everywhere
app.use("/about",Logger);

// Using Multiple Middlewware function !

app.use([Logger, authorize]);


app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Server is Listening to port 5000");
});


// Multiple Middleware
// Function based on authorization !
app.use([Logger, authorize]);

const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "mouli") {
    req.user = { name: "mouli", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
    return;
  }
};

module.exports.authorize = authorize;
