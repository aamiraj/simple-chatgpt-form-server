const { storeTravelerData, getAllTravelerData, getSpecificTraveler } = require("../../controllers/traveler.controller")
const express = require("express");
const router = express.Router()

router.route("/store-data").post(storeTravelerData)
router.route("/all").get(getAllTravelerData)
router.route("/one").get(getSpecificTraveler)

module.exports = router