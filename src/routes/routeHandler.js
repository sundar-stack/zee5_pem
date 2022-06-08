const express = require("express");
const router = express.Router();
const { getCarouselData } = require("../controllers/CarouselController");
const {
  createContestFormData,
} = require("../controllers/ContestFormController");
const { healthCheck } = require("../utils/helper");

router.get(`/carousel`, getCarouselData);
router.post(`/createContest`, createContestFormData);

router.get(`/healthCheck`, healthCheck);

module.exports = router;
