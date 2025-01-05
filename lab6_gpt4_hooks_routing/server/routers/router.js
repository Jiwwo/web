const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

// Hero роутер
const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero").get(getHeroData).post(postHeroData);

// Brands роутер
const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

// Future Here роутер
const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

// WhatIsGpt роутер
const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

// vr роутер

const {
  getVrData,
  postVrData,
} = require("../controllers/vrDataController");

router.route("/vr-data").get(getVrData).post(postVrData);

const {
  getRegistrationData,
  postRegistrationData
} = require("../controllers/registrationDataController");

router.route("/registration-data")
  .get(getRegistrationData)
  .post(postRegistrationData);

const {
    getBlogData,
    postBlogData,
} = require("../controllers/blogDataController");
  
router.route("/blog").get(getBlogData).post(postBlogData);
  
const {
  getFooterData,
  postFooterData,
} = require("../controllers/footerDataController");

router.route("/footer").get(getFooterData).post(postFooterData);

const {
  getAllRightsData,
  postAllRightsData,
} = require("../controllers/allRightsDataController");

// Define routes for fetching and posting all rights data
router.route("/all-rights")
  .get(getAllRightsData) // Get all rights data
  .post(postAllRightsData); // Post all rights data

  module.exports = router;
