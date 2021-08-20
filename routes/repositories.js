const express = require("express");
const Repository = require("../models/repository");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const repositories = await Repository.find();
    res.json(repositories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
