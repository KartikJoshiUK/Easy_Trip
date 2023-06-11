const db = require("../db");
const setSignUp = async (req, res) => {
  const data = req.body;
  console.log(data);
  const userRef = db.collection("users").doc(data.id);
  userRef
    .set(data)
    .then(() => {
      console.log("User Data Saved");
      res.json(data);
    })
    .catch(() => res.send("User Data is not Saved"));
};
const updateUser = async (req, res) => {
  const data = req.body;
  console.log(data);
  const userRef = db.collection("users").doc(data.id);
  userRef
    .update(data)
    .then(() => {
      console.log("User Data Saved");
      res.json(data);
    })
    .catch(() => res.send("User Data is not Saved"));
};

module.exports = { setSignUp, updateUser };
