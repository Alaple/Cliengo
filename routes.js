require('dotenv').config()

const express = require("express");
const router = express.Router();
const getMissions = require('./src/getMissions')

router.get("/getRocketMissions", async function (req, res) {
  res.send(await getMissions())
});

module.exports = router;
