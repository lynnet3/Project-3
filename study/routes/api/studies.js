const router = require("express").Router();
const studyController = require("../../controllers/studyController");

// Matches with "/api/studies"
router.route("/")
  .get(studyController.findAllPosts)
  .post(studyController.create);


module.exports = router;
