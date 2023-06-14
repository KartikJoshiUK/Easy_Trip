const express = require("express");
const router = express.Router();

const {
  getPackages,
  getSinglePackage,
  getMetaPackages,
} = require("../controllers/package");

router.get("/", getPackages);
router.get("/meta", getMetaPackages);
router.get("/:id", getSinglePackage);

module.exports = router;
