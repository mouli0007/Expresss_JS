Express Router (creating a router instancce for a specific path !)

// Middleware to use in a main file !

const { router} = require("./routes/people");

app.use('/api/people',router)


##########################
const express = require("express");

const router = express.Router();

let { people } = require("../data");

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide name !" });
  }
  res.status(201).json({
    success: true,
    data: [...people, { id: Math.random() * 9999, name }],
  });

  return;
});

router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
