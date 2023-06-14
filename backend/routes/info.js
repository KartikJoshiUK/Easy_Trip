const express = require("express");
const router = express.Router();
const { setSignUp, updateUser } = require("../controllers/auth");
const { setOrder } = require("../controllers/order");
const {
  getAllInfo,
  getMetaInfo,
  getSingleInfo,
} = require("../controllers/info");

router.get("/", (req, res) => {
  res.send("HELLO WORLD");
});
router.post("/signup", setSignUp);
router.post("/userupdate", updateUser);
router.post("/order", setOrder);

router.get("/:info", getAllInfo);
router.get("/:info/meta", getMetaInfo);
router.get("/:info/:id", getSingleInfo);

module.exports = router;
