	Express Controllers (Making the (req,res) function seperatley to make the code optimized !)

let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
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
};

const {
  getPeople,
  createPerson,
} = require("../controllers/people");

router.get("/", getPeople);

// Create a person !

router.post("/", createPerson);


################ Chainning the route with funcitons ! ###############

	If we have a same routing path we can chain it with the relevant funciton
	
router.route("/").get(getPeople).post(createPerson);

router.route("/:id").put(updatePerson).delete(deletePerson);
