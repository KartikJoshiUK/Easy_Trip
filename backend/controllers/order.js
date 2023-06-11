const { v4: uuidv4 } = require("uuid");
const db = require("../db");
const setOrder = async (req, res) => {
  const body = req.body;
  console.log(body);
  const userRef = db.collection("users").doc(body.user);
  const packageRef = body.isCity
    ? db.collection("city").doc(body.package)
    : db.collection("package").doc(body.package);
  const orderId = uuidv4();

  const data = {
    user: userRef,
    package: packageRef,
    date: body.date,
  };
  const orderRef = db.collection("orders").doc(orderId);
  orderRef
    .set(data)
    .then(() => {
      console.log("User Data Saved");
      res.json(data);
    })
    .catch(() => res.send("User Data is not Saved"));
};
module.exports = { setOrder };
