// Express !

const express = require("express");
const app = express();

// Getting all the related files needed !
// Selecting the relevent Folder for it 
app.use(express.static("./navbar-app"));

// Path module !
const path = require("path");

// Port 7000
app.listen(7000, (req, res) => {
  console.log("Server is listening to port 7000...");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./navbar-app/index.html"));
});

app.get("*", (req, res) => {
  res.status(404).send("Resource not found !");
});
