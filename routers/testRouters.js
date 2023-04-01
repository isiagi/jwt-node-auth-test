const express = require("express");
const auth = require("../auth/auth")

const testController = require("../controllers/testController")

const router = express.Router();

router.get("/", testController.test);

router.get("/all", auth.authenticationMiddleware, testController.getAll);

module.exports = router;
